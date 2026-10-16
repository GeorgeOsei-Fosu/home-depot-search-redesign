// Fake iOS status bar — only shown inside the desktop phone frame (see styles.css)
export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-bar__time">9:41</span>
      <span className="status-bar__info">5G&nbsp;&nbsp;100%</span>
    </div>
  );
}
