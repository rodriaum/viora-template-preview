import { Code2, Layers3, Menu, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "@/components/theme-provider"
import { SidebarTrigger } from "@/components/ui/sidebar"

type SiteHeaderProps = {
  isHome?: boolean
  basePath?: string
  onNavigate?: (path: string) => void
  showComponentSidebar?: boolean
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
  showComponentSidebar = false,
}: SiteHeaderProps) {
  const homeHref = basePath ? `${basePath}/` : "/"

  const navigate = (path: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      event.preventDefault()
      onNavigate(path)
    }
  }

  const homeClassName = `transition-colors hover:text-foreground ${
    isHome ? "text-foreground" : ""
  }`
  const componentsClassName = `transition-colors hover:text-foreground ${
    !isHome ? "text-foreground" : ""
  }`

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
{showComponentSidebar ? (
            <SidebarTrigger
              className="size-9 md:hidden"
              aria-label="Open component navigation"
            >
              <Menu className="size-5" />
            </SidebarTrigger>
          ) : (
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-9 sm:hidden"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[min(20rem,85vw)]">
                <SheetHeader className="border-b text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <Layers3 className="size-4" />
                    <span>Viora</span>
                    <span className="font-normal text-muted-foreground">/ UI</span>
                  </SheetTitle>
                </SheetHeader>
  
                <nav className="flex flex-col gap-1 px-4 py-4 text-sm">
                  <SheetClose
                    render={
                      <a
                        href={homeHref}
                        onClick={navigate("/")}
                        aria-current={isHome ? "page" : undefined}
                        className={`rounded-lg px-3 py-2.5 font-medium ${
                          isHome
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      />
                    }
                  >
                    Home
                  </SheetClose>
                  <SheetClose
                    render={
                      <a
                        href={`${homeHref}components`}
                        onClick={navigate("/components")}
                        aria-current={!isHome ? "page" : undefined}
                        className={`rounded-lg px-3 py-2.5 font-medium ${
                          !isHome
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      />
                    }
                  >
                    Components
                  </SheetClose>
                </nav>
  
                <div className="mt-auto flex items-center justify-between border-t px-5 py-4">
                  <span className="text-sm text-muted-foreground">Appearance</span>
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          )}

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
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a
            href={homeHref}
            onClick={navigate("/")}
            aria-current={isHome ? "page" : undefined}
            className={homeClassName}
          >
            Home
          </a>
          <a
            href={`${homeHref}components`}
            onClick={navigate("/components")}
            aria-current={!isHome ? "page" : undefined}
            className={componentsClassName}
          >
            Components
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <span className={showComponentSidebar ? "inline-flex" : "hidden sm:inline-flex"}>
            <ThemeToggle />
          </span>
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
          </Button>
        </div>
      </div>
    </header>
  )
}
