import * as React from "react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Separator } from "@/components/ui/separator"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"

const ComponentDetail = React.lazy(() => import("@/components/component-detail"))
const Playground = React.lazy(() => import("@/components/playground"))

const componentDefinitions = [
  ["Accordion", "Layout"],
  ["Alert Dialog", "Feedback"],
  ["Alert", "Feedback"],
  ["Aspect Ratio", "Layout"],
  ["Attachment", "Data display"],
  ["Avatar", "Data display"],
  ["Badge", "Data display"],
  ["Breadcrumb", "Navigation"],
  ["Bubble", "Messaging"],
  ["Button Group", "Actions"],
  ["Button", "Actions"],
  ["Calendar", "Forms"],
  ["Date Time Picker", "Forms"],
  ["Card", "Layout"],
  ["Carousel", "Navigation"],
  ["Chart", "Data display"],
  ["Checkbox", "Forms"],
  ["Code Block", "Data display"],
  ["Collapsible", "Layout"],
  ["Combobox", "Forms"],
  ["Command", "Navigation"],
  ["Context Menu", "Navigation"],
  ["Dialog", "Overlays"],
  ["Direction", "Utilities"],
  ["Drawer", "Overlays"],
  ["Dropdown Menu", "Navigation"],
  ["Empty", "Data display"],
  ["Field", "Forms"],
  ["Hover Card", "Overlays"],
  ["Input Group", "Forms"],
  ["Input OTP", "Forms"],
  ["Input", "Forms"],
  ["Item", "Data display"],
  ["Kbd", "Data display"],
  ["Label", "Forms"],
  ["Marker", "Data display"],
  ["Menubar", "Navigation"],
  ["Message Scroller", "Messaging"],
  ["Message", "Messaging"],
  ["Native Select", "Forms"],
  ["Navigation Menu", "Navigation"],
  ["Pagination", "Navigation"],
  ["Popover", "Overlays"],
  ["Progress", "Feedback"],
  ["Questionnaire", "Forms"],
  ["Radio Group", "Forms"],
  ["Resizable", "Layout"],
  ["Scroll Area", "Layout"],
  ["Select", "Forms"],
  ["Separator", "Layout"],
  ["Sheet", "Overlays"],
  ["Sidebar", "Navigation"],
  ["Skeleton", "Feedback"],
  ["Slider", "Forms"],
  ["Spinner", "Feedback"],
  ["Switch", "Forms"],
  ["Table", "Data display"],
  ["Tabs", "Navigation"],
  ["Textarea", "Forms"],
  ["Toast", "Feedback"],
  ["Toggle Group", "Actions"],
  ["Toggle", "Actions"],
  ["Tooltip", "Overlays"],
  ["Trace", "Data display"],
] as const

const components = componentDefinitions.map(([name, category]) => ({
  id: name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
  name,
  category,
}))

const categoryCount = new Set(components.map(({ category }) => category)).size


function PageLoading() {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-background">
      <Spinner className="size-8 text-muted-foreground" />
    </div>
  )
}

function DeferredPlayground() {
  const sectionRef = React.useRef<HTMLElement | null>(null)
  const [shouldLoad, setShouldLoad] = React.useState(
    () => typeof IntersectionObserver === "undefined"
  )

  React.useEffect(() => {
    if (shouldLoad) return

    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "180px 0px" }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <section
      id="playground"
      ref={sectionRef}
      className="scroll-mt-20"
    >
      {shouldLoad ? (
        <React.Suspense fallback={<div className="min-h-96 animate-pulse rounded-xl border bg-muted/20" />}>
          <Playground />
        </React.Suspense>
      ) : (
        <div className="space-y-5" aria-busy="true">
          <div className="h-6 w-32 animate-pulse rounded bg-muted" />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="h-36 animate-pulse rounded-xl border bg-card"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function App() {
  const [pathname, setPathname] = React.useState(() => window.location.pathname)
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "")
  const appPath =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname

  React.useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener("popstate", handlePopState)

    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  React.useEffect(() => {
    if (appPath === "/components" || appPath === "/components/") {
      const destination = `${basePath}/components/${components[0].id}`
      window.history.replaceState({}, "", destination)
      setPathname(destination)
    }
  }, [appPath, basePath])

  const componentRoute = appPath.match(/^\/components\/([^/]+)\/?$/)
  const activeComponent = componentRoute
    ? components.find((component) => component.id === componentRoute[1])
    : appPath === "/components" || appPath === "/components/"
      ? components[0]
      : undefined

  function navigate(path: string) {
    const destination = `${basePath}${path}`
    window.history.pushState({}, "", destination)
    setPathname(destination)
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  if (activeComponent) {
    return (
      <React.Suspense fallback={<PageLoading />}>
        <ComponentDetail
          component={activeComponent}
          components={components}
          onNavigate={navigate}
          basePath={basePath}
        />
      </React.Suspense>
    )
  }

  if (appPath === "/components" || appPath === "/components/") {
    return null
  }

  if (appPath !== "/") {
    return (
      <div className="grid min-h-screen place-items-center bg-background px-5 text-center text-foreground">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Component not found</h1>
          <p className="text-sm text-muted-foreground">
            This component does not exist in the Viora UI catalogue.
          </p>
          <Button onClick={() => navigate("/")}>Back to components</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader isHome basePath={basePath} onNavigate={navigate} />

      <main className="mx-auto max-w-6xl space-y-12 px-5 py-10 sm:py-14">
        <section className="flex flex-col justify-between gap-4 border-b pb-7 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              UI Components
            </h1>
            <p className="text-sm text-muted-foreground">
              Interactive component library and examples.
            </p>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <div>
              <p className="text-xl font-semibold tabular-nums">
                {components.length}
              </p>
              <p className="text-xs text-muted-foreground">Components</p>
            </div>
            <Separator orientation="vertical" className="h-9" />
            <div>
              <p className="text-xl font-semibold tabular-nums">
                {categoryCount}
              </p>
              <p className="text-xs text-muted-foreground">Categories</p>
            </div>
          </div>
        </section>

        <DeferredPlayground />

      </main>
      <div className="mx-auto max-w-6xl px-5 pb-10">
        <SiteFooter />
      </div>
    </div>
  )
}

export default App
