import React, { useState, useEffect } from 'react';
import { STATUS_STEPS, STATUS_OFFSETS, getOrderStatus, getStepTime, getDeliveryMeta } from '../../services/orderMeta';
import './OrderDetailSheet.css';

const fmtTime = (ms) => {
  if (!ms) return '';
  const d = new Date(ms);
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
};

const fmtDate = (ms) => {
  if (!ms) return '';
  return new Date(ms).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

const STATUS_ICONS = {
  'Confirmed':        '✅',
  'Processed':        '⚙️',
  'Shipped':          '🚚',
  'Out for Delivery': '📦',
  'Delivered':        '🎉',
};

const STATUS_COLORS = {
  'Confirmed':        '#4B0082',
  'Processed':        '#856404',
  'Shipped':          '#004085',
  'Out for Delivery': '#0d6e4f',
  'Delivered':        '#155724',
};

const OrderDetailSheet = ({ order, onClose }) => {
  const [show, setShow]   = useState(false);
  const [tick, setTick]   = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShow(true));
    // Refresh every 5 s so live progress updates
    const iv  = setInterval(() => setTick(n => n + 1), 5000);
    return () => { cancelAnimationFrame(raf); clearInterval(iv); };
  }, []);

  if (!order) return null;

  const currentStatus = getOrderStatus(order.createdAt);
  const currentStep   = STATUS_STEPS.indexOf(currentStatus);
  const meta          = getDeliveryMeta(order.id);

  const isDelivered   = currentStatus === 'Delivered';
  const isOFD         = currentStatus === 'Out for Delivery';
  const etaMs         = getStepTime(order.createdAt, 'Delivered');
  const etaStr        = fmtDate(etaMs);

  // Hub to show based on current status
  const currentHub = (() => {
    if (currentStep <= 1) return meta.originHub;
    if (currentStep === 2) return meta.transitHub;
    return meta.localHub;
  })();

  const statusBadgeStyle = {
    background: STATUS_COLORS[currentStatus] + '22',
    color: STATUS_COLORS[currentStatus],
  };

  return (
    <div
      className={`order-detail-backdrop ${show ? 'order-detail-visible' : ''}`}
      onClick={onClose}
    >
      <div className="order-detail-sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />

        {/* Header */}
        <div className="order-detail-header">
          <div className="order-detail-header-left">
            <div className="order-detail-num">Order #{order.id}</div>
            <div className="order-detail-date">{order.date} · {order.total}</div>
          </div>
          <button className="order-detail-close" onClick={onClose}>✕</button>
        </div>

        <div className="order-detail-scroll">

          {/* Status badge + carrier */}
          <div className="order-detail-status-row">
            <span className="order-detail-status-badge" style={statusBadgeStyle}>
              {STATUS_ICONS[currentStatus]} {currentStatus}
            </span>
            <div className="order-detail-carrier">
              <span className="carrier-name">{meta.carrier}</span>
              <span className="carrier-track">{meta.trackingNumber}</span>
            </div>
          </div>

          {/* ETA banner when out for delivery or shipped */}
          {(isOFD || currentStatus === 'Shipped') && (
            <div className="order-detail-eta-banner">
              <span>🗓️</span>
              <span>
                {isOFD
                  ? `Expected delivery today — ${etaStr}`
                  : `Estimated delivery: ${etaStr}`}
              </span>
            </div>
          )}

          {/* ── Progress timeline ── */}
          <div className="order-detail-section-title">Delivery Progress</div>
          <div className="order-detail-timeline">
            {STATUS_STEPS.map((step, i) => {
              const isDone    = i <= currentStep;
              const isCurrent = i === currentStep;
              const stepMs    = getStepTime(order.createdAt, step);
              const isLast    = i === STATUS_STEPS.length - 1;
              return (
                <div key={step} className="timeline-row">
                  <div className="timeline-left">
                    <div className={`timeline-dot ${isDone ? 'dot-done' : ''} ${isCurrent ? 'dot-current' : ''}`}>
                      {isDone && !isCurrent ? '✓' : isCurrent ? '●' : ''}
                    </div>
                    {!isLast && <div className={`timeline-line ${isDone ? 'line-done' : ''}`} />}
                  </div>
                  <div className="timeline-content">
                    <div className={`timeline-step-name ${isDone ? 'step-done' : ''}`}>
                      {STATUS_ICONS[step]} {step}
                    </div>
                    <div className="timeline-step-time">
                      {isDone
                        ? fmtTime(stepMs)
                        : `Est. ${fmtTime(stepMs)}`}
                    </div>
                    {isCurrent && step === 'Out for Delivery' && (
                      <div className="timeline-step-detail">Arriving today · Courier en route 🛵</div>
                    )}
                    {isCurrent && step === 'Shipped' && (
                      <div className="timeline-step-detail">Package in transit · {meta.transitHub}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Current location ── */}
          <div className="order-detail-section-title">Current Location</div>
          <div className="order-detail-location-box">
            <span className="location-pin">📍</span>
            <div>
              <div className="location-hub">{currentHub}</div>
              <div className="location-sub">
                {currentStep <= 1 && 'Awaiting dispatch from origin facility'}
                {currentStep === 2 && 'Package in transit via regional hub'}
                {currentStep === 3 && 'Out for delivery from local courier depot'}
                {currentStep >= 4 && 'Delivery completed'}
              </div>
            </div>
          </div>

          {/* ── Delivery outcome (shown once delivered or OFD) ── */}
          {(isDelivered || isOFD) && (
            <>
              <div className="order-detail-section-title">
                {isDelivered ? 'Delivery Outcome' : 'Delivery Details'}
              </div>

              {isDelivered && meta.deliveryFailed ? (
                /* ── Failed delivery ── */
                <div className="order-detail-outcome outcome-failed">
                  <div className="outcome-icon">⚠️</div>
                  <div className="outcome-content">
                    <div className="outcome-title">Delivery Attempt Failed</div>
                    {meta.leftWithNeighbour ? (
                      <>
                        <div className="outcome-sub">Package left with a neighbour</div>
                        <div className="outcome-detail-row">
                          <span className="outcome-detail-label">👤 Neighbour</span>
                          <span className="outcome-detail-val">{meta.neighborName}</span>
                        </div>
                        <div className="outcome-detail-row">
                          <span className="outcome-detail-label">📍 Address</span>
                          <span className="outcome-detail-val">{meta.neighborAddr}</span>
                        </div>
                        <div className="outcome-detail-row">
                          <span className="outcome-detail-label">📞 Phone</span>
                          <a className="outcome-detail-link" href={`tel:${meta.neighborPhone.replace(/\D/g,'')}`}>
                            {meta.neighborPhone}
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="outcome-sub">Package returned to depot</div>
                        <div className="outcome-detail-row">
                          <span className="outcome-detail-label">🏬 Depot</span>
                          <span className="outcome-detail-val">{meta.depotName}</span>
                        </div>
                        <div className="outcome-note">
                          Please collect within 7 days or a re-delivery will be scheduled.
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : isDelivered ? (
                /* ── Successful delivery ── */
                <div className="order-detail-outcome outcome-success">
                  <div className="outcome-icon">✅</div>
                  <div className="outcome-content">
                    <div className="outcome-title">Successfully Delivered</div>
                    <div className="outcome-detail-row">
                      <span className="outcome-detail-label">📦 Placement</span>
                      <span className="outcome-detail-val">{meta.deliveryPlace}</span>
                    </div>
                    <div className="outcome-detail-row">
                      <span className="outcome-detail-label">✍️ Signed by</span>
                      <span className="outcome-detail-val">{meta.signatory}</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Out for delivery ── */
                <div className="order-detail-outcome outcome-ofd">
                  <div className="outcome-icon">🛵</div>
                  <div className="outcome-content">
                    <div className="outcome-title">Courier is on the way</div>
                    <div className="outcome-sub">Your package is out for delivery. Please ensure someone is available to receive it or the package may be left in a safe place.</div>
                    <div className="outcome-detail-row">
                      <span className="outcome-detail-label">📅 ETA</span>
                      <span className="outcome-detail-val">{etaStr}</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* ── Items in this order ── */}
          <div className="order-detail-section-title">Items Ordered</div>
          <div className="order-detail-items">
            {order.items.map((item, i) => (
              <div key={i} className="order-detail-item-row">
                <img src={item.image} alt={item.name} className="order-detail-item-img" />
                <div className="order-detail-item-info">
                  <div className="order-detail-item-name">{item.name}</div>
                  {item.selectedOption && (
                    <div className="order-detail-item-opt">{item.selectedOption}</div>
                  )}
                  <div className="order-detail-item-meta">
                    Qty: {item.quantity} · {item.total || item.price}
                  </div>
                </div>
                <div className="order-detail-item-price">{item.total || item.price}</div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="order-detail-total-row">
            <span className="order-detail-total-label">Order Total</span>
            <span className="order-detail-total-val">{order.total}</span>
          </div>

        </div>{/* end scroll */}
      </div>
    </div>
  );
};

export default OrderDetailSheet;
