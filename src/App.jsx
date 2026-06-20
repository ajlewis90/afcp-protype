import React, { useState } from 'react';
import Text from './components/home_tab_components/Text';
import SearchBar from './components/home_tab_components/SearchBar';
import BeautyTabIcon from './components/home_tab_components/BeautyTabIcon';
import BeautyCategoryText from './components/home_tab_components/BeautyCategoryText';
import ApparelIcon from './components/home_tab_components/ApparelIcon';
import ApparelText from './components/home_tab_components/ApparelText';
import FurnitureIcon from './components/home_tab_components/FurnitureIcon';
import FurnitureText from './components/home_tab_components/FurnitureText';
import ShoesIcon from './components/home_tab_components/ShoesIcon';
import ShoesText from './components/home_tab_components/ShoesText';
import ToysIcon from './components/home_tab_components/ToysIcon';
import ToysText from './components/home_tab_components/ToysText';
import GlassesIcon from './components/home_tab_components/GlassesIcon';
import GlassesText from './components/home_tab_components/GlassesText';
import HouseCleaningIcon from './components/home_tab_components/HouseCleaningIcon';
import HouseCleaningText from './components/home_tab_components/HouseCleaningText';
import PersonalCareIcon from './components/home_tab_components/PersonalCareIcon';
import PersonalCareText from './components/home_tab_components/PersonalCareText';
import Card from './components/home_tab_components/Card';
import ApparelCard from './components/home_tab_components/ApparelCard';
import ToysCard from './components/home_tab_components/ToysCard';
import ShoesCard from './components/home_tab_components/ShoesCard';
import CartsText from './components/home_tab_components/CartsText';
import CartOneImage from './components/home_tab_components/CartOneImage';
import CartOneBusinessName from './components/home_tab_components/CartOneBusinessName';
import CartOneBusinessPrice from './components/home_tab_components/CartOneBusinessPrice';
import ViewBusinessOneCartButton from './components/home_tab_components/ViewBusinessOneCartButton';
import CartTwoImage from './components/home_tab_components/CartTwoImage';
import CartTwoBusinessName from './components/home_tab_components/CartTwoBusinessName';
import CartTwoBusinessPrice from './components/home_tab_components/CartTwoBusinessPrice';
import ViewBusinessTwoCartButton from './components/home_tab_components/ViewBusinessTwoCartButton';
import CartThreeImage from './components/home_tab_components/CartThreeImage';
import CartThreeBusinessName from './components/home_tab_components/CartThreeBusinessName';
import CartThreeBusinessPrice from './components/home_tab_components/CartThreeBusinessPrice';
import ViewBusinessThreeCartButton from './components/home_tab_components/ViewBusinessThreeCartButton';
import CartDetails from './components/home_tab_components/CartDetails';
import CompanionChatHeader from './components/companion_tab_components/CompanionChatHeader';
import NotificationBell from './components/companion_tab_components/NotificationBell';
import ChatMessage from './components/companion_tab_components/ChatMessage';
import ChatInput from './components/companion_tab_components/ChatInput';
import VirtualTryOnModal from './components/companion_tab_components/VirtualTryOnModal';
import ProductDetailOne from './components/home_tab_components/ProductDetailOne';
import ProductDetailTwo from './components/home_tab_components/ProductDetailTwo';
import ProductDetailThree from './components/home_tab_components/ProductDetailThree';
import ProductDetailFour from './components/home_tab_components/ProductDetailFour';
import ProductDetailFive from './components/home_tab_components/ProductDetailFive';
import ProductDetailSix from './components/home_tab_components/ProductDetailSix';
import ProductDetailSeven from './components/home_tab_components/ProductDetailSeven';
import ProductDetailEight from './components/home_tab_components/ProductDetailEight';
import MeCard from './components/me_tab_components/MeCard';
import HomeIcon from './components/HomeIcon';
import CompanionIcon from './components/CompanionIcon';
import MeIcon from './components/MeIcon';
import CartsIcon from './components/CartsIcon';
import HomeTabText from './components/HomeTabText';
import CompanionTabText from './components/CompanionTabText';
import MeTabText from './components/MeTabText';
import CartsTabText from './components/CartsTabText';
import ProductDetailSheet from './components/shop_flow/ProductDetailSheet';
import CartSheet from './components/shop_flow/CartSheet';
import CheckoutSheet from './components/shop_flow/CheckoutSheet';
import OrderConfirmation from './components/shop_flow/OrderConfirmation';
import OrdersSheet from './components/shop_flow/OrdersSheet';
import './App.css';

