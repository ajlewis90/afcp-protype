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
import './App.css';

// Dynamic product data organized by categories
const productsByCategory = {
  dress: [
    { name: 'Floral Summer Dress', price: '$89.99', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 1 },
    { name: 'Elegant Evening Dress', price: '$159.00', image: 'https://images.unsplash.com/photo-1566479179817-c4c0dedd4cec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 2 },
    { name: 'Casual Midi Dress', price: '$69.99', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 3 },
  ],
  shirt: [
    { name: 'Classic White Shirt', price: '$49.99', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 4 },
    { name: 'Denim Button-Up', price: '$59.00', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 5 },
    { name: 'Silk Blouse', price: '$79.99', image: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 6 },
  ],
  trousers: [
    { name: 'High-Waist Skinny Jeans', price: '$89.99', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 7 },
    { name: 'Relaxed Fit Jeans', price: '$75.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 8 },
    { name: 'Distressed Boyfriend Jeans', price: '$95.99', image: 'https://images.unsplash.com/photo-1551513342-5b0f8cbdcf40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 9 },
    { name: 'Wide Leg Trousers', price: '$119.99', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 13 },
  ],
  jacket: [
    { name: 'Mango Textured Jacket', price: '$129.99', image: 'https://assets.api.uizard.io/api/cdn/stream/1bd902b0-209c-4d5f-8e63-99d55c9016ba.png', id: 10 },
    { name: 'Zara Double breasted Coat', price: '$199.00', image: 'https://assets.api.uizard.io/api/cdn/stream/fecff665-0ba6-4922-888b-84d485e1e917.png', id: 11 },
    { name: 'H&M Wool-blend Coat', price: '$99.99', image: 'https://assets.api.uizard.io/api/cdn/stream/d20da14a-9c71-4b23-9104-66542fb7ab2b.png', id: 12 },
    { name: 'Leather Bomber Jacket', price: '$249.99', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 14 },
  ],
  underwear: [
    { name: 'Cotton Brief Set', price: '$24.99', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 15 },
    { name: 'Bamboo Boxer Briefs', price: '$32.99', image: 'https://images.unsplash.com/photo-1506629905723-21f05ff4649e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 16 },
    { name: 'Seamless Hipster Pack', price: '$19.99', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 17 },
  ],
  lingerie: [
    { name: 'Lace Bralette Set', price: '$49.99', image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 18 },
    { name: 'Silk Camisole', price: '$79.99', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 19 },
    { name: 'Satin Slip Dress', price: '$89.99', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 20 },
  ],
  shorts: [
    { name: 'Denim High-Waist Shorts', price: '$39.99', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 21 },
    { name: 'Athletic Running Shorts', price: '$29.99', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 22 },
    { name: 'Linen Summer Shorts', price: '$45.99', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 23 },
  ],
  hoodie: [
    { name: 'Oversized Cotton Hoodie', price: '$59.99', image: 'https://images.unsplash.com/photo-1556821840-3a9c6dcdb815?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 24 },
    { name: 'Zip-Up Fleece Hoodie', price: '$69.99', image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 25 },
    { name: 'Vintage Pullover Hoodie', price: '$54.99', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 26 },
  ],
  tank: [
    { name: 'Ribbed Tank Top', price: '$19.99', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 27 },
    { name: 'Athletic Performance Tank', price: '$24.99', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 28 },
    { name: 'Silk Camisole Tank', price: '$39.99', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300', id: 29 },
  ],
  'suit-men': [
    { name: 'Business Jacket', price: '$399.99', image: '/src/assets/business-suits/man-suit-1.png', id: 30 },
    { name: 'Classic Black Suit', price: '$449.99', image: '/src/assets/business-suits/man-suit-2.png', id: 31 },
    { name: 'Charcoal Business Suit', price: '$579.99', image: '/src/assets/business-suits/man-suit-3.png', id: 32 },
  ],
  'suit-women': [
    { name: 'Professional Blazer Set', price: '$299.99', image: '/src/assets/business-suits/woman-suit-1.png', id: 33 },
    { name: 'Executive Pantsuit', price: '$349.99', image: '/src/assets/business-suits/woman-suit-2.png', id: 34 },
  ],
  sofa: [
    { name: 'Yellow 3-Seater Sofa', price: '$1,499.99', image: '/src/assets/sofas/yellow-sofa.png', id: 35 },
    { name: 'Red 3-Seater Sofa', price: '$1,399.99', image: '/src/assets/sofas/red-sofa-2.png', id: 36 },
    { name: 'Modern 2-Seater Sofa', price: '$799.99', image: '/src/assets/sofas/red-sofa.png', id: 36 },
  ],
};

// Function to detect clothing category from user message with gender detection for suits
const detectClothingCategory = (message) => {
  const lowerMessage = message.toLowerCase();
  
  // Business suit detection with gender specification
  if (lowerMessage.includes('suit') || lowerMessage.includes('business attire')) {
    // FIXED: Check for female/women indicators FIRST (more specific patterns)
    if (lowerMessage.includes('women') || lowerMessage.includes('female') || lowerMessage.includes('woman') || 
        lowerMessage.includes('lady') || lowerMessage.includes('ladies') || lowerMessage.includes('for her') ||
        lowerMessage.includes('womens')) {
      console.log('Women suit detected');
      return 'suit-women';
    }
    // Check for male/men indicators SECOND
    if (lowerMessage.includes('men') || lowerMessage.includes('male') || lowerMessage.includes('man') || 
        lowerMessage.includes('gentleman') || lowerMessage.includes('for him') || lowerMessage.includes('mens')) {
      console.log('Men suit detected');
      return 'suit-men';
    }
    // Default to men's suits if no gender specified
    console.log('No gender specified, defaulting to men');
    return 'suit-men';
  }
  
  if (lowerMessage.includes('dress')) return 'dress';
  if (lowerMessage.includes('shirt') || lowerMessage.includes('blouse')) return 'shirt';
  if (lowerMessage.includes('jeans') || lowerMessage.includes('pants') || lowerMessage.includes('trousers')) return 'trousers';
  if (lowerMessage.includes('coat') || lowerMessage.includes('jacket') || lowerMessage.includes('blazer') || lowerMessage.includes('outerwear')) return 'jacket';
  if (lowerMessage.includes('underwear') || lowerMessage.includes('undergarment')) return 'underwear';
  if (lowerMessage.includes('lingerie') || lowerMessage.includes('intimate')) return 'lingerie';
  if (lowerMessage.includes('shorts')) return 'shorts';
  if (lowerMessage.includes('hoodie') || lowerMessage.includes('sweatshirt')) return 'hoodie';
  if (lowerMessage.includes('tank') || lowerMessage.includes('tank-top') || lowerMessage.includes('sleeveless')) return 'tank';
  
  // Furniture detection
  if (lowerMessage.includes('sofa') || lowerMessage.includes('couch') || lowerMessage.includes('furniture') || 
      lowerMessage.includes('sectional') || lowerMessage.includes('loveseat')) return 'sofa';
  
  return null;
};

function App() {
  const [activeTab, setActiveTab] = useState('Companion');
  const [activeCategory, setActiveCategory] = useState('Beauty');
  const [activeFilter, setActiveFilter] = useState('All');
  const [messages, setMessages] = useState([
    { isBot: true, text: "Hi, welcome to Daxedax! I can help you find and buy what you're looking for. What are you shopping for today?", avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png' },
  ]);
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
  
  // Virtual try-on state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showTryOnModal, setShowTryOnModal] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Price dropdown state (legacy - keeping for compatibility)
  const [priceDropdownProduct, setPriceDropdownProduct] = useState(null);
  
  // New price drop toggle system
  const [priceDropSettings, setPriceDropSettings] = useState({});
  const [priceDropNotifications, setPriceDropNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  // Enhanced chat response for follow-up questions
  const handleFollowUpResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('more business suit') || lowerMessage.includes('more suit')) {
      return "I'd be happy to show you more business suits! Would you like to see men's or women's business suits this time?";
    }
    if (lowerMessage.includes('shirt') || lowerMessage.includes('blouse')) {
      return "Great choice! Let me show you some stylish shirts and blouses.";
    }
    if (lowerMessage.includes('jean') || lowerMessage.includes('trouser') || lowerMessage.includes('pants')) {
      return "Perfect! Here are some great jeans and trousers for you.";
    }
    if (lowerMessage.includes('coat') || lowerMessage.includes('jacket')) {
      return "Excellent! I'll show you some beautiful coats and jackets.";
    }
    if (lowerMessage.includes('dress')) {
      return "Wonderful! Here are some stunning dresses for you.";
    }
    if (lowerMessage.includes('sofa') || lowerMessage.includes('furniture') || lowerMessage.includes('couch')) {
      return "Great choice! Here are some beautiful sofas perfect for your home.";
    }
    if (lowerMessage.includes('done') || lowerMessage.includes('nothing') || lowerMessage.includes('no thanks')) {
      return "Perfect! Your items are safely in your cart. You can view your cart anytime by tapping the 'Carts' tab below. Thank you for shopping with Daxedax!";
    }
    
    return "I can help you find anything you're looking for! Try asking for dresses, shirts, jeans, coats, or business suits. What interests you?";
  };

  // Simulated cart data for each business with business names
  const cartOneItems = [
    {
      name: 'Meat Pies',
      price: '$5.00',
      quantity: 2,
      total: '$10.00',
      image: 'https://assets.api.uizard.io/api/cdn/stream/1fca9e7a-75c2-41cc-a941-df5061491db8.png',
    },
    {
      name: 'Chocolate Cake Brownies',
      price: '$9.99',
      quantity: 1,
      total: '$9.99',
      image: 'https://assets.api.uizard.io/api/cdn/stream/13da1649-0800-4d70-8dcc-a76565b70794.png',
    },
    {
      name: 'Chocolate Chip Muffins',
      price: '$3.00',
      quantity: 5,
      total: '$15.00',
      image: 'https://assets.api.uizard.io/api/cdn/stream/1a879764-a5c6-42cd-a1ea-2ac49295db9b.png',
    },
  ];

  const cartTwoItems = [
    {
      name: 'Dr Matt Cough Syrup',
      price: '$29.99',
      quantity: 1,
      total: '$29.99',
      image: 'https://assets.api.uizard.io/api/cdn/stream/6dcf4ab3-3a1f-4022-9d0b-fc008f0d6871.png',
    },
  ];

  const cartThreeItems = [
    {
      name: 'Notebooks',
      price: '$5.00',
      quantity: 8,
      total: '$40.00',
      image: 'https://assets.api.uizard.io/api/cdn/stream/2024848d-d2e0-40f6-b809-fd21dd629edc.png',
    },
  ];

  // Business names for each cart
  const businessNames = {
    cartOne: 'Baker N Cakes',
    cartTwo: 'New Pharma',
    cartThree: 'The Warehouse',
  };

  const handleSendMessage = (newMessage) => {
    setMessages((prev) => [...prev, { isBot: false, text: newMessage, avatar: null }]);
    
    // Check if message contains clothing category
    const category = detectClothingCategory(newMessage);
    
    if (category) {
      const products = productsByCategory[category] || [];
      const categoryDisplayNames = {
        dress: 'dresses',
        shirt: 'shirts', 
        trousers: 'trousers',
        jacket: 'jackets',
        underwear: 'underwear',
        lingerie: 'lingerie',
        shorts: 'shorts',
        hoodie: 'hoodies',
        tank: 'tank tops',
        'suit-men': "men's business suits",
        'suit-women': "women's business suits",
        sofa: 'sofas'
      };
      
      const displayName = categoryDisplayNames[category] || `${category}s`;
      
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            isBot: true,
            text: `I found some ${displayName} for you! You can tap the camera icon to try them on virtually.`,
            avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png',
            products
          },
        ]);
      }, 1000);
    } else {
      // Check if this is a follow-up response to cart addition
      const followUpResponse = handleFollowUpResponse(newMessage);
      const followUpCategory = detectClothingCategory(followUpResponse);
      
      setTimeout(() => {
        if (followUpCategory) {
          const products = productsByCategory[followUpCategory] || [];
          setMessages((prev) => [
            ...prev,
            {
              isBot: true,
              text: followUpResponse,
              avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png',
              products
            },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              isBot: true,
              text: followUpResponse,
              avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png',
            },
          ]);
        }
      }, 1000);
    }
  };

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    // You can add navigation or product detail modal here
  };

  const handleTryOnClick = (product) => {
    setSelectedProduct(product);
    setShowTryOnModal(true);
  };

  // New price drop toggle handler
  const handlePriceDropToggle = (productName, originalPrice, isEnabled) => {
    const actualPrice = getActualProductPrice(productName);
    
    setPriceDropSettings(prev => ({
      ...prev,
      [productName]: isEnabled
    }));
    
    if (isEnabled) {
      // Start 10-second timer for notification
      setTimeout(() => {
        setPriceDropNotifications(prev => {
          const newNotifications = [...prev, { productName, originalPrice: actualPrice }];
          setNotificationCount(newNotifications.length);
          return newNotifications;
        });
      }, 10000); // 10 seconds
    } else {
      // Remove from notifications if disabled
      setPriceDropNotifications(prev => {
        const filtered = prev.filter(notification => notification.productName !== productName);
        setNotificationCount(filtered.length);
        return filtered;
      });
    }
  };

  // Legacy price dropdown handler (keeping for compatibility)
  const handlePriceDropdownClick = (productName, originalPrice) => {
    // Get the actual price from IndividualPriceText components instead of passed originalPrice
    const actualPrice = getActualProductPrice(productName);
    setPriceDropdownProduct({ name: productName, originalPrice: actualPrice });
    // User needs to manually navigate to Companion tab to see the discount
  };

  // Effect to handle price drop notifications when navigating to Companion
  React.useEffect(() => {
    if (priceDropNotifications.length > 0 && activeTab === 'Companion') {
      // Process all pending notifications
      priceDropNotifications.forEach((notification, index) => {
        const discountedPrice = calculateDiscountedPrice(notification.originalPrice);
        const displayName = getProductDisplayName(notification.productName);
        const productWithDiscount = {
          name: displayName,
          price: discountedPrice,
          originalPrice: notification.originalPrice,
          image: getProductImage(notification.productName),
          id: Date.now() + index
        };

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              isBot: true,
              text: `Great news! You asked for a price drop on "${displayName}" and now it's available for purchase at a lower price just for you!`,
              avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png',
              products: [productWithDiscount],
              showPriceComparison: true // Flag to show both original and discounted prices
            },
          ]);
        }, 500 * (index + 1)); // Stagger messages
      });

      // Clear all notifications after showing the messages
      setPriceDropNotifications([]);
      setNotificationCount(0);
    }
    
    // Legacy support for old price dropdown system
    if (priceDropdownProduct && activeTab === 'Companion') {
      const discountedPrice = calculateDiscountedPrice(priceDropdownProduct.originalPrice);
      const displayName = getProductDisplayName(priceDropdownProduct.name);
      const productWithDiscount = {
        name: displayName,
        price: discountedPrice,
        originalPrice: priceDropdownProduct.originalPrice,
        image: getProductImage(priceDropdownProduct.name),
        id: Date.now()
      };

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            isBot: true,
            text: `Great news! You asked for a price drop on "${displayName}" and now it's available for purchase at a lower price just for you!`,
            avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png',
            products: [productWithDiscount],
            showPriceComparison: true // Flag to show both original and discounted prices
          },
        ]);
      }, 500);

      // Clear the price dropdown product after showing the message
      setPriceDropdownProduct(null);
    }
  }, [priceDropNotifications, priceDropdownProduct, activeTab]);

  // Helper function to calculate discounted price (20% discount)
  const calculateDiscountedPrice = (originalPrice) => {
    const numericPrice = parseFloat(originalPrice.replace('$', ''));
    const discountedPrice = numericPrice * 0.8; // 20% discount
    return `$${discountedPrice.toFixed(2)}`;
  };

  // Helper function to get actual product display name
  const getProductDisplayName = (productName) => {
    const productNameMap = {
      "Beauty Product One": "La Mer The Moisturizing Soft Cream",
      "Beauty Product Two": "Dior Dway Slide Sandal in Embroidered Cotton",
      "Apparel Product One": "Levi's 501 Original Fit Jeans",
      "Apparel Product Two": "Ralph Lauren Men's Polo Shirt",
      "Toys Product One": "Lego Star Wars Millennium Falcon",
      "Toys Product Two": "Fisher-Price Laugh & Learn Smart Stages Chair",
      "Shoes Product One": "Nike Air Force 1'07 Sneaker",
      "Shoes Product Two": "Adidas Ultraboost Running Shoe",
      // Direct mappings for ProductDetail components
      "La Mer The Moisturizing Soft Cream": "La Mer The Moisturizing Soft Cream",
      "Dior Dway Slide Sandal in Embroidered Cotton": "Dior Dway Slide Sandal in Embroidered Cotton",
      "Lego Star Wars Millennium Falcon": "Lego Star Wars Millennium Falcon",
      "Fisher-Price Laugh & Learn Smart Stages Chair": "Fisher-Price Laugh & Learn Smart Stages Chair",
      "Levi's 501 Original Fit Jeans": "Levi's 501 Original Fit Jeans",
      "Ralph Lauren Men's Polo Shirt": "Ralph Lauren Men's Polo Shirt",
      "Nike Air Force 1 '07 Sneaker": "Nike Air Force 1 '07 Sneaker",
      "Adidas Ultraboost 5.0 Sneaker": "Adidas Ultraboost 5.0 Sneaker"
    };
    
    return productNameMap[productName] || productName;
  };

  // Helper function to get actual prices from IndividualPriceText components
  const getActualProductPrice = (productName) => {
    const productPriceMap = {
      "Beauty Product One": "$100.00",
      "Beauty Product Two": "$1100.00",
      "Apparel Product One": "$70.00", // Extract from "Group Price: $70.00"
      "Apparel Product Two": "$50.00", // Extract from "Group Price: $50.00"
      "Toys Product One": "$45.00",
      "Toys Product Two": "$1000.00",
      "Shoes Product One": "$335.00",
      "Shoes Product Two": "$150.00",
      // Adding missing ProductDetail mappings
      "La Mer The Moisturizing Soft Cream": "$100.00",
      "Dior Dway Slide Sandal in Embroidered Cotton": "$1100.00",
      "Lego Star Wars Millennium Falcon": "$45.00",
      "Fisher-Price Laugh & Learn Smart Stages Chair": "$1000.00",
      "Levi's 501 Original Fit Jeans": "$70.00",
      "Ralph Lauren Men's Polo Shirt": "$50.00",
      "Nike Air Force 1 '07 Sneaker": "$335.00",
      "Adidas Ultraboost 5.0 Sneaker": "$150.00"
    };
    
    return productPriceMap[productName] || "$0.00";
  };

  // Helper function to get product image based on product name
  const getProductImage = (productName) => {
    const productImageMap = {
      "Beauty Product One": "https://assets.api.uizard.io/api/cdn/stream/fbe819f5-01ef-4c42-b37c-0ebcb7c3fda5.png",
      "Beauty Product Two": "https://assets.api.uizard.io/api/cdn/stream/6e6aee90-d251-49d2-b465-498a99659f3a.png",    
      "Toys Product One": "https://assets.api.uizard.io/api/cdn/stream/545b2668-558f-420c-9fc6-c2b4ccdf0ed2.png",
      "Toys Product Two": "https://assets.api.uizard.io/api/cdn/stream/510cfb6b-37eb-4d34-b364-a3f46741363e.png",
      "Apparel Product One": "https://assets.api.uizard.io/api/cdn/stream/d59d7261-5ecd-4484-9551-44dc1d93fe45.png",
      "Apparel Product Two": "https://assets.api.uizard.io/api/cdn/stream/2f3b0fff-5715-4d07-8c8a-a6ad268192a1.png",
      "Shoes Product One": "https://assets.api.uizard.io/api/cdn/stream/0fd8e547-6f14-4dfc-8c01-42f39be7636c.png",
      "Shoes Product Two": "https://assets.api.uizard.io/api/cdn/stream/027eb941-5abd-4ad4-8438-8237473aaa99.png"
    };
    
    // Check specific product mappings first
    if (productImageMap[productName]) {
      return productImageMap[productName];
    }

    console.log("PRODUCT NAME: " + productName);
    
    // Fallback to category-based logic
    if (productName.toLowerCase().includes('beauty')) {
      return 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300';
    } else if (productName.toLowerCase().includes('apparel')) {
      return 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300';
    } else if (productName.toLowerCase().includes('toys') || productName.toLowerCase().includes('lego')) {
      return 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300';
    } else if (productName.toLowerCase().includes('shoes') || productName.toLowerCase().includes('sneaker')) {
      return 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300';
    }
    return 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300';
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    
    // Add item to cart
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      addedAt: new Date().toISOString()
    };
    
    setCartItems(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to cart
        return [...prevCart, cartItem];
      }
    });
    
    setShowTryOnModal(false);
    
    // Add success message and follow-up prompt
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          isBot: true,
          text: `Great choice! I've added the ${product.name} to your cart. 🛒\n\nWould you like to see more items? I can help you find:\n• More business suits\n• Shirts and blouses\n• Jeans and trousers\n• Coats and jackets\n• Or anything else you're looking for!\n\nWhat would you like to explore next?`,
          avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png'
        }
      ]);
    }, 500);
  };

  const suggestionOptions = [
    'for casual wear...',
    'for a specific occasion...',
    'from a popular brand or design...',
    'which is stylish and affordable...',
  ];

  const mainTabs = [
    { name: 'Companion', icon: <CompanionIcon />, text: <CompanionTabText /> },
    { name: 'Home', icon: <HomeIcon />, text: <HomeTabText /> },
    { name: 'Me', icon: <MeIcon />, text: <MeTabText /> },
    { name: 'Carts', icon: <CartsIcon />, text: <CartsTabText /> },
  ];

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
    if (category === 'Beauty' || category === 'Apparel' || category === 'Toys' || category === 'Shoes') {
      setActiveFilter('All');
    }
    setActiveTab('Home');
  };

  const handleMainTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'Home') {
      setActiveCategory('Beauty');
      setActiveFilter('All');
    } else if (tabName === 'Me') {
      setMeTabTrigger((prev) => prev + 1);
    }
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleProductOneClick = () => {
    setShowProductDetailOne(true);
  };

  const handleProductTwoClick = () => {
    setShowProductDetailTwo(true);
  };

  const handleCloseProductDetailOne = () => {
    setShowProductDetailOne(false);
    setActiveTab('Home');
    setActiveCategory('Beauty');
    setActiveFilter('All');
  };

  const handleCloseProductDetailTwo = () => {
    setShowProductDetailTwo(false);
    setActiveTab('Home');
    setActiveCategory('Beauty');
    setActiveFilter('All');
  };

  // Product detail handlers for ProductDetailThree through ProductDetailEight
  const handleProductThreeClick = () => {
    setShowProductDetailThree(true);
  };

  const handleProductFourClick = () => {
    setShowProductDetailFour(true);
  };

  const handleProductFiveClick = () => {
    setShowProductDetailFive(true);
  };

  const handleProductSixClick = () => {
    setShowProductDetailSix(true);
  };

  const handleProductSevenClick = () => {
    setShowProductDetailSeven(true);
  };

  const handleProductEightClick = () => {
    setShowProductDetailEight(true);
  };

  const handleCloseProductDetailThree = () => {
    setShowProductDetailThree(false);
    setActiveTab('Home');
    setActiveCategory('Toys');
    setActiveFilter('All');
  };

  const handleCloseProductDetailFour = () => {
    setShowProductDetailFour(false);
    setActiveTab('Home');
    setActiveCategory('Toys');
    setActiveFilter('All');
  };

  const handleCloseProductDetailFive = () => {
    setShowProductDetailFive(false);
    setActiveTab('Home');
    setActiveCategory('Apparel');
    setActiveFilter('All');
  };

  const handleCloseProductDetailSix = () => {
    setShowProductDetailSix(false);
    setActiveTab('Home');
    setActiveCategory('Apparel');
    setActiveFilter('All');
  };

  const handleCloseProductDetailSeven = () => {
    setShowProductDetailSeven(false);
    setActiveTab('Home');
    setActiveCategory('Shoes');
    setActiveFilter('All');
  };

  const handleCloseProductDetailEight = () => {
    setShowProductDetailEight(false);
    setActiveTab('Home');
    setActiveCategory('Shoes');
    setActiveFilter('All');
  };

  const handleViewCart = (cartItems, businessKey) => {
    setSelectedCartItems(cartItems);
    setSelectedBusiness(businessNames[businessKey]);
    setShowCartDetails(true);
  };

  const handleCloseCartDetails = () => {
    setShowCartDetails(false);
    setSelectedCartItems([]);
    setSelectedBusiness('');
    setActiveTab('Carts');
  };

  return (
    <div className="mobile-container">
      {activeTab === 'Home' && (
        <>
          <div className="search-section">
            <Text text="Search" />
            <SearchBar className="fixed-search-bar" />
          </div>
          <div className="scrollable-content">
            <div className="category-tabs">
              {categoryTabs.map(({ name, Icon, Text }) => (
                <div
                  key={name}
                  className={`category-tab ${activeCategory === name ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(name)}
                >
                  <Icon />
                  <Text />
                </div>
              ))}
            </div>
            {activeCategory === 'Beauty' && (
              <Card
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
                onProductOneClick={handleProductOneClick}
                onProductTwoClick={handleProductTwoClick}
                onPriceDropdownClick={handlePriceDropdownClick}
                priceDropdownProduct={priceDropdownProduct}
              />
            )}
            {activeCategory === 'Apparel' && (
              <ApparelCard
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
                onPriceDropdownClick={handlePriceDropdownClick}
                priceDropdownProduct={priceDropdownProduct}
                onProductFiveClick={handleProductFiveClick}
                onProductSixClick={handleProductSixClick}
                onPriceDropToggle={handlePriceDropToggle}
                priceDropSettings={priceDropSettings}
              />
            )}
            {activeCategory === 'Toys' && (
              <ToysCard
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
                onPriceDropdownClick={handlePriceDropdownClick}
                priceDropdownProduct={priceDropdownProduct}
                onProductThreeClick={handleProductThreeClick}
                onProductFourClick={handleProductFourClick}
                onPriceDropToggle={handlePriceDropToggle}
                priceDropSettings={priceDropSettings}
              />
            )}
            {activeCategory === 'Shoes' && (
              <ShoesCard
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
                onPriceDropdownClick={handlePriceDropdownClick}
                priceDropdownProduct={priceDropdownProduct}
                onProductSevenClick={handleProductSevenClick}
                onProductEightClick={handleProductEightClick}
                onPriceDropToggle={handlePriceDropToggle}
                priceDropSettings={priceDropSettings}
              />
            )}
          </div>
        </>
      )}
      {activeTab === 'Companion' && (
        <div className="scrollable-content companion-chat">
          <CompanionChatHeader />
          <div className="chat-messages">
            {messages.map((message, index) => (
              <ChatMessage 
                key={index} 
                isBot={message.isBot} 
                text={message.text} 
                avatar={message.avatar} 
                products={message.products}
                onProductClick={handleProductClick}
                onTryOnClick={handleTryOnClick}
                showPriceComparison={message.showPriceComparison}
              />
            ))}
          </div>
          <ChatInput onSend={handleSendMessage} />
        </div>
      )}
      {activeTab === 'Me' && (
        <div className="scrollable-content">
          <MeCard onMeTabChange={meTabTrigger} />
        </div>
      )}
      {activeTab === 'Carts' && (
        <>
          <CartsText className="fixed-carts-text" />
          <div className="scrollable-content">
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
        </>
      )}
      <div className="tab-bar">
        {mainTabs.map((tab) => (
          <button
            key={tab.name}
            className={`tab ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => handleMainTabClick(tab.name)}
          >
            <div className="tab-content">
              {tab.icon}
              {tab.text}
              {tab.name === 'Companion' && notificationCount > 0 && (
                <div className="notification-badge">{notificationCount}</div>
              )}
            </div>
          </button>
        ))}
      </div>
      {showProductDetailOne && (
        <ProductDetailOne 
          onClose={handleCloseProductDetailOne}
          onPriceDropToggle={handlePriceDropToggle}
          priceDropSettings={priceDropSettings}
        />
      )}
      {showProductDetailTwo && (
        <ProductDetailTwo 
          onClose={handleCloseProductDetailTwo}
          onPriceDropToggle={handlePriceDropToggle}
          priceDropSettings={priceDropSettings}
        />
      )}
      {showProductDetailThree && (
        <ProductDetailThree 
          onClose={handleCloseProductDetailThree}
          onPriceDropToggle={handlePriceDropToggle}
          priceDropSettings={priceDropSettings}
        />
      )}
      {showProductDetailFour && (
        <ProductDetailFour 
          onClose={handleCloseProductDetailFour}
          onPriceDropToggle={handlePriceDropToggle}
          priceDropSettings={priceDropSettings}
        />
      )}
      {showProductDetailFive && (
        <ProductDetailFive 
          onClose={handleCloseProductDetailFive}
          onPriceDropToggle={handlePriceDropToggle}
          priceDropSettings={priceDropSettings}
        />
      )}
      {showProductDetailSix && (
        <ProductDetailSix 
          onClose={handleCloseProductDetailSix}
          onPriceDropToggle={handlePriceDropToggle}
          priceDropSettings={priceDropSettings}
        />
      )}
      {showProductDetailSeven && (
        <ProductDetailSeven 
          onClose={handleCloseProductDetailSeven}
          onPriceDropToggle={handlePriceDropToggle}
          priceDropSettings={priceDropSettings}
        />
      )}
      {showProductDetailEight && (
        <ProductDetailEight 
          onClose={handleCloseProductDetailEight}
          onPriceDropToggle={handlePriceDropToggle}
          priceDropSettings={priceDropSettings}
        />
      )}
      {showCartDetails && (
        <CartDetails
          cartItems={selectedCartItems}
          businessName={selectedBusiness}
          onClose={handleCloseCartDetails}
        />
      )}
      {showTryOnModal && selectedProduct && (
        <VirtualTryOnModal
          product={selectedProduct}
          onClose={() => setShowTryOnModal(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default App;