import { useState } from "react";
import Icon from "../components/Icon.jsx";

// In-app rental: the store and what's available come first, not a promo.
export default function RentalScreen({ rentals }) {
  const groups = Object.keys(rentals);
  const [group, setGroup] = useState(groups[0]);
  const [reserved, setReserved] = useState([]);

  function toggle(name) {
    setReserved((r) => (r.includes(name) ? r.filter((n) => n !== name) : [...r, name]));
  }

  return (
    <div className="screen__content">
      <div>
        <h2 className="page-title">Truck &amp; Tool Rental</h2>
        <p className="page-subtitle">Reserve now, pick up at your store</p>
      </div>

      <div className="store-bar">
        <Icon name="pin" size={18} />
        <span>
          <strong>Your store</strong> · Open until 9 PM
        </span>
        <button type="button" className="link-orange">Change</button>
      </div>

      <div className="segmented" role="tablist">
        {groups.map((g) => (
          <button
            key={g}
            type="button"
            role="tab"
            aria-selected={g === group}
            className={g === group ? "is-active" : ""}
            onClick={() => setGroup(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="list-panel">
        {rentals[group].map((item) => {
          const isReserved = reserved.includes(item.name);
          return (
            <div key={item.name} className="rental-row">
              <div className="rental-row__photo" />
              <div className="rental-row__info">
                <p className="rental-row__name">{item.name}</p>
                <p className="price">{item.price}</p>
                <p className="rental-row__note">{item.note}</p>
              </div>
              <button
                type="button"
                className={`pill-button${isReserved ? " pill-button--done" : ""}`}
                onClick={() => toggle(item.name)}
              >
                {isReserved ? "Reserved ✓" : "Reserve"}
              </button>
            </div>
          );
        })}
      </div>
      <p className="chat__disclaimer">Sample prices and availability for design purposes</p>
    </div>
  );
}
