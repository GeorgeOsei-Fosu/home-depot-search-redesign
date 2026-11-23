import { useState } from "react";
import StatusBar from "./components/StatusBar.jsx";
import SearchHeader from "./components/SearchHeader.jsx";
import AssistantBar from "./components/AssistantBar.jsx";
import ChatScreen from "./components/ChatScreen.jsx";
import TabBar from "./components/TabBar.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import MeScreen from "./screens/MeScreen.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import PlaceholderScreen from "./screens/PlaceholderScreen.jsx";
import RentalScreen from "./screens/RentalScreen.jsx";
import CalculatorsScreen from "./screens/CalculatorsScreen.jsx";
import InstallationScreen from "./screens/InstallationScreen.jsx";
import WorkshopsScreen from "./screens/WorkshopsScreen.jsx";
import { CHAT, SERVICES, RENTALS, CALCULATORS, INSTALLATION, WORKSHOPS } from "./data.js";

export default function App() {
  const [tab, setTab] = useState("shop");
  // A service opens *inside* the current tab, so the tab you came from
  // stays highlighted (the real app jumps to Shop even from Me).
  const [service, setService] = useState(null);
  const [cart, setCart] = useState([]);

  const [chatOpen, setChatOpen] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [followUps, setFollowUps] = useState([]);

  function changeTab(next) {
    setTab(next);
    setService(null);
  }

  // Re-adding the same product (e.g. after changing measurements) updates its quantity
  function addToCart(item) {
    setCart((items) => [...items.filter((i) => i.name !== item.name), item]);
  }

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

  function renderService() {
    switch (service) {
      case "rental":
        return <RentalScreen rentals={RENTALS} />;
      case "calculators":
        return <CalculatorsScreen calculators={CALCULATORS} onAddToCart={addToCart} />;
      case "installation":
        return <InstallationScreen categories={INSTALLATION} />;
      case "workshops":
        return <WorkshopsScreen workshops={WORKSHOPS} />;
      default:
        return null;
    }
  }

  function renderTab() {
    switch (tab) {
      case "me":
        return <MeScreen services={SERVICES} onOpenService={setService} />;
      case "store":
        return <PlaceholderScreen title="Store Mode" />;
      case "cart":
        return <CartScreen items={cart} />;
      default:
        return null;
    }
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const onHome = tab === "shop" && !service;

  return (
    <div className="stage">
      <div className="phone">
        <StatusBar />

        {chatOpen ? (
          <ChatScreen
            chat={CHAT}
            followUps={followUps}
            onSend={sendFollowUp}
            onMinimize={() => setChatOpen(false)}
          />
        ) : null}

        <div className="viewport" hidden={chatOpen}>
          {/* Home stays mounted so its scroll position is kept */}
          <main className="screen" hidden={!onHome}>
            <SearchHeader onCart={() => changeTab("cart")} />
            <HomeScreen onOpenService={setService} />
          </main>

          {!onHome && (
            <main className="screen" key={`${tab}-${service}`}>
              <SearchHeader onBack={service ? () => setService(null) : undefined} onCart={() => changeTab("cart")} />
              {service ? renderService() : renderTab()}
            </main>
          )}

          <AssistantBar topic={chatStarted ? CHAT.topic : null} onOpen={openChat} />
        </div>

        {!chatOpen && <TabBar active={tab} cartCount={cartCount} onChange={changeTab} />}
      </div>
    </div>
  );
}
