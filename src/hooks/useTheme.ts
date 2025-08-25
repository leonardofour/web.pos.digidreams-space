import { create } from "zustand";
import { cssVariables } from "@/theme/theme-colors";

export type ThemeMode = "light" | "dark";

interface ThemeState {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const useTheme = create<ThemeState>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      applyThemeVariables(newTheme);
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
  setTheme: (theme: ThemeMode) =>
    set(() => {
      applyThemeVariables(theme);
      localStorage.setItem("theme", theme);
      return { theme };
    }),
}));

const applyThemeVariables = (theme: ThemeMode) => {
  const root = document.documentElement;
  const variables = cssVariables[theme];

  Object.entries(variables).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
};

const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme") as ThemeMode;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const initialTheme = savedTheme || systemTheme;

  useTheme.getState().setTheme(initialTheme);
};

if (typeof window !== "undefined") {
  initializeTheme();
}

export default useTheme;
