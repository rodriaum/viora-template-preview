import { ArrowUpRight, Code2, Layers3, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

type SiteHeaderProps = {
  isHome?: boolean
  basePath?: string
  onNavigate?: (path: string) => void
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-9 rounded-full"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

export default function SiteHeader({
  isHome = false,
  basePath = "",
  onNavigate,
}: SiteHeaderProps) {
  const homeHref = basePath ? `${basePath}/` : "/"

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a
          href={isHome ? "#" : homeHref}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center">
            <Layers3 className="size-4" />
          </span>
          <span>Viora</span>
          <span className="font-normal text-muted-foreground">/ UI</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a
            href={isHome ? "#playground" : `${homeHref}#playground`}
            className="transition-colors hover:text-foreground"
          >
            Playground
          </a>
          <a
            href={`${homeHref}components`}
            onClick={(event) => {
              if (onNavigate) {
                event.preventDefault()
                onNavigate("/components")
              }
            }}
            className="transition-colors hover:text-foreground"
          >
            Components
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="h-9"
            onClick={() =>
              window.open(
                "https://github.com/viora-studio/template-preview",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <Code2 className="mr-2 size-4" />
            <span className="hidden sm:inline">Source</span>
            <ArrowUpRight className="ml-1 size-3.5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
