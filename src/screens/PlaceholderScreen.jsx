// For tabs that aren't part of this redesign
export default function PlaceholderScreen({ title }) {
  return (
    <div className="screen__content">
      <h2 className="page-title">{title}</h2>
      <p className="page-subtitle">Not part of this prototype.</p>
    </div>
  );
}
