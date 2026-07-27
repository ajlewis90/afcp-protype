import React, { useState } from 'react';
import './CheckoutSheet.css';

const parsePrice = (p) => {
  if (typeof p === 'number') return p;
  return parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;
};

const fmt = (n) => `$${n.toFixed(2)}`;

// ─── BOGO-aware grand total (mirrors CartSheet) ───────────────────────────────
const itemEffectiveTotal = (item) => {
  const unit = parsePrice(item.price);
  const qty  = item.quantity;
  if (item.offer?.type === 'bogo') {
    const setSize = (item.offer.buy || 2) + (item.offer.get || 1);
    return unit * (qty - Math.floor(qty / setSize));
  }
  return unit * qty;
};

const CheckoutSheet = ({ items, onClose, onOrderComplete }) => {
  const [paying, setPaying] = useState(false);
  const [method, setMethod] = useState(null);

  const total    = items.reduce((s, i) => s + itemEffectiveTotal(i), 0);
  const origTotal = items.reduce((s, i) => s + parsePrice(i.price) * i.quantity, 0);
  const savings  = origTotal - total;

  // Collect applied offer labels for summary (deduplicated)
  const offerLabels = [...new Set(
    items.filter(i => i.offer && i.offer.type !== 'urgency').map(i => i.offer.label)
  )];

  const handlePay = (m) => {
    setMethod(m);
    setPaying(true);
    setTimeout(() => onOrderComplete(), 1800);
  };

  return (
    <div className="sheet-backdrop" onClick={paying ? undefined : onClose}>
      <div className="checkout-sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="checkout-header">
          <h2 className="checkout-title">Checkout</h2>
          {!paying && <button className="cart-sheet-close" onClick={onClose}>✕</button>}
        </div>

        <div className="checkout-summary-box">
          <div className="checkout-summary-row">
            <span>{items.length} item{items.length !== 1 ? 's' : ''}</span>
            <span>{fmt(origTotal)}</span>
          </div>

          {/* Applied offer lines */}
          {offerLabels.map(label => (
            <div key={label} className="checkout-summary-row checkout-offer-row">
              <span>🏷️ {label}</span>
              <span className="checkout-offer-val">−{fmt(savings)}</span>
            </div>
          ))}

          <div className="checkout-summary-row">
            <span>Delivery</span>
            <span className="checkout-free">FREE</span>
          </div>
          <div className="checkout-divider" />
          <div className="checkout-summary-row checkout-total-row">
            <span>Total</span>
            <span className="checkout-total-val">{fmt(total)}</span>
          </div>
        </div>

        <div className="checkout-payment-section">
          <div className="checkout-section-title">Pay with</div>

          <button className="apple-pay-btn" onClick={() => handlePay('apple')} disabled={paying}>
            {paying && method === 'apple' ? (
              <span className="pay-spinner" />
            ) : (
              <span className="apple-pay-inner">
                <span className="apple-logo"> </span>
                <span>Pay</span>
              </span>
            )}
          </button>

          <button className="google-pay-btn" onClick={() => handlePay('google')} disabled={paying}>
            {paying && method === 'google' ? (
              <span className="pay-spinner pay-spinner-dark" />
            ) : (
              <span className="google-pay-inner">
                <span className="g-logo">G</span>
                <span>Pay</span>
              </span>
            )}
          </button>

          <div className="checkout-or">
            <span className="or-line" />
            <span className="or-text">or pay with saved card</span>
            <span className="or-line" />
          </div>

          <button className="saved-card-btn" onClick={() => handlePay('card')} disabled={paying}>
            <div className="saved-card-left">
              <div className="card-chip"><div className="chip-inner" /></div>
              <div className="card-details">
                <div className="card-num">•••• •••• •••• 4242</div>
                <div className="card-exp">Expires 12/27</div>
              </div>
            </div>
            <div className="card-right">
              {paying && method === 'card' ? (
                <span className="pay-spinner pay-spinner-dark" />
              ) : (
                <>
                  <span className="card-pay-label">Pay {fmt(total)}</span>
                  <span className="visa-badge">VISA</span>
                </>
              )}
            </div>
          </button>
        </div>

        <p className="checkout-secure">🔒 Secured by Stripe · 256-bit encryption</p>
      </div>
    </div>
  );
};

export default CheckoutSheet;
