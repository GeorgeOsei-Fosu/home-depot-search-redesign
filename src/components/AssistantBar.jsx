import aiIcon from "../assets/icons/ai.svg";

// Docked bar at the bottom of Home. Once a conversation exists it shows
// the topic and "Continue" instead of the default prompt.
export default function AssistantBar({ topic, onOpen }) {
  return (
    <button type="button" className="assistant-bar" onClick={onOpen}>
      <img src={aiIcon} width="36" height="36" alt="" />
      <span className="assistant-bar__title">{topic ?? "Ask a question"}</span>
      <span className="assistant-bar__hint">{topic ? "Continue" : "Products & projects"}</span>
    </button>
  );
}
