
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-10 w-10 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/50 border-2 border-teal-300 dark:border-teal-600 transition-all duration-300 hover:border-teal-400 dark:hover:border-teal-500"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-teal-600" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-teal-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
