import { useEffect, useRef, useState } from "react";
import aiSmall from "../assets/icons/ai-small.svg";
import chevronDown from "../assets/icons/chevron-down.svg";
import sendArrow from "../assets/icons/send-arrow.svg";

// AI assistant. The first exchange is the sample conversation from Figma;
// follow-ups get a placeholder reply since there is no real AI behind it.
export default function ChatScreen({ chat, followUps, onSend, onMinimize }) {
  const [draft, setDraft] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [followUps.length]);

  function submit(e) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft("");
  }

  return (
    <div className="chat">
      <header className="chat__header">
        <div className="chat__title">
          <img src={aiSmall} width="28" height="28" alt="" />
          <h2>Ask a question</h2>
        </div>
        <button type="button" className="chat__minimize" onClick={onMinimize} aria-label="Minimize">
          <img src={chevronDown} width="22" height="22" alt="" />
        </button>
      </header>

      <div className="chat__messages">
        <p className="bubble bubble--user">{chat.question}</p>
        <div className="bubble bubble--assistant">
          <p>{chat.answer}</p>
          <ol>
            {chat.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="panel parts">
          <p className="parts__title">Parts you may need</p>
          <div className="parts__row">
            {chat.parts.map((part) => (
              <div key={part.name} className="part">
                <div className="part__photo" />
                <p className="part__name">{part.name}</p>
                <p className="price price--xs">{part.price}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="chat__disclaimer">Sample content for design purposes</p>

        {followUps.map((msg, i) => (
          <p key={i} className={`bubble bubble--${msg.from}`}>
            {msg.text}
          </p>
        ))}
        <div ref={endRef} />
      </div>

      <form className="chat__input" onSubmit={submit}>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask a follow-up"
          aria-label="Ask a follow-up"
        />
        <button type="submit" className="chat__send" aria-label="Send">
          <img src={sendArrow} width="20" height="20" alt="" />
        </button>
      </form>
    </div>
  );
}
