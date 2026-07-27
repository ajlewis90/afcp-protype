import React from 'react';
import './LeftSidebar.css';

const IconNewChat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="12" y1="9" x2="12" y2="15"/><line x1="9" y1="12" x2="15" y2="12"/>
  </svg>
);

const IconHistory = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/>
    <path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
    <polyline points="12 7 12 12 15 15"/>
  </svg>
);

const IconAccount = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconCart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconOrders = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const IconHamburger = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const NAV_ITEMS = [
  { id: 'newChat',     label: 'New Chat',         Icon: IconNewChat  },
  { id: 'history',     label: 'History',           Icon: IconHistory  },
  { id: 'account',     label: 'My Account',        Icon: IconAccount  },
  { id: 'cart',        label: 'My Cart',           Icon: IconCart     },
  { id: 'orders',      label: 'My Orders',         Icon: IconOrders   },
  { id: 'suggestions', label: 'Suggestions For You', Icon: IconStar   },
];

const LeftSidebar = ({ expanded, onToggle, onAction, cartCount }) => {
  return (
    <>
      {/* Backdrop — closes sidebar when tapping outside */}
      {expanded && (
        <div className="sidebar-backdrop" onClick={onToggle} />
      )}

      <div className={`left-sidebar ${expanded ? 'left-sidebar--expanded' : ''}`}>
        {/* Hamburger toggle */}
        <button
          className="sidebar-toggle-btn"
          onClick={onToggle}
          aria-label={expanded ? 'Collapse menu' : 'Expand menu'}
        >
          <IconHamburger />
        </button>

        <div className="sidebar-divider" />

        {/* Nav items */}
        <nav className="sidebar-nav">
          {NAV_ITEMS.map(({ id, label, Icon }) => (
            <button
              key={id}
              className="sidebar-item"
              onClick={() => { onAction(id); if (expanded) onToggle(); }}
              title={!expanded ? label : undefined}
            >
              <span className="sidebar-item-icon">
                <Icon />
              </span>
              {expanded && <span className="sidebar-item-label">{label}</span>}

              {/* Cart item count badge */}
              {id === 'cart' && cartCount > 0 && (
                <span className={`sidebar-badge ${expanded ? 'sidebar-badge--inline' : ''}`}>
                  {cartCount}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default LeftSidebar;
