import type { PointerEvent, ReactNode } from "react";

import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

import "./ChromeBar.css";

const DEFAULT_DOMAIN = (
  <>
    kluu<b>.</b>dev
  </>
);

interface ChromeBarProps {
  urlPath: string;
  domain?: ReactNode;
  icon?: ReactNode;
  isDark: boolean;
  onToggleTheme: () => void;
  onPointerDown: (event: PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (event: PointerEvent<HTMLDivElement>) => void;
  onPointerUp: () => void;
}

export const ChromeBar = ({
  urlPath,
  domain = DEFAULT_DOMAIN,
  icon = "🔒",
  isDark,
  onToggleTheme,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: ChromeBarProps) => {
  return (
    <div
      className="chrome"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="dots">
        <span />
        <span />
        <span />
      </div>

      <div className="addr">
        <span className="lock">{icon}</span>
        <span className="url">
          {domain}
          {urlPath}
        </span>
      </div>

      <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
    </div>
  );
};
