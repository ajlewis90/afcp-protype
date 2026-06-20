import React from 'react';
import './CartSheet.css';

const parsePrice = (p) => {
  if (typeof p === 'number') return p;
  return parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;
};

const CartSheet = ({ items, onClose, onUpdateQty, onCheckout }) => {
  const total = items.reduce((sum, i) => sum + parsePrice(i.price) * i.quantity, 0);

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="cart-sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="cart-sheet-header">
          <h2 className="cart-sheet-title">My Cart</h2>
          <button className="cart-sheet-close" onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <div>Your cart is empty</div>
            <div className="cart-empty-sub">Ask the agent to find products for you</div>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {items.map(item => (
                <div key={item.id} className="cart-item-row">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-business">{item.business}</div>
                    <div className="cart-item-price">{item.price}</div>
                  </div>
                  <div className="cart-qty-ctrl">
                    <button
                      className="qty-btn qty-btn-minus"
                      onClick={() => onUpdateQty(item.id, -1)}
                    >−</button>
                    <span className="qty-val">{item.quantity}</span>
                    <button
                      className="qty-btn qty-btn-plus"
                      onClick={() => onUpdateQty(item.id, 1)}
                    >+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total-row">
                <span className="cart-total-label">Total</span>
                <span className="cart-total-val">${total.toFixed(2)}</span>
              </div>
              <button className="cart-checkout-btn" onClick={onCheckout}>
                Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSheet;
