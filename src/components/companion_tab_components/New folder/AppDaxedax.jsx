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
import ProductDetailOne from './components/home_tab_components/ProductDetailOne';
import ProductDetailTwo from './components/home_tab_components/ProductDetailTwo';
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

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [activeCategory, setActiveCategory] = useState('Beauty');
  const [activeFilter, setActiveFilter] = useState('All');
  const [messages, setMessages] = useState([
    { isBot: true, text: "Hi, welcome to Daxedax! I can help you find and buy what you're looking for. What are you shopping for today?", avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png' },
  ]);
  const [showProductDetailOne, setShowProductDetailOne] = useState(false);
  const [showProductDetailTwo, setShowProductDetailTwo] = useState(false);
  const [showCartDetails, setShowCartDetails] = useState(false);
  const [selectedCartItems, setSelectedCartItems] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(''); // Track the selected business
  const [meTabTrigger, setMeTabTrigger] = useState(0);

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
      quantity: 8, // Updated from 5 to 8
      total: '$40.00', // Updated from $25.00 to $40.00 (5.00 * 8)
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
    if (suggestionOptions.some(option => newMessage.includes(option)) || newMessage.toLowerCase().includes('dress')) {
      setTimeout(() => {
        const products = [
          { name: 'Mango Textured Coat', price: '$129.99', image: 'https://assets.api.uizard.io/api/cdn/stream/1bd902b0-209c-4d5f-8e63-99d55c9016ba.png', id: 1 },
          { name: 'Zara Double breasted Coat', price: '$199.00', image: 'https://assets.api.uizard.io/api/cdn/stream/fecff665-0ba6-4922-888b-84d485e1e917.png', id: 2 },
          { name: 'H&M Wool-blend Coat', price: '$99.99', image: 'https://assets.api.uizard.io/api/cdn/stream/d20da14a-9c71-4b23-9104-66542fb7ab2b.png', id: 3 },
        ];
        setMessages((prev) => [
          ...prev,
          { 
            isBot: true, 
            text: "I found some options for you. You can tap the link to see more details.", 
            avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png', 
            products 
          },
        ]);
      }, 1000);
    }
  };

  const suggestionOptions = [
    'for casual wear...',
    'for a specific occasion...',
    'from a popular brand or design...',
    'which is stylish and affordable...',
  ];

  const mainTabs = [
    { name: 'Home', icon: <HomeIcon />, text: <HomeTabText /> },
    { name: 'Companion', icon: <CompanionIcon />, text: <CompanionTabText /> },
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

  const handleViewCart = (cartItems, businessKey) => {
    setSelectedCartItems(cartItems);
    setSelectedBusiness(businessNames[businessKey]); // Set the business name
    setShowCartDetails(true);
  };

  const handleCloseCartDetails = () => {
    setShowCartDetails(false);
    setSelectedCartItems([]);
    setSelectedBusiness(''); // Reset the selected business
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
              />
            )}
            {activeCategory === 'Apparel' && (
              <ApparelCard
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
              />
            )}
            {activeCategory === 'Toys' && (
              <ToysCard
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
              />
            )}
            {activeCategory === 'Shoes' && (
              <ShoesCard
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
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
              <ChatMessage key={index} isBot={message.isBot} text={message.text} avatar={message.avatar} products={message.products} />
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
            {tab.icon}
            {tab.text}
          </button>
        ))}
      </div>
      {showProductDetailOne && (
        <ProductDetailOne onClose={handleCloseProductDetailOne} />
      )}
      {showProductDetailTwo && (
        <ProductDetailTwo onClose={handleCloseProductDetailTwo} />
      )}
      {showCartDetails && (
        <CartDetails
          cartItems={selectedCartItems}
          businessName={selectedBusiness}
          onClose={handleCloseCartDetails}
        />
      )}
    </div>
  );
}

export default App;