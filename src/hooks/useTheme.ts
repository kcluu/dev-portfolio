import { useCallback, useEffect, useState } from "react";

type ThemeOverride = "light" | "dark" | null;

export const useTheme = () => {
  const [override, setOverride] = useState<ThemeOverride>("light");

  const isDark = override === "dark";

  useEffect(() => {
    const root = document.documentElement;

    if (override === null) {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", override);
    }
  }, [override]);

  const toggleTheme = useCallback(() => {
    setOverride(isDark ? "light" : "dark");
  }, [isDark]);

  return { isDark, toggleTheme };
}
