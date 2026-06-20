import React from 'react';
import './OrdersSheet.css';

const STATUS_STEPS = ['Confirmed', 'Processing', 'Shipped', 'Delivered'];

const getStatusStep = (status) => STATUS_STEPS.indexOf(status);

const OrdersSheet = ({ orders, onClose }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const t = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(t);
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
              const step = getStatusStep(order.status);
              return (
                <div key={order.id} className="order-card">
                  <div className="order-card-header">
                    <div>
                      <div className="order-card-num">Order #{order.id}</div>
                      <div className="order-card-date">{order.date}</div>
                    </div>
                    <span className={`order-status-badge status-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>

                  <div className="order-progress">
                    {STATUS_STEPS.map((s, i) => (
                      <React.Fragment key={s}>
                        <div className="progress-step">
                          <div className={`progress-dot ${i <= step ? 'done' : ''}`}>
                            {i < step ? '✓' : i === step ? '●' : ''}
                          </div>
                          <span className={`progress-label ${i <= step ? 'done' : ''}`}>{s}</span>
                        </div>
                        {i < STATUS_STEPS.length - 1 && (
                          <div className={`progress-line ${i < step ? 'done' : ''}`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="order-items-preview">
                    {order.items.map((item, j) => (
                      <div key={j} className="order-preview-row">
                        <img src={item.image} alt={item.name} className="order-preview-img" />
                        <div className="order-preview-info">
                          <div className="order-preview-name">{item.name}</div>
                          {item.selectedOption && (
                            <div className="order-preview-option">{item.selectedOption}</div>
                          )}
                          <div className="order-preview-meta">Qty: {item.quantity} · {item.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="order-card-footer">
                    <span className="order-total-label">Total</span>
                    <span className="order-total-val">{order.total}</span>
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
