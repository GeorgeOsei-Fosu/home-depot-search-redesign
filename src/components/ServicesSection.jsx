import Icon from "./Icon.jsx";

// Services on Home: visible without digging into the Me tab,
// and every tile opens an in-app screen (no browser, no second login).
export default function ServicesSection({ services, onOpen }) {
  return (
    <section className="services">
      <div>
        <h3 className="section-title">Services</h3>
        <p className="services__subtitle">Rentals, installations &amp; DIY project tools</p>
      </div>
      <div className="services__grid">
        {services.map((s) => (
          <button key={s.id} type="button" className="service-tile" onClick={() => onOpen(s.id)}>
            <span className="service-icon">
              <Icon name={s.icon} size={22} />
            </span>
            <span className="service-tile__name">{s.name}</span>
            <span className="service-tile__blurb">{s.blurb}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
