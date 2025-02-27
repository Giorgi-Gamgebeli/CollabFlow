"use client";

import {
  DefaultToolbar,
  DrawToolbarItem,
  Editor,
  SelectToolbarItem,
  Tldraw,
} from "tldraw";
import Tilt from "react-parallax-tilt";
import "tldraw/tldraw.css";

function LandingPageWhiteBoard() {
  const handleMount = (editor: Editor) => {
    editor.createShape({
      type: "text",
      x: 250,
      y: 250,
      props: {
        text: "Hello world!",
      },
    });
    editor.setCurrentTool("select");
  };

  return (
    <Tilt tiltAngleXManual={10} tiltAngleYManual={-25} scale={1.01}>
      <Tldraw
        autoFocus={true}
        onMount={handleMount}
        className="border-primary border"
        // persistenceKey="example"
        components={{
          PageMenu: () => null,
          MenuPanel: () => null,
          ZoomMenu: () => null,
          ActionsMenu: () => null,
          KeyboardShortcutsDialog: () => null,

          // Toolbar: (props) => {
          //   // List the tools you want to hide
          //   const toolsToHide = [
          //     "rectangle",
          //     "ellipse",
          //     "arrow",
          //     "line",
          //     "note",
          //     "frame",
          //   ];
          //   if (toolsToHide.includes(props.item.id)) {
          //     return null;
          //   }
          //   // Use the default ToolItem for tools you want to keep
          //   return props.defaultComponent(props);
          // },
          // Toolbar: (props) => {
          //   console.log(props);
          //   return props.defaultComponent(props);
          // },
          Toolbar: () => (
            <DefaultToolbar>
              <SelectToolbarItem />
              <DrawToolbarItem />
            </DefaultToolbar>
          ),
        }}
      />
    </Tilt>
  );
}

export default LandingPageWhiteBoard;
