"use client";

import { defaultTools, Editor, Tldraw } from "tldraw";
import "tldraw/tldraw.css";

function WhiteBoard() {
  const handleMount = (editor: Editor) => {
    editor.createShape({
      type: "text",
      x: 20,
      y: 20,
      props: {
        text: "Hello world!",
      },
    });
    editor.setCurrentTool("select");
  };

  return (
    <Tldraw
      tools={defaultTools}
      autoFocus={true}
      onMount={handleMount}
      className="border-primary rotate-x-[40deg] rotate-y-[-5deg] border"

      // persistenceKey="example"
    />
  );
}

export default WhiteBoard;
