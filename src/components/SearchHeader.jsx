import searchIcon from "../assets/icons/search-circle.svg";

// Pinned to the top of Home so search is always one tap away
export default function SearchHeader() {
  return (
    <header className="search-header">
      <label className="search-field">
        <img src={searchIcon} width="14" height="14" alt="" />
        <input type="search" placeholder="What can we help you find?" aria-label="Search" />
      </label>
      <button type="button" className="cart-button" aria-label="Cart">
        🛒
      </button>
    </header>
  );
}
