export default function RecentlyViewed({ items }) {
  return (
    <section className="panel recent">
      <div className="recent__header">
        <h3>Recently Viewed</h3>
        <a href="#" className="link-orange" onClick={(e) => e.preventDefault()}>
          See all
        </a>
      </div>
      <div className="recent__row">
        {items.map((item) => (
          <div key={item.name} className="recent-item">
            {item.image ? (
              <img className="recent-item__photo" src={item.image} alt="" />
            ) : (
              <div className="recent-item__photo" />
            )}
            <p className="recent-item__name">{item.name}</p>
            <p className="price price--sm">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
