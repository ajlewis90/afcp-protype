import React, { useEffect, useState } from 'react';
import './OrderConfirmation.css';

const OrderConfirmation = ({ items, onDone }) => {
  const [show, setShow] = useState(false);
  const [orderNum] = useState('AFG-' + Math.floor(1000 + Math.random() * 9000));

  useEffect(() => {
    const t = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div className={`order-conf-overlay ${show ? 'order-conf-visible' : ''}`}>
      <div className="order-conf-content">
        <div className={`order-check-circle ${show ? 'order-check-pop' : ''}`}>
          <span className="order-check-icon">✓</span>
        </div>
        <h1 className="order-conf-title">Order Confirmed!</h1>
        <p className="order-conf-num">Order #{orderNum}</p>

        <div className="order-delivery-badge">
          <span>🚚</span>
          <span>Delivering Tomorrow, 2 – 5 PM</span>
        </div>

        <div className="order-items-list">
          {items.map((item, i) => (
            <div key={i} className="order-item-row">
              <img src={item.image} alt={item.name} className="order-item-img" />
              <div className="order-item-info">
                <div className="order-item-name">{item.name}</div>
                <div className="order-item-meta">
                  Qty: {item.quantity} &nbsp;·&nbsp; {item.price} each
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="order-done-btn" onClick={onDone}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
