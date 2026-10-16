import searchIcon from "../assets/icons/search-circle.svg";

export default function SearchHeader({ sticky }) {
  return (
    <header className={`search-header${sticky ? " search-header--sticky" : ""}`}>
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
