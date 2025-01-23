import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const isLightTheme = theme === 'light';

  const toggleTheme = () => {
    if (isLightTheme) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer hover:text-foreground dark:hover:text-background pl-2">
      {isLightTheme ? (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100" />
        </>
      ) : (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
        </>
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
