import { useState } from "react";
import StatusBar from "./components/StatusBar.jsx";
import SearchHeader from "./components/SearchHeader.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import RecentlyViewed from "./components/RecentlyViewed.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ShopByCategory from "./components/ShopByCategory.jsx";
import AssistantBar from "./components/AssistantBar.jsx";
import ChatScreen from "./components/ChatScreen.jsx";
import {
  SLIDES,
  RECENTLY_VIEWED,
  HALLOWEEN_PRODUCTS,
  FEATURED_SET,
  DEALS,
  CATEGORIES,
  CHAT,
} from "./data.js";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [followUps, setFollowUps] = useState([]);

  function openChat() {
    setChatStarted(true);
    setChatOpen(true);
  }

  function sendFollowUp(text) {
    setFollowUps((msgs) => [
      ...msgs,
      { from: "user", text },
      { from: "assistant", text: "Thanks! This prototype only has sample answers — a real assistant would reply here." },
    ]);
  }

  return (
    <div className="stage">
      <div className="phone">
        <StatusBar />

        {/* Home stays mounted while chat is open so its scroll position is kept */}
        <main className="screen" hidden={chatOpen}>
          <SearchHeader />
          <div className="screen__content">
            <HeroCarousel slides={SLIDES} />
            <RecentlyViewed items={RECENTLY_VIEWED} />
            <h3 className="section-title">Halloween Headquarters</h3>
            <div className="product-row">
              {HALLOWEEN_PRODUCTS.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
            <ProductCard product={FEATURED_SET} wide />
            <ShopByCategory deals={DEALS} categories={CATEGORIES} />
          </div>
        </main>

        {chatOpen ? (
          <ChatScreen
            chat={CHAT}
            followUps={followUps}
            onSend={sendFollowUp}
            onMinimize={() => setChatOpen(false)}
          />
        ) : (
          <AssistantBar topic={chatStarted ? CHAT.topic : null} onOpen={openChat} />
        )}
      </div>
    </div>
  );
}
