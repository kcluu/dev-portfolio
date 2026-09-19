import { ChromeBar } from "../ChromeBar/ChromeBar";
import { TerminalPanel } from "../TerminalPanel/TerminalPanel";

import { useTheme } from "../../hooks/useTheme";
import { useDraggable } from "../../hooks/useDraggable";

import "../BrowserWindow/BrowserWindow.css";
import "./TerminalWindow.css";

const BASE_OFFSET = { x: 180, y: -250 };

interface TerminalWindowProps {
  zIndex: number;
  onFocus: () => void;
}

export const TerminalWindow = ({ zIndex, onFocus }: TerminalWindowProps) => {
  const { isDark, toggleTheme } = useTheme();
  const { offset, handlePointerDown, handlePointerMove, handlePointerUp } =
    useDraggable();

  return (
    <div
      className="browser terminal-window"
      style={{
        transform: `translate(-50%, 0) translate(${BASE_OFFSET.x + offset.x}px, ${BASE_OFFSET.y + offset.y}px)`,
        zIndex,
      }}
      onPointerDown={onFocus}
    >
      <ChromeBar
        urlPath="~/resume.txt"
        domain="terminal"
        icon="📁"
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />

      <main className="content terminal-content">
        <TerminalPanel />
      </main>
    </div>
  );
};
