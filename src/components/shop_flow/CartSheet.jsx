import React from 'react';
import './CartSheet.css';

const parsePrice = (p) => {
  if (typeof p === 'number') return p;
  return parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;
};

const fmt = (n) => `$${n.toFixed(2)}`;

// ─── BOGO-aware per-item effective total ──────────────────────────────────────
const itemEffectiveTotal = (item) => {
  const unit = parsePrice(item.price);
  const qty  = item.quantity;
  if (item.offer?.type === 'bogo') {
    const setSize  = (item.offer.buy || 2) + (item.offer.get || 1);
    const freeQty  = Math.floor(qty / setSize);
    return unit * (qty - freeQty);
  }
  return unit * qty;
};

const cartGrandTotal = (items) =>
  items.reduce((sum, i) => sum + itemEffectiveTotal(i), 0);

const CartSheet = ({ items, onClose, onUpdateQty, onCheckout }) => {
  const total    = cartGrandTotal(items);
  const origTotal = items.reduce((s, i) => s + parsePrice(i.price) * i.quantity, 0);
  const savings  = origTotal - total;

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
              {items.map(item => {
                const unit    = parsePrice(item.price);
                const effTotal = itemEffectiveTotal(item);
                const isBogo  = item.offer?.type === 'bogo';
                const setSize  = isBogo ? (item.offer.buy + item.offer.get) : 3;
                const freeQty  = isBogo ? Math.floor(item.quantity / setSize) : 0;
                const bogoActive = isBogo && freeQty > 0;

                return (
                  <div key={item.id} className="cart-item-row">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-info">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-business">{item.business}</div>

                      {/* Price row — show original struck-through if discounted */}
                      <div className="cart-price-row">
                        {item.originalPrice && (
                          <span className="cart-item-original-price">{item.originalPrice}</span>
                        )}
                        <span className="cart-item-price">{item.price}</span>
                      </div>

                      {/* BOGO active badge */}
                      {bogoActive && (
                        <div className="cart-bogo-badge">
                          🎁 {freeQty} free item{freeQty > 1 ? 's' : ''} applied
                        </div>
                      )}

                      {/* Line total */}
                      <div className="cart-line-total">{fmt(effTotal)}</div>
                    </div>

                    <div className="cart-qty-ctrl">
                      <button className="qty-btn qty-btn-minus" onClick={() => onUpdateQty(item.id, -1)}>−</button>
                      <span className="qty-val">{item.quantity}</span>
                      <button className="qty-btn qty-btn-plus" onClick={() => onUpdateQty(item.id, 1)}>+</button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-footer">
              {/* Savings line — only if there's a discount */}
              {savings > 0.005 && (
                <div className="cart-savings-row">
                  <span>🏷️ You save</span>
                  <span className="cart-savings-val">−{fmt(savings)}</span>
                </div>
              )}
              <div className="cart-total-row">
                <span className="cart-total-label">Total</span>
                <span className="cart-total-val">{fmt(total)}</span>
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
