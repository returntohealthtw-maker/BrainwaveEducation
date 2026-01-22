import { useState } from "react";

export default function ChatInterface() {
  const [text, setText] = useState("");

  return (
    <section style={{ padding: "16px" }}>
      <div style={{ border: "1px dashed #bbb", borderRadius: 12, padding: 16 }}>
        <h2 style={{ margin: 0, fontSize: 16 }}>Chat Interface</h2>

        <div style={{ marginTop: 12 }}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here…"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <div style={{ marginTop: 10, fontSize: 13, opacity: 0.75 }}>
            Placeholder component (created to fix build).
          </div>
        </div>
      </div>
    </section>
  );
}
