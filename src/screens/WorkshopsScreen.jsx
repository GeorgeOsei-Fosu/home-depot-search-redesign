import { useState } from "react";
import Icon from "../components/Icon.jsx";

// Digital Workshops in the app: the videos are the first thing you see.
export default function WorkshopsScreen({ workshops }) {
  const [playing, setPlaying] = useState(null);

  return (
    <div className="screen__content">
      <div>
        <h2 className="page-title">Digital Workshops</h2>
        <p className="page-subtitle">Free how-to videos for your next project</p>
      </div>

      {playing && (
        <div className="player">
          <div className="player__screen">
            <Icon name="play" size={40} />
            <span>Video plays here</span>
          </div>
          <p className="player__title">Now playing: {playing.title}</p>
        </div>
      )}

      <div className="list-panel">
        {workshops.map((w) => (
          <button key={w.title} type="button" className="video-row" onClick={() => setPlaying(w)}>
            <span className="video-row__thumb">
              <Icon name="play" size={22} />
            </span>
            <span className="video-row__info">
              <span className="video-row__title">{w.title}</span>
              <span className="video-row__meta">
                {w.length} · {w.level}
              </span>
            </span>
          </button>
        ))}
      </div>
      <p className="chat__disclaimer">Sample videos for design purposes</p>
    </div>
  );
}
