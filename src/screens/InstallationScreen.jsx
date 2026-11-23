import { useState } from "react";

const TIMES = ["Morning", "Afternoon", "Evening"];

// Next five days, labelled like "Mon 24"
function nextDays(count) {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return `${d.toLocaleDateString("en-US", { weekday: "short" })} ${d.getDate()}`;
  });
}

// In-app installation booking: pick a category, pick a time, done.
// Account details come from the app, so there's no second login.
export default function InstallationScreen({ categories }) {
  const [category, setCategory] = useState(null);

  if (!category) {
    return (
      <div className="screen__content">
        <div>
          <h2 className="page-title">Installation Services</h2>
          <p className="page-subtitle">Free in-home measure or consultation</p>
        </div>
        <div className="categories__grid">
          {categories.map((c) => (
            <button key={c.name} type="button" className="tile tile--category" onClick={() => setCategory(c)}>
              <img src={c.icon} width="28" height="28" alt="" />
              {c.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return <Booking key={category.name} category={category} onBack={() => setCategory(null)} />;
}

function Booking({ category, onBack }) {
  const days = nextDays(5);
  const [day, setDay] = useState(days[0]);
  const [time, setTime] = useState(TIMES[0]);
  const [booked, setBooked] = useState(false);

  if (booked) {
    return (
      <div className="screen__content">
        <div className="panel confirmation">
          <span className="confirmation__check">✓</span>
          <h2 className="page-title">Consultation requested</h2>
          <p className="page-subtitle">
            {category.name} · {day} · {time}
          </p>
          <p className="confirmation__note">We'll confirm the exact time by email and in your Me tab.</p>
          <button type="button" className="primary-button" onClick={onBack}>
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen__content">
      <button type="button" className="text-back" onClick={onBack}>
        ‹ All services
      </button>
      <div>
        <h2 className="page-title">{category.name} Installation</h2>
        <p className="page-subtitle">Free in-home consultation</p>
      </div>

      <ul className="included">
        <li>An expert measures and checks your space</li>
        <li>Help choosing products and options</li>
        <li>A written quote. No obligation</li>
      </ul>

      <div>
        <p className="field-label">Pick a day</p>
        <div className="chips">
          {days.map((d) => (
            <button key={d} type="button" className={`chip${d === day ? " is-active" : ""}`} onClick={() => setDay(d)}>
              {d}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="field-label">Pick a time</p>
        <div className="chips">
          {TIMES.map((t) => (
            <button key={t} type="button" className={`chip${t === time ? " is-active" : ""}`} onClick={() => setTime(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="signed-in-note">✓ Your contact details are filled in from your account</p>

      <button type="button" className="primary-button" onClick={() => setBooked(true)}>
        Schedule free consultation
      </button>
    </div>
  );
}