// ─── Product catalog (real products from app components) ─────────────────────
const productsByCategory = {
  // ── Beauty ──────────────────────────────────────────────────────────────
  beauty: [
    {
      id: 1,
      name: 'La Mer The Moisturizing Soft Cream',
      business: 'La Mer',
      price: '$100.00',
      rating: 4.9,
      reviews: 3800,
      description: "Luxurious, lightweight cream delivers the same radiance and renewal that made the original Crème de la Mer a legend. It infuses skin with the healing energies of Miracle Broth, the heart of La Mer's profound powers of transformation.",
      tags: ['15ml – $100', '30ml – $200'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/fbe819f5-01ef-4c42-b37c-0ebcb7c3fda5.png',
    },
    {
      id: 2,
      name: 'Dior Dway Slide Sandal in Embroidered Cotton',
      business: 'Dior',
      price: '$1,100.00',
      rating: 4.7,
      reviews: 950,
      description: 'Elegant slide sandal featuring embroidered cotton, offering a luxurious and comfortable design perfect for any occasion. Crafted with premium materials for style and durability.',
      tags: ['Black', 'White'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/6e6aee90-d251-49d2-b465-498a99659f3a.png',
    },
  ],
  // ── Toys ────────────────────────────────────────────────────────────────
  toys: [
    {
      id: 3,
      name: 'Lego Star Wars Millennium Falcon',
      business: 'LEGO',
      price: '$45.00',
      rating: 4.9,
      reviews: 2100,
      description: 'The Lego Star Wars Millennium Falcon is a must-have for any Star Wars fan. This iconic starship features stunning detail and is perfect for both play and display.',
      tags: ['200 pcs – $60', '400 pcs – $100'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/545b2668-558f-420c-9fc6-c2b4ccdf0ed2.png',
    },
    {
      id: 4,
      name: 'Fisher-Price Laugh & Learn Smart Stages Chair',
      business: 'Fisher-Price',
      price: '$40.00',
      rating: 4.8,
      reviews: 4700,
      description: 'The Fisher-Price Laugh & Learn Smart Stages Chair is a fun and educational toy for toddlers, featuring interactive songs, phrases, and activities that grow with your child.',
      tags: ['Yellow – $40', 'Blue – $40'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/510cfb6b-37eb-4d34-b364-a3f46741363e.png',
    },
  ],
  // ── Apparel ─────────────────────────────────────────────────────────────
  apparel: [
    {
      id: 5,
      name: "Levi's 501 Original Fit Jeans",
      business: "Levi's",
      price: '$70.00',
      rating: 4.8,
      reviews: 12400,
      description: "The Levi's 501 Original Fit Jeans are a timeless classic, offering a comfortable fit and iconic style for everyday wear.",
      tags: ['S', 'M', 'L', 'XL'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/d59d7261-5ecd-4484-9551-44dc1d93fe45.png',
    },
    {
      id: 6,
      name: "Ralph Lauren Men's Polo Shirt",
      business: 'Ralph Lauren',
      price: '$50.00',
      rating: 4.7,
      reviews: 8900,
      description: "The Ralph Lauren Men's Polo Shirt combines classic style with modern comfort, perfect for casual and semi-formal occasions.",
      tags: ['Black', 'White', 'Navy'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/2f3b0fff-5715-4d07-8c8a-a6ad268192a1.png',
    },
  ],
  // ── Shoes ───────────────────────────────────────────────────────────────
  shoes: [
    {
      id: 7,
      name: "Nike Air Force 1 '07 Sneaker",
      business: 'Nike',
      price: '$335.00',
      rating: 4.9,
      reviews: 18700,
      description: "The Nike Air Force 1 '07 Sneaker in White/White offers timeless style and comfort with its iconic design and cushioned sole, perfect for everyday wear.",
      tags: ['US 6', 'US 7', 'US 8', 'US 9'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/0fd8e547-6f14-4dfc-8c01-42f39be7636c.png',
    },
    {
      id: 8,
      name: 'Adidas Ultraboost Running Shoe',
      business: 'Adidas',
      price: '$150.00',
      rating: 4.8,
      reviews: 9300,
      description: 'The Adidas Ultraboost 5.0 Sneaker offers unparalleled comfort and performance with its responsive Boost midsole and breathable Primeknit upper, ideal for running and casual wear.',
      tags: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/027eb941-5abd-4ad4-8438-8237473aaa99.png',
    },
  ],
};

// ─── Category detection ───────────────────────────────────────────────────────
const detectCategory = (message) => {
  const m = message.toLowerCase();
  if (
    m.includes('shoe') || m.includes('sneaker') || m.includes('trainer') ||
    m.includes('nike') || m.includes('adidas') || m.includes('air force') ||
    m.includes('ultraboost') || m.includes('running shoe') || m.includes('boot') ||
    m.includes('footwear')
  ) return 'shoes';
  if (
    m.includes('toy') || m.includes('lego') || m.includes('star wars') ||
    m.includes('millennium') || m.includes('falcon') || m.includes('fisher') ||
    m.includes('educational') || m.includes('blocks') || m.includes('doll') ||
    m.includes('action figure') || m.includes('remote control') || m.includes('toddler') ||
    m.includes('kids')
  ) return 'toys';
  if (
    m.includes('jean') || m.includes('denim') || m.includes('levi') ||
    m.includes('polo') || m.includes('shirt') || m.includes('dress') ||
    m.includes('trouser') || m.includes('pant') || m.includes('jacket') ||
    m.includes('hoodie') || m.includes('cloth') || m.includes('apparel') ||
    m.includes('outfit') || m.includes('ralph lauren') || m.includes('wear') ||
    m.includes('fashion') || m.includes('top')
  ) return 'apparel';
  if (
    m.includes('beauty') || m.includes('cream') || m.includes('moistur') ||
    m.includes('la mer') || m.includes('skin') || m.includes('face') ||
    m.includes('sandal') || m.includes('slide') || m.includes('dior') ||
    m.includes('lotion') || m.includes('serum') || m.includes('makeup') ||
    m.includes('balm') || m.includes('sunscreen') || m.includes('spf') ||
    m.includes('fragrance') || m.includes('luxury')
  ) return 'beauty';
  return null;
};

const categoryDisplayNames = {
  beauty: 'beauty & luxury items',
  toys: 'toys',
  apparel: 'clothing',
  shoes: 'shoes & sneakers',
};

function App() {
  const [activeTab, setActiveTab] = useState('Agent');
  const [activeCategory, setActiveCategory] = useState('Beauty');
  const [activeFilter, setActiveFilter] = useState('All');
  const [messages, setMessages] = useState([
    {
      isBot: true,
      text: "What are you looking for?",
      avatar: '/shopper-agent-logo.png',
    },
  ]);

  // Home-tab product detail modals (legacy)
  const [showProductDetailOne, setShowProductDetailOne] = useState(false);
  const [showProductDetailTwo, setShowProductDetailTwo] = useState(false);
  const [showProductDetailThree, setShowProductDetailThree] = useState(false);
  const [showProductDetailFour, setShowProductDetailFour] = useState(false);
  const [showProductDetailFive, setShowProductDetailFive] = useState(false);
  const [showProductDetailSix, setShowProductDetailSix] = useState(false);
  const [showProductDetailSeven, setShowProductDetailSeven] = useState(false);
  const [showProductDetailEight, setShowProductDetailEight] = useState(false);

  const [showCartDetails, setShowCartDetails] = useState(false);
  const [selectedCartItems, setSelectedCartItems] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [meTabTrigger, setMeTabTrigger] = useState(0);

  // Virtual try-on (kept for compatibility)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showTryOnModal, setShowTryOnModal] = useState(false);

  // Price drop system
  const [priceDropSettings, setPriceDropSettings] = useState({});
  const [priceDropNotifications, setPriceDropNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [priceDropdownProduct, setPriceDropdownProduct] = useState(null);

  // Menu
  const [menuOpen, setMenuOpen] = useState(false);

  // ── NEW: Shop flow state ───────────────────────────────────────────────
  const [openProductDetail, setOpenProductDetail] = useState(null);
  const [showCartSheet, setShowCartSheet] = useState(false);
  const [showCheckoutSheet, setShowCheckoutSheet] = useState(false);
  const [showOrderConf, setShowOrderConf] = useState(false);
  const [showOrdersSheet, setShowOrdersSheet] = useState(false);
  const [agentCartItems, setAgentCartItems] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  // Legacy cart items (for existing Carts tab rows)
  const [cartItems, setCartItems] = useState([]);

  const [cartOneItems, setCartOneItems] = useState([
    { name: 'Meat Pies', price: '$5.00', quantity: 2, total: '$10.00', image: 'https://assets.api.uizard.io/api/cdn/stream/1fca9e7a-75c2-41cc-a941-df5061491db8.png' },
    { name: 'Chocolate Cake Brownies', price: '$9.99', quantity: 1, total: '$9.99', image: 'https://assets.api.uizard.io/api/cdn/stream/13da1649-0800-4d70-8dcc-a76565b70794.png' },
    { name: 'Chocolate Chip Muffins', price: '$3.00', quantity: 5, total: '$15.00', image: 'https://assets.api.uizard.io/api/cdn/stream/1a879764-a5c6-42cd-a1ea-2ac49295db9b.png' },
  ]);

  const cartTwoItems = [
    { name: 'Dr Matt Cough Syrup', price: '$29.99', quantity: 1, total: '$29.99', image: 'https://assets.api.uizard.io/api/cdn/stream/6dcf4ab3-3a1f-4022-9d0b-fc008f0d6871.png' },
  ];

  const cartThreeItems = [
    { name: 'Notebooks', price: '$5.00', quantity: 8, total: '$40.00', image: 'https://assets.api.uizard.io/api/cdn/stream/2024848d-d2e0-40f6-b809-fd21dd629edc.png' },
  ];

  const businessNames = {
    cartOne: 'Baker N Cakes',
    cartTwo: 'New Pharma',
    cartThree: 'The Warehouse',
  };

  // ── Helpers ───────────────────────────────────────────────────────────────
  const parsePrice = (p) => {
    if (!p) return 0;
    return parseFloat(String(p).replace('$', '').replace(/,/g, '')) || 0;
  };

  const calculateDiscountedPrice = (originalPrice) => {
    const n = parseFloat(originalPrice.replace('$', ''));
    return `$${(n * 0.8).toFixed(2)}`;
  };

  const getProductDisplayName = (productName) => {
    const map = {
      'Beauty Product One': 'La Mer The Moisturizing Soft Cream',
      'Beauty Product Two': 'Dior Dway Slide Sandal in Embroidered Cotton',
      'Apparel Product One': "Levi's 501 Original Fit Jeans",
      'Apparel Product Two': "Ralph Lauren Men's Polo Shirt",
      'Toys Product One': 'Lego Star Wars Millennium Falcon',
      'Toys Product Two': 'Fisher-Price Laugh & Learn Smart Stages Chair',
      'Shoes Product One': "Nike Air Force 1'07 Sneaker",
      'Shoes Product Two': 'Adidas Ultraboost Running Shoe',
      'La Mer The Moisturizing Soft Cream': 'La Mer The Moisturizing Soft Cream',
      'Dior Dway Slide Sandal in Embroidered Cotton': 'Dior Dway Slide Sandal in Embroidered Cotton',
      'Lego Star Wars Millennium Falcon': 'Lego Star Wars Millennium Falcon',
      'Fisher-Price Laugh & Learn Smart Stages Chair': 'Fisher-Price Laugh & Learn Smart Stages Chair',
      "Levi's 501 Original Fit Jeans": "Levi's 501 Original Fit Jeans",
      "Ralph Lauren Men's Polo Shirt": "Ralph Lauren Men's Polo Shirt",
      "Nike Air Force 1 '07 Sneaker": "Nike Air Force 1 '07 Sneaker",
      'Adidas Ultraboost 5.0 Sneaker': 'Adidas Ultraboost 5.0 Sneaker',
      'Retro Sneakers': 'Retro Sneakers',
      'Cute Stuffed Bear': 'Cute Stuffed Bear',
      'Coffee Machine': 'Coffee Machine',
    };
    return map[productName] || productName;
  };

  const getActualProductPrice = (productName) => {
    const map = {
      'Beauty Product One': '$100.00', 'Beauty Product Two': '$1100.00',
      'Apparel Product One': '$70.00', 'Apparel Product Two': '$50.00',
      'Toys Product One': '$45.00', 'Toys Product Two': '$1000.00',
      'Shoes Product One': '$335.00', 'Shoes Product Two': '$150.00',
      'La Mer The Moisturizing Soft Cream': '$100.00',
      'Dior Dway Slide Sandal in Embroidered Cotton': '$1100.00',
      'Lego Star Wars Millennium Falcon': '$45.00',
      'Fisher-Price Laugh & Learn Smart Stages Chair': '$1000.00',
      "Levi's 501 Original Fit Jeans": '$70.00', "Ralph Lauren Men's Polo Shirt": '$50.00',
      "Nike Air Force 1 '07 Sneaker": '$335.00', 'Adidas Ultraboost 5.0 Sneaker': '$150.00',
      'Retro Sneakers': '$120.00', 'Cute Stuffed Bear': '$250.00', 'Coffee Machine': '$150.00',
    };
    return map[productName] || '$0.00';
  };

  const getProductImage = (productName) => {
    const map = {
      'Beauty Product One': 'https://assets.api.uizard.io/api/cdn/stream/fbe819f5-01ef-4c42-b37c-0ebcb7c3fda5.png',
      'Beauty Product Two': 'https://assets.api.uizard.io/api/cdn/stream/6e6aee90-d251-49d2-b465-498a99659f3a.png',
      'Toys Product One': 'https://assets.api.uizard.io/api/cdn/stream/545b2668-558f-420c-9fc6-c2b4ccdf0ed2.png',
      'Toys Product Two': 'https://assets.api.uizard.io/api/cdn/stream/510cfb6b-37eb-4d34-b364-a3f46741363e.png',
      'Apparel Product One': 'https://assets.api.uizard.io/api/cdn/stream/d59d7261-5ecd-4484-9551-44dc1d93fe45.png',
      'Apparel Product Two': 'https://assets.api.uizard.io/api/cdn/stream/2f3b0fff-5715-4d07-8c8a-a6ad268192a1.png',
      'Shoes Product One': 'https://assets.api.uizard.io/api/cdn/stream/0fd8e547-6f14-4dfc-8c01-42f39be7636c.png',
      'Shoes Product Two': 'https://assets.api.uizard.io/api/cdn/stream/027eb941-5abd-4ad4-8438-8237473aaa99.png',
      'Retro Sneakers': 'https://assets.api.uizard.io/api/cdn/stream/92f317f8-23b6-42a2-8122-4d4f16fdf84f.png',
      'Cute Stuffed Bear': 'https://assets.api.uizard.io/api/cdn/stream/aacf3168-0a02-4b3b-b828-107f5bd8523c.png',
      'Coffee Machine': 'https://assets.api.uizard.io/api/cdn/stream/8f965042-a7ff-4f50-bd40-27caa9853275.png',
    };
    if (map[productName]) return map[productName];
    if (productName.toLowerCase().includes('beauty')) return 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&auto=format';
    if (productName.toLowerCase().includes('apparel')) return 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format';
    if (productName.toLowerCase().includes('toys') || productName.toLowerCase().includes('lego')) return 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop&auto=format';
    if (productName.toLowerCase().includes('shoes') || productName.toLowerCase().includes('sneaker')) return 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format';
    return 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&auto=format';
  };

  // ── Price drop effect ─────────────────────────────────────────────────────
  React.useEffect(() => {
    if (priceDropNotifications.length > 0 && activeTab === 'Agent') {
      priceDropNotifications.forEach((notification, index) => {
        const discountedPrice = calculateDiscountedPrice(notification.originalPrice);
        const displayName = getProductDisplayName(notification.productName);
        const productWithDiscount = {
          name: displayName, price: discountedPrice,
          originalPrice: notification.originalPrice,
          image: getProductImage(notification.productName),
          id: Date.now() + index,
        };
        setTimeout(() => {
          setMessages(prev => [...prev, {
            isBot: true,
            text: `Great news! You asked for a price drop on "${displayName}" — it's now available at a lower price just for you!`,
            avatar: '/shopper-agent-logo.png',
            products: [productWithDiscount],
            showPriceComparison: true,
          }]);
        }, 500 * (index + 1));
      });
      setPriceDropNotifications([]);
      setNotificationCount(0);
    }
    if (priceDropdownProduct && activeTab === 'Agent') {
      const discountedPrice = calculateDiscountedPrice(priceDropdownProduct.originalPrice);
      const displayName = getProductDisplayName(priceDropdownProduct.name);
      const productWithDiscount = {
        name: displayName, price: discountedPrice,
        originalPrice: priceDropdownProduct.originalPrice,
        image: getProductImage(priceDropdownProduct.name),
        id: Date.now(),
      };
      setTimeout(() => {
        setMessages(prev => [...prev, {
          isBot: true,
          text: `Great news! "${displayName}" is now available at a lower price just for you!`,
          avatar: '/shopper-agent-logo.png',
          products: [productWithDiscount],
          showPriceComparison: true,
        }]);
      }, 500);
      setPriceDropdownProduct(null);
    }
  }, [priceDropNotifications, priceDropdownProduct, activeTab]);

  // ── Message handling ──────────────────────────────────────────────────────
  const handleSendMessage = (newMessage) => {
    setMessages(prev => [...prev, { isBot: false, text: newMessage, avatar: null }]);
    const category = detectCategory(newMessage);

    if (category) {
      const products = productsByCategory[category] || [];
      const agentTexts = {
        beauty: 'Here are our top beauty picks for you — tap any item to see the full details.',
        toys: 'Here are some great toys! Tap any item to see details, age range, and options.',
        apparel: 'Here are some great clothing options for you. Tap to see sizes and details.',
        shoes: 'Here are the best shoes we have. Tap to see sizes, colours, and full details.',
      };
      const text = agentTexts[category] || `Here are some options for you. Tap any product to view details.`;

      setTimeout(() => {
        setMessages(prev => [...prev, {
          isBot: true,
          text,
          avatar: '/shopper-agent-logo.png',
          products,
        }]);
      }, 900);
    } else {
      const m = newMessage.toLowerCase();
      let replyText = "I can help you find:\n• Beauty & skincare (La Mer, Dior)\n• Toys (LEGO, Fisher-Price)\n• Clothing (Levi's, Ralph Lauren)\n• Shoes (Nike, Adidas)\n\nJust tell me what you're looking for!";

      if (m.includes('cart') || m.includes('checkout') || m.includes('pay')) {
        replyText = "Tap the 🛒 cart button to review your items and checkout.";
        if (agentCartItems.length > 0) setShowCartSheet(true);
      } else if (m.includes('hi') || m.includes('hello') || m.includes('hey')) {
        replyText = "Hi! What are you looking for today?";
      } else if (m.includes('thank')) {
        replyText = "You're welcome! Let me know if there's anything else you need.";
      }

      setTimeout(() => {
        setMessages(prev => [...prev, {
          isBot: true, text: replyText, avatar: '/shopper-agent-logo.png',
        }]);
      }, 900);
    }
  };

  // ── Shop flow handlers ────────────────────────────────────────────────────
  const handleOpenProductDetail = (product) => {
    setOpenProductDetail(product);
    setShowCartSheet(false);
    setShowCheckoutSheet(false);
  };

  const handleAddToCartFromDetail = (product) => {
    setAgentCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1, total: `$${(parsePrice(i.price) * (i.quantity + 1)).toFixed(2)}` }
            : i
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        business: product.business,
        price: product.price,
        quantity: 1,
        total: `$${parsePrice(product.price).toFixed(2)}`,
        image: product.image,
      }];
    });
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }];
    });
  };

  const handleViewCartFromDetail = () => {
    setOpenProductDetail(null);
    setShowCartSheet(true);
  };

  const handleCartUpdateQty = (id, delta) => {
    setAgentCartItems(prev =>
      prev
        .map(i => {
          if (i.id !== id) return i;
          const newQty = i.quantity + delta;
          if (newQty <= 0) return null;
          return { ...i, quantity: newQty, total: `$${(parsePrice(i.price) * newQty).toFixed(2)}` };
        })
        .filter(Boolean)
    );
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i)
    );
  };

  const handleOpenCheckout = () => {
    setShowCartSheet(false);
    setShowCheckoutSheet(true);
  };

  const handleOrderComplete = () => {
    setShowCheckoutSheet(false);
    setShowOrderConf(true);
  };

  const handleOrderDone = () => {
    const parsePrice = (p) => parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;
    const total = agentCartItems.reduce((s, i) => s + parsePrice(i.price) * i.quantity, 0);
    const statuses = ['Confirmed', 'Processing', 'Shipped'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const newOrder = {
      id: 'AFG-' + Math.floor(1000 + Math.random() * 9000),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      status: randomStatus,
      items: agentCartItems.map(i => ({ ...i })),
      total: `$${total.toFixed(2)}`,
    };
    setOrderHistory(prev => [newOrder, ...prev]);
    setShowOrderConf(false);
    setAgentCartItems([]);
    setCartItems([]);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        isBot: true,
        text: "Your order is confirmed and on its way! 🎉\n\nIs there anything else I can help you find today?",
        avatar: '/shopper-agent-logo.png',
      }]);
    }, 300);
  };

  // ── Legacy handlers ───────────────────────────────────────────────────────
  const handleTryOnClick = (product) => {
    setSelectedProduct(product);
    setShowTryOnModal(true);
  };

  const handlePriceDropToggle = (productName, originalPrice, isEnabled) => {
    const actualPrice = getActualProductPrice(productName);
    setPriceDropSettings(prev => ({ ...prev, [productName]: isEnabled }));
    if (isEnabled) {
      setTimeout(() => {
        setPriceDropNotifications(prev => {
          const n = [...prev, { productName, originalPrice: actualPrice }];
          setNotificationCount(n.length);
          return n;
        });
      }, 10000);
    } else {
      setPriceDropNotifications(prev => {
        const f = prev.filter(n => n.productName !== productName);
        setNotificationCount(f.length);
        return f;
      });
    }
  };

  const handlePriceDropdownClick = (productName, originalPrice) => {
    const actualPrice = getActualProductPrice(productName);
    setPriceDropdownProduct({ name: productName, originalPrice: actualPrice });
  };

  const handleNotificationDismiss = (productName) => {
    const notification = priceDropNotifications.find(n => n.productName === productName);
    if (notification) {
      const discountedPrice = calculateDiscountedPrice(notification.originalPrice);
      const displayName = getProductDisplayName(notification.productName);
      const productWithDiscount = {
        name: displayName, price: discountedPrice,
        originalPrice: notification.originalPrice,
        image: getProductImage(notification.productName),
        id: Date.now(),
      };
      setTimeout(() => {
        setMessages(prev => [...prev, {
          isBot: true,
          text: `Great news! You asked for a price drop on "${displayName}" — now available at a lower price just for you!`,
          avatar: '/shopper-agent-logo.png',
          products: [productWithDiscount],
          showPriceComparison: true,
        }]);
      }, 300);
    }
    setPriceDropNotifications(prev => {
      const f = prev.filter(n => n.productName !== productName);
      setNotificationCount(f.length);
      return f;
    });
  };

  const handleOffersAddToCart = (productName, price, image) => {
    setAgentCartItems(prev => {
      const existing = prev.find(i => i.name === productName && i.price === price);
      if (existing) {
        const newQty = existing.quantity + 1;
        return prev.map(i =>
          i.name === productName && i.price === price
            ? { ...i, quantity: newQty, total: `$${(parsePrice(i.price) * newQty).toFixed(2)}` }
            : i
        );
      }
      return [...prev, { id: Date.now(), name: productName, price, quantity: 1, total: price, image }];
    });
  };

  const handleViewCart = (items, businessKey) => {
    setSelectedCartItems(items);
    setSelectedBusiness(businessNames[businessKey]);
    setShowCartDetails(true);
  };

  const handleCloseCartDetails = () => {
    setShowCartDetails(false);
    setSelectedCartItems([]);
    setSelectedBusiness('');
    setActiveTab('Carts');
  };

  const handleMenuMyCart = () => { setMenuOpen(false); setShowCartSheet(true); };
  const handleMenuForMe = () => { setMenuOpen(false); setActiveTab('Me'); setMeTabTrigger(p => p + 1); };

  const categoryTabs = [
    { name: 'Beauty', Icon: BeautyTabIcon, Text: BeautyCategoryText },
    { name: 'Apparel', Icon: ApparelIcon, Text: ApparelText },
    { name: 'Shoes', Icon: ShoesIcon, Text: ShoesText },
    { name: 'Toys', Icon: ToysIcon, Text: ToysText },
    { name: 'Furniture', Icon: FurnitureIcon, Text: FurnitureText },
    { name: 'Glasses', Icon: GlassesIcon, Text: GlassesText },
    { name: 'House Cleaning', Icon: HouseCleaningIcon, Text: HouseCleaningText },
    { name: 'Personal Care', Icon: PersonalCareIcon, Text: PersonalCareText },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveFilter('All');
    setActiveTab('Agent');
  };

  const handleMainTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'Me') setMeTabTrigger(p => p + 1);
  };

  const handleFilterClick = (filter) => setActiveFilter(filter);

  // Home-tab handlers
  const handleProductOneClick   = () => setShowProductDetailOne(true);
  const handleProductTwoClick   = () => setShowProductDetailTwo(true);
  const handleProductThreeClick = () => setShowProductDetailThree(true);
  const handleProductFourClick  = () => setShowProductDetailFour(true);
  const handleProductFiveClick  = () => setShowProductDetailFive(true);
  const handleProductSixClick   = () => setShowProductDetailSix(true);
  const handleProductSevenClick = () => setShowProductDetailSeven(true);
  const handleProductEightClick = () => setShowProductDetailEight(true);

  const handleCloseProductDetailOne   = () => { setShowProductDetailOne(false);   setActiveTab('Agent'); setActiveCategory('Beauty');   setActiveFilter('All'); };
  const handleCloseProductDetailTwo   = () => { setShowProductDetailTwo(false);   setActiveTab('Agent'); setActiveCategory('Beauty');   setActiveFilter('All'); };
  const handleCloseProductDetailThree = () => { setShowProductDetailThree(false); setActiveTab('Agent'); setActiveCategory('Toys');     setActiveFilter('All'); };
  const handleCloseProductDetailFour  = () => { setShowProductDetailFour(false);  setActiveTab('Agent'); setActiveCategory('Toys');     setActiveFilter('All'); };
  const handleCloseProductDetailFive  = () => { setShowProductDetailFive(false);  setActiveTab('Agent'); setActiveCategory('Apparel'); setActiveFilter('All'); };
  const handleCloseProductDetailSix   = () => { setShowProductDetailSix(false);   setActiveTab('Agent'); setActiveCategory('Apparel'); setActiveFilter('All'); };
  const handleCloseProductDetailSeven = () => { setShowProductDetailSeven(false); setActiveTab('Agent'); setActiveCategory('Shoes');   setActiveFilter('All'); };
  const handleCloseProductDetailEight = () => { setShowProductDetailEight(false); setActiveTab('Agent'); setActiveCategory('Shoes');   setActiveFilter('All'); };

  const agentCartCount = agentCartItems.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="mobile-container">
      {/* ── Side menu ── */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="side-menu" onClick={e => e.stopPropagation()}>
            <button className="menu-close-btn" onClick={() => setMenuOpen(false)}>✕</button>
            <button className="menu-item" onClick={() => setMenuOpen(false)}>My Account</button>
            <button className="menu-item" onClick={() => { setMenuOpen(false); setShowOrdersSheet(true); }}>My Orders</button>
            <button className="menu-item" onClick={handleMenuMyCart}>My Cart</button>
            <button className="menu-item" onClick={handleMenuForMe}>Suggestions For You</button>
            <button className="menu-item menu-logout" onClick={() => setMenuOpen(false)}>Logout</button>
          </div>
        </div>
      )}

      {/* ── Home tab ── */}
      {activeTab === 'Home' && (
        <>
          <div className="search-section">
            <Text text="Search" />
            <SearchBar className="fixed-search-bar" />
          </div>
          <div className="scrollable-content">
            <div className="category-tabs">
              {categoryTabs.map(({ name, Icon, Text: TabText }) => (
                <div key={name} className={`category-tab ${activeCategory === name ? 'active' : ''}`} onClick={() => handleCategoryClick(name)}>
                  <Icon />
                  <TabText />
                </div>
              ))}
            </div>
            {activeCategory === 'Beauty' && (
              <Card activeFilter={activeFilter} onFilterClick={handleFilterClick} onProductOneClick={handleProductOneClick} onProductTwoClick={handleProductTwoClick} onPriceDropdownClick={handlePriceDropdownClick} priceDropdownProduct={priceDropdownProduct} />
            )}
            {activeCategory === 'Apparel' && (
              <ApparelCard activeFilter={activeFilter} onFilterClick={handleFilterClick} onPriceDropdownClick={handlePriceDropdownClick} priceDropdownProduct={priceDropdownProduct} onProductFiveClick={handleProductFiveClick} onProductSixClick={handleProductSixClick} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />
            )}
            {activeCategory === 'Toys' && (
              <ToysCard activeFilter={activeFilter} onFilterClick={handleFilterClick} onPriceDropdownClick={handlePriceDropdownClick} priceDropdownProduct={priceDropdownProduct} onProductThreeClick={handleProductThreeClick} onProductFourClick={handleProductFourClick} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />
            )}
            {activeCategory === 'Shoes' && (
              <ShoesCard activeFilter={activeFilter} onFilterClick={handleFilterClick} onPriceDropdownClick={handlePriceDropdownClick} priceDropdownProduct={priceDropdownProduct} onProductSevenClick={handleProductSevenClick} onProductEightClick={handleProductEightClick} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />
            )}
          </div>
        </>
      )}

      {/* ── Agent tab ── */}
      {activeTab === 'Agent' && (
        <div className="view-agent">
          <CompanionChatHeader
            onMenuToggle={() => setMenuOpen(o => !o)}
            notifications={priceDropNotifications}
            onNotificationDismiss={handleNotificationDismiss}
          />

          {/* Floating cart button */}
          {agentCartCount > 0 && (
            <button
              onClick={() => setShowCartSheet(true)}
              style={{
                position: 'absolute', top: 62, right: 16, zIndex: 50,
                background: '#4B0082', color: '#fff', border: 'none',
                borderRadius: '22px', padding: '8px 14px',
                fontWeight: '700', fontSize: '13px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '6px',
                boxShadow: '0 3px 12px rgba(75,0,130,0.35)',
              }}
            >
              🛒 Cart ({agentCartCount})
            </button>
          )}

          <div className="chat-messages">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                isBot={message.isBot}
                text={message.text}
                avatar={message.avatar}
                products={message.products}
                onProductClick={handleOpenProductDetail}
                onAddToCart={handleAddToCartFromDetail}
                showPriceComparison={message.showPriceComparison}
              />
            ))}
          </div>
          <ChatInput onSend={handleSendMessage} />
        </div>
      )}

      {/* ── Me tab ── */}
      {activeTab === 'Me' && (
        <div className="view-me">
          <div className="view-header">
            <button className="back-btn" onClick={() => setActiveTab('Agent')}>← Back</button>
            <span className="view-header-title">Suggestions For You</span>
            <NotificationBell notifications={priceDropNotifications} onDismiss={handleNotificationDismiss} />
            <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
          <div className="view-body">
            <MeCard onMeTabChange={meTabTrigger} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} onAddToCart={handleOffersAddToCart} />
          </div>
        </div>
      )}

      {/* ── Carts tab ── */}
      {activeTab === 'Carts' && (
        <div className="view-carts">
          <div className="view-header">
            <button className="back-btn" onClick={() => setActiveTab('Agent')}>← Back</button>
            <span className="view-header-title">My Cart</span>
            <NotificationBell notifications={priceDropNotifications} onDismiss={handleNotificationDismiss} />
            <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
          <div className="view-body">
            {agentCartItems.length > 0 && (
              <>
                <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '12px', color: '#333' }}>
                  Shopper Agent Cart
                </div>
                {agentCartItems.map((item, idx) => (
                  <div className="cart-row" key={`agent-${idx}`} style={{ marginTop: idx === 0 ? '0' : '8px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '56px', height: '56px', borderRadius: '10px', objectFit: 'cover' }} />
                    <div className="cart-column">
                      <div style={{ fontWeight: '600', fontSize: '15px' }}>{item.name}</div>
                      <div style={{ color: '#555', fontSize: '14px', marginTop: '4px' }}>{item.total}{item.quantity > 1 ? ` (×${item.quantity})` : ''}</div>
                    </div>
                    <button
                      onClick={() => setShowCartSheet(true)}
                      style={{ background: '#4B0082', color: '#fff', border: 'none', borderRadius: '20px', padding: '8px 12px', fontWeight: '600', fontSize: '12px', cursor: 'pointer' }}
                    >
                      Edit
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setShowCartSheet(true)}
                  style={{ marginTop: '18px', width: '100%', background: '#4B0082', color: '#fff', border: 'none', borderRadius: '24px', padding: '13px', fontWeight: '700', fontSize: '15px', cursor: 'pointer' }}
                >
                  View Cart & Checkout
                </button>
                <div style={{ margin: '24px 0 12px', borderTop: '1px solid #eee' }} />
              </>
            )}
            {agentCartItems.length === 0 && (
              <div style={{ textAlign: 'center', color: '#999', marginTop: '40px', fontSize: '15px' }}>
                No items from agent yet. Ask the agent to find something! 🛍️
              </div>
            )}
            <div className="cart-row">
              <CartOneImage />
              <div className="cart-column">
                <CartOneBusinessName />
                <CartOneBusinessPrice />
              </div>
              <ViewBusinessOneCartButton onClick={() => handleViewCart(cartOneItems, 'cartOne')} />
            </div>
            <div className="cart-row-two">
              <CartTwoImage />
              <div className="cart-column-two">
                <CartTwoBusinessName />
                <CartTwoBusinessPrice />
              </div>
              <ViewBusinessTwoCartButton onClick={() => handleViewCart(cartTwoItems, 'cartTwo')} />
            </div>
            <div className="cart-row-three">
              <CartThreeImage />
              <div className="cart-column-three">
                <CartThreeBusinessName />
                <CartThreeBusinessPrice />
              </div>
              <ViewBusinessThreeCartButton onClick={() => handleViewCart(cartThreeItems, 'cartThree')} />
            </div>
          </div>
        </div>
      )}


      {/* ── Overlays: legacy product detail modals ── */}
      {showProductDetailOne && <ProductDetailOne onClose={handleCloseProductDetailOne} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />}
      {showProductDetailTwo && <ProductDetailTwo onClose={handleCloseProductDetailTwo} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />}
      {showProductDetailThree && <ProductDetailThree onClose={handleCloseProductDetailThree} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />}
      {showProductDetailFour && <ProductDetailFour onClose={handleCloseProductDetailFour} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />}
      {showProductDetailFive && <ProductDetailFive onClose={handleCloseProductDetailFive} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />}
      {showProductDetailSix && <ProductDetailSix onClose={handleCloseProductDetailSix} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />}
      {showProductDetailSeven && <ProductDetailSeven onClose={handleCloseProductDetailSeven} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />}
      {showProductDetailEight && <ProductDetailEight onClose={handleCloseProductDetailEight} onPriceDropToggle={handlePriceDropToggle} priceDropSettings={priceDropSettings} />}
      {showCartDetails && (
        <CartDetails cartItems={selectedCartItems} businessName={selectedBusiness} onClose={handleCloseCartDetails} />
      )}
      {showTryOnModal && selectedProduct && (
        <VirtualTryOnModal product={selectedProduct} onClose={() => setShowTryOnModal(false)} onAddToCart={handleAddToCartFromDetail} />
      )}

      {/* ── Orders sheet ── */}
      {showOrdersSheet && (
        <OrdersSheet orders={orderHistory} onClose={() => setShowOrdersSheet(false)} />
      )}

      {/* ── NEW: Shop flow sheets ── */}
      {openProductDetail && (
        <ProductDetailSheet
          product={openProductDetail}
          onClose={() => setOpenProductDetail(null)}
          onAddToCart={handleAddToCartFromDetail}
          onViewCart={handleViewCartFromDetail}
          cartCount={agentCartCount}
        />
      )}
      {showCartSheet && !showCheckoutSheet && !showOrderConf && (
        <CartSheet
          items={agentCartItems}
          onClose={() => setShowCartSheet(false)}
          onUpdateQty={handleCartUpdateQty}
          onCheckout={handleOpenCheckout}
        />
      )}
      {showCheckoutSheet && !showOrderConf && (
        <CheckoutSheet
          items={agentCartItems}
          onClose={() => setShowCheckoutSheet(false)}
          onOrderComplete={handleOrderComplete}
        />
      )}
      {showOrderConf && (
        <OrderConfirmation
          items={agentCartItems}
          onDone={handleOrderDone}
        />
      )}
    </div>
  );
}

export default App;
