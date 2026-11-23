import { useState } from "react";

// In-app calculators: pick one, enter measurements, get an estimate
// and add the materials straight to the cart.
export default function CalculatorsScreen({ calculators, onAddToCart }) {
  const [activeId, setActiveId] = useState(null);
  const calc = calculators.find((c) => c.id === activeId);

  if (!calc) {
    return (
      <div className="screen__content">
        <div>
          <h2 className="page-title">Project Calculators</h2>
          <p className="page-subtitle">Know what you need before you shop</p>
        </div>
        <div className="categories__grid">
          {calculators.map((c) => (
            <button key={c.id} type="button" className="tile tile--category" onClick={() => setActiveId(c.id)}>
              <img src={c.icon} width="28" height="28" alt="" />
              {c.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return <Calculator key={calc.id} calc={calc} onBack={() => setActiveId(null)} onAddToCart={onAddToCart} />;
}

function Calculator({ calc, onBack, onAddToCart }) {
  const [values, setValues] = useState(() => Object.fromEntries(calc.fields.map((f) => [f.key, f.value])));
  const [added, setAdded] = useState(false);

  const numbers = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, Number(v) || 0]));
  const qty = Math.max(0, calc.calc(numbers));
  const total = qty * calc.unitPrice;

  function update(key, value) {
    setValues((v) => ({ ...v, [key]: value }));
    setAdded(false);
  }

  function add() {
    onAddToCart({ name: calc.product, qty, price: calc.unitPrice });
    setAdded(true);
  }

  return (
    <div className="screen__content">
      <button type="button" className="text-back" onClick={onBack}>
        ‹ All calculators
      </button>
      <h2 className="page-title">{calc.name} Calculator</h2>

      <div className="panel form-panel">
        {calc.fields.map((f) => (
          <label key={f.key} className="field">
            <span>{f.label}</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              value={values[f.key]}
              onChange={(e) => update(f.key, e.target.value)}
            />
          </label>
        ))}
      </div>

      <div className="estimate">
        <p className="estimate__label">You'll need about</p>
        <p className="estimate__qty">
          {qty} {calc.unit}
          {qty === 1 ? "" : "s"}
        </p>
        <p className="estimate__product">{calc.product}</p>
        <p className="estimate__total">
          Estimated cost <strong>${total.toFixed(2)}</strong>
        </p>
        <button type="button" className="primary-button" disabled={qty === 0 || added} onClick={add}>
          {added ? "Added to cart ✓" : `Add ${qty} to cart`}
        </button>
      </div>
      <p className="chat__disclaimer">Rough estimate. Sample prices for design purposes</p>
    </div>
  );
}
