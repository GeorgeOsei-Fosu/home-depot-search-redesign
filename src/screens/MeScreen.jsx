import Icon from "../components/Icon.jsx";

const ACCOUNT_ROWS = ["Orders & Purchases", "Lists", "Payment Methods", "Account Settings"];

// Services are still here for people who look in Me, but each row now
// has an icon and a description, and opens in the app.
export default function MeScreen({ services, onOpenService }) {
  return (
    <div className="screen__content">
      <div className="profile">
        <span className="profile__avatar">
          <Icon name="user" size={26} />
        </span>
        <div>
          <p className="profile__name">Hi there</p>
          <p className="page-subtitle">You're signed in</p>
        </div>
      </div>

      <div className="list-panel">
        {ACCOUNT_ROWS.map((row) => (
          <div key={row} className="menu-row">
            <span>{row}</span>
            <Icon name="chevron" size={18} />
          </div>
        ))}
      </div>

      <div>
        <h3 className="section-title">Services</h3>
        <p className="services__subtitle">Rentals, installations &amp; DIY project tools</p>
      </div>
      <div className="list-panel">
        {services.map((s) => (
          <button key={s.id} type="button" className="menu-row menu-row--service" onClick={() => onOpenService(s.id)}>
            <span className="service-icon">
              <Icon name={s.icon} size={20} />
            </span>
            <span className="menu-row__text">
              <span className="menu-row__title">{s.name}</span>
              <span className="menu-row__blurb">{s.blurb}</span>
            </span>
            <Icon name="chevron" size={18} />
          </button>
        ))}
      </div>
    </div>
  );
}
