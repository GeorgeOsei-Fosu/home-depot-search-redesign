import tagIcon from "../assets/icons/tag.svg";

export default function ShopByCategory({ deals, categories }) {
  return (
    <section className="categories">
      <h3 className="categories__title">Shop By Category</h3>
      <div className="categories__grid">
        {deals.map((deal) => (
          <button key={deal} type="button" className="tile tile--deal tile--highlight">
            <img src={tagIcon} width="28" height="28" alt="" />
            {deal}
          </button>
        ))}
        {categories.map((cat) => (
          <button
            key={cat.name}
            type="button"
            className={`tile tile--category${cat.highlight ? " tile--highlight" : ""}`}
          >
            <img src={cat.icon} width="28" height="28" alt="" />
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
}
