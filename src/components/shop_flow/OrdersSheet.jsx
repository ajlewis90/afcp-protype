import React, { useState, useEffect } from 'react';
import { STATUS_STEPS, getOrderStatus } from '../../services/orderMeta';
import './OrdersSheet.css';

const getStatusStep = (status) => STATUS_STEPS.indexOf(status);

const STATUS_BADGE_CLASS = {
  'Confirmed':        'status-confirmed',
  'Processed':        'status-processed',
  'Shipped':          'status-shipped',
  'Out for Delivery': 'status-ofd',
  'Delivered':        'status-delivered',
};

const OrdersSheet = ({ orders, onClose, onViewDetail }) => {
  const [show, setShow] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = requestAnimationFrame(() => setShow(true));
    // Re-compute statuses every 5 s so UI stays live
    const interval = setInterval(() => setTick(n => n + 1), 5000);
    return () => { cancelAnimationFrame(t); clearInterval(interval); };
  }, []);

  return (
    <div className={`orders-backdrop ${show ? 'orders-visible' : ''}`} onClick={onClose}>
      <div className="orders-sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="orders-header">
          <h2 className="orders-title">My Orders</h2>
          <button className="orders-close-btn" onClick={onClose}>✕</button>
        </div>

        {orders.length === 0 ? (
          <div className="orders-empty">
            <div className="orders-empty-icon">📦</div>
            <p>No orders yet</p>
            <span>Items you purchase will appear here</span>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => {
              const status = getOrderStatus(order.createdAt);
              const step   = getStatusStep(status);
              return (
                <div key={order.id} className="order-card">
                  {/* Header */}
                  <div className="order-card-header">
                    <div>
                      <div className="order-card-num">Order #{order.id}</div>
                      <div className="order-card-date">{order.date}</div>
                    </div>
                    <span className={`order-status-badge ${STATUS_BADGE_CLASS[status] || 'status-confirmed'}`}>
                      {status}
                    </span>
                  </div>

                  {/* 5-step progress tracker */}
                  <div className="order-progress">
                    {STATUS_STEPS.map((s, i) => (
                      <React.Fragment key={s}>
                        <div className="progress-step">
                          <div className={`progress-dot ${i <= step ? 'done' : ''}`}>
                            {i < step ? '✓' : i === step ? '●' : ''}
                          </div>
                          <span className={`progress-label ${i <= step ? 'done' : ''}`}>
                            {s === 'Out for Delivery' ? 'Out for\nDelivery' : s}
                          </span>
                        </div>
                        {i < STATUS_STEPS.length - 1 && (
                          <div className={`progress-line ${i < step ? 'done' : ''}`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Item list */}
                  <div className="order-items-preview">
                    {order.items.map((item, j) => (
                      <div key={j} className="order-preview-row">
                        <img src={item.image} alt={item.name} className="order-preview-img" />
                        <div className="order-preview-info">
                          <div className="order-preview-name">{item.name}</div>
                          {item.selectedOption && (
                            <div className="order-preview-option">{item.selectedOption}</div>
                          )}
                          <div className="order-preview-meta">
                            Qty: {item.quantity} · {item.total || item.price}
                          </div>
                        </div>
                        <div className="order-item-price">
                          {item.total || item.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer: total + view details */}
                  <div className="order-card-footer">
                    <div className="order-footer-left">
                      <span className="order-total-label">Order Total</span>
                      <span className="order-total-val">{order.total}</span>
                    </div>
                    <button
                      className="order-view-detail-btn"
                      onClick={() => onViewDetail?.(order.id)}
                    >
                      Track →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersSheet;
