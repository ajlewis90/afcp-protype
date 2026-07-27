/**
 * Shared order-status machine + deterministic delivery metadata generator.
 * Imported by App.jsx, OrdersSheet, OrderDetailSheet.
 */

// ── Status timing constants ─────────────────────────────────────────────────
export const SEC  = 1_000;
export const MIN  = 60 * SEC;
export const HOUR = 60 * MIN;

export const STATUS_STEPS = ['Confirmed', 'Processed', 'Shipped', 'Out for Delivery', 'Delivered'];

/** Elapsed-ms offset from createdAt at which each status becomes active */
export const STATUS_OFFSETS = {
  'Confirmed':          0,
  'Processed':          10 * SEC,                         // 10 s
  'Shipped':            10 * SEC + 10 * MIN,              // ~10 min
  'Out for Delivery':   10 * SEC + 10 * MIN + 23 * HOUR,  // ~23 h after shipped
  'Delivered':          10 * SEC + 10 * MIN + 24 * HOUR,  // ~1 h after OFD
};

export const getOrderStatus = (createdAt) => {
  if (!createdAt) return 'Confirmed';
  const elapsed = Date.now() - createdAt;
  if (elapsed >= STATUS_OFFSETS['Delivered'])          return 'Delivered';
  if (elapsed >= STATUS_OFFSETS['Out for Delivery'])   return 'Out for Delivery';
  if (elapsed >= STATUS_OFFSETS['Shipped'])            return 'Shipped';
  if (elapsed >= STATUS_OFFSETS['Processed'])          return 'Processed';
  return 'Confirmed';
};

/** Timestamp (ms) at which a step will/did activate for this order */
export const getStepTime = (createdAt, step) =>
  createdAt + (STATUS_OFFSETS[step] || 0);

// ── Delivery metadata generator ─────────────────────────────────────────────

const CARRIERS = ['FedEx', 'UPS', 'USPS', 'DHL'];

const HUBS = [
  'Los Angeles, CA', 'Chicago, IL', 'Dallas, TX', 'Atlanta, GA',
  'Phoenix, AZ', 'Denver, CO', 'Seattle, WA', 'Miami, FL',
  'Philadelphia, PA', 'Houston, TX', 'Nashville, TN', 'Portland, OR',
];

const DELIVERY_PLACES = [
  'Left at front door step',
  'Placed at rear entrance',
  'Left securely at mailbox',
  'Delivered to building reception',
  'Left on covered porch',
];

const SIGNATORIES = [
  'Alex (resident)',
  'Jamie (household member)',
  'Sam (household member)',
  'Jordan (resident)',
  'Casey (family member)',
  'Morgan (household)',
];

const NEIGHBOR_NAMES = [
  'Sarah Johnson', 'Michael Chen', 'Emily Davis', 'Robert Kim',
  'Lisa Thompson', 'James Martinez', 'Olivia Wilson', 'David Lee',
  'Emma Garcia', 'Noah Brown',
];

const NEIGHBOR_STREETS = [
  'Oak Street', 'Maple Avenue', 'Pine Road', 'Cedar Lane', 'Elm Drive',
  'Birch Court', 'Willow Way', 'Ash Boulevard', 'Chestnut Place', 'Poplar Street',
];

const DEPOT_SUFFIXES = [
  'Ship Center — Downtown', 'Customer Center — Westside',
  'Main Sorting Facility', 'Service Point — Eastgate', 'Pack & Ship — Central',
];

function djb2(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h * 33) ^ str.charCodeAt(i)) & 0xffffffff;
  }
  return Math.abs(h);
}

function pick(arr, n) { return arr[Math.abs(n) % arr.length]; }

export function getDeliveryMeta(orderId) {
  const h = djb2(String(orderId));

  const carrier    = pick(CARRIERS, h);
  const originHub  = pick(HUBS, h + 1);
  const transitHub = pick(HUBS, h + 3);
  const localHub   = pick(HUBS, h + 7);

  const prefixes = { FedEx: 'FX', UPS: '1Z', USPS: '9400', DHL: 'JD' };
  const trackingNumber = `${prefixes[carrier]}${String(h).padStart(12, '0').slice(0, 12)}`;

  // ~25 % failed delivery (seeded, so same order always same outcome)
  const deliveryFailed    = (h % 4) === 0;
  // For failed: ~60 % neighbour, ~40 % depot
  const leftWithNeighbour = deliveryFailed && (h % 5) !== 0;

  const neighborName   = pick(NEIGHBOR_NAMES, h + 2);
  const neighborStreet = pick(NEIGHBOR_STREETS, h + 5);
  const neighborUnit   = (h % 9) + 1;
  const neighborNum    = (h % 94) + 2;
  const neighborAddr   = `${neighborNum} ${neighborStreet}, Unit ${neighborUnit}`;
  const areaCode       = 200 + (h % 600);
  const mid3           = 100 + (h % 800);
  const last4          = 1000 + (h % 8999);
  const neighborPhone  = `(${areaCode}) ${String(mid3).padStart(3,'0')}-${String(last4).padStart(4,'0')}`;

  const depotName     = `${carrier} ${pick(DEPOT_SUFFIXES, h + 4)}`;
  const deliveryPlace = pick(DELIVERY_PLACES, h + 6);
  const signatory     = pick(SIGNATORIES, h + 8);

  return {
    carrier, trackingNumber,
    originHub, transitHub, localHub,
    deliveryFailed, leftWithNeighbour,
    neighborName, neighborAddr, neighborPhone,
    depotName, deliveryPlace, signatory,
  };
}
