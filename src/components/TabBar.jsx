import Icon from "./Icon.jsx";

const TABS = [
  { id: "shop", label: "Shop", icon: "shop" },
  { id: "me", label: "Me", icon: "user" },
  { id: "store", label: "Store Mode", icon: "store" },
  { id: "cart", label: "Cart", icon: "cart" },
];

export default function TabBar({ active, cartCount, onChange }) {
  return (
    <nav className="tab-bar" aria-label="Main">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`tab-bar__tab${active === tab.id ? " is-active" : ""}`}
          aria-current={active === tab.id ? "page" : undefined}
          onClick={() => onChange(tab.id)}
        >
          <span className="tab-bar__icon">
            <Icon name={tab.icon} />
            {tab.id === "cart" && cartCount > 0 && <span className="tab-bar__badge">{cartCount}</span>}
          </span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
