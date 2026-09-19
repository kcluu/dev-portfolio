import { useState } from "react";

import { BrowserWindow } from "./components/BrowserWindow/BrowserWindow";
import { MusicWindow } from "./components/MusicWindow/MusicWindow";
import { TerminalWindow } from "./components/TerminalWindow/TerminalWindow";
import type { TabId } from "./components/Tab/Tab";

import "./App.css";

type WindowId = "browser" | "music" | "terminal";

// rendered in a fixed order so the DOM never reorders: reordering would move the
// Spotify iframe to a new DOM position, which makes browsers reload it
const WINDOW_ORDER: WindowId[] = ["browser", "music", "terminal"];

export const App = () => {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [zIndices, setZIndices] = useState<Record<WindowId, number>>({
    browser: 3,
    music: 2,
    terminal: 1,
  });

  const bringToFront = (windowId: WindowId) => {
    setZIndices((current) => {
      const topZ = Math.max(...Object.values(current));
      return current[windowId] === topZ
        ? current
        : { ...current, [windowId]: topZ + 1 };
    });
  };

  const renderWindow = (windowId: WindowId) => {
    const zIndex = zIndices[windowId];

    if (windowId === "music") {
      return (
        <MusicWindow
          key={windowId}
          zIndex={zIndex}
          onFocus={() => bringToFront("music")}
        />
      );
    }

    if (windowId === "terminal") {
      return (
        <TerminalWindow
          key={windowId}
          zIndex={zIndex}
          onFocus={() => bringToFront("terminal")}
        />
      );
    }

    return (
      <BrowserWindow
        key={windowId}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        zIndex={zIndex}
        onFocus={() => bringToFront("browser")}
      />
    );
  };

  return <div className="window-stack">{WINDOW_ORDER.map(renderWindow)}</div>;
};
