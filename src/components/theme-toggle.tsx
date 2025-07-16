// components/theme-toggle.tsx
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (checked: boolean) => {
    const nextTheme = checked ? "dark" : "light";
    setTheme(nextTheme);
    document.cookie = `theme=${nextTheme}; path=/; max-age=31536000`;
  };

  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-4 w-4 transition-colors ${
          !isDark && mounted ? "text-yellow-500" : "text-muted-foreground"
        }`}
      />
      <Switch
        checked={isDark && mounted}
        onCheckedChange={handleChange}
        disabled={!mounted}
      />
      <Moon
        className={`h-4 w-4 transition-colors ${
          isDark && mounted ? "text-blue-400" : "text-muted-foreground"
        }`}
      />
    </div>
  );
}
