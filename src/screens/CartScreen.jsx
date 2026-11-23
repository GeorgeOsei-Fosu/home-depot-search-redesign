export default function CartScreen({ items }) {
  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <div className="screen__content">
      <h2 className="page-title">Cart</h2>
      {items.length === 0 ? (
        <p className="page-subtitle">Your cart is empty. Try a Project Calculator to add materials.</p>
      ) : (
        <>
          <div className="list-panel">
            {items.map((item) => (
              <div key={item.name} className="cart-row">
                <div>
                  <p className="rental-row__name">{item.name}</p>
                  <p className="rental-row__note">Qty {item.qty}</p>
                </div>
                <p className="price">${(item.qty * item.price).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <p className="cart-subtotal">
            Subtotal <strong>${subtotal.toFixed(2)}</strong>
          </p>
        </>
      )}
    </div>
  );
}
