import searchIcon from "../assets/icons/search-circle.svg";
import Icon from "./Icon.jsx";

// Pinned to the top of every screen so search is always one tap away.
// Pass `onBack` on inner screens to show a back button.
export default function SearchHeader({ onBack, onCart }) {
  return (
    <header className="search-header">
      {onBack && (
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back">
          <Icon name="back" size={20} />
        </button>
      )}
      <label className="search-field">
        <img src={searchIcon} width="14" height="14" alt="" />
        <input type="search" placeholder="What can we help you find?" aria-label="Search" />
      </label>
      {!onBack && (
        <button type="button" className="cart-button" aria-label="Cart" onClick={onCart}>
          🛒
        </button>
      )}
    </header>
  );
}
