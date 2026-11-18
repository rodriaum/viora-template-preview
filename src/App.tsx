import * as React from "react"

import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Command,
  FileText,
  Filter,
  Github,
  Info,
  Layers3,
  LayoutGrid,
  Loader2,
  Menu,
  MessageSquare,
  Moon,
  MoreHorizontal,
  Package,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Users,
  X,
  Zap,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type ComponentEntry = {
  name: string
  category: string
  description: string
}

const components: ComponentEntry[] = [
  {
    name: "Accordion",
    category: "Layout",
    description: "Progressively disclose related content.",
  },
  {
    name: "Alert Dialog",
    category: "Feedback",
    description: "Request confirmation before a consequential action.",
  },
  {
    name: "Alert",
    category: "Feedback",
    description: "Communicate important contextual information.",
  },
  {
    name: "Aspect Ratio",
    category: "Layout",
    description: "Keep media inside a predictable frame.",
  },
  {
    name: "Attachment",
    category: "Data display",
    description: "Present uploaded files and their status.",
  },
  {
    name: "Avatar",
    category: "Data display",
    description: "Represent people and teams.",
  },
  {
    name: "Badge",
    category: "Data display",
    description: "Highlight a compact status or category.",
  },
  {
    name: "Breadcrumb",
    category: "Navigation",
    description: "Show the current location in a hierarchy.",
  },
  {
    name: "Bubble",
    category: "Messaging",
    description: "Display a conversational message.",
  },
  {
    name: "Button Group",
    category: "Actions",
    description: "Keep related actions together.",
  },
  {
    name: "Button",
    category: "Actions",
    description: "Trigger a primary or supporting action.",
  },
  {
    name: "Calendar",
    category: "Forms",
    description: "Choose a date from a calendar view.",
  },
  {
    name: "Card",
    category: "Layout",
    description: "Group content into a clear surface.",
  },
  {
    name: "Carousel",
    category: "Navigation",
    description: "Browse a horizontal collection of items.",
  },
  {
    name: "Chart",
    category: "Data display",
    description: "Visualise trends and comparisons.",
  },
  {
    name: "Checkbox",
    category: "Forms",
    description: "Select one or more independent options.",
  },
  {
    name: "Code Block",
    category: "Data display",
    description: "Present formatted code with highlighting.",
  },
  {
    name: "Collapsible",
    category: "Layout",
    description: "Expand or hide a compact content region.",
  },
  {
    name: "Combobox",
    category: "Forms",
    description: "Search and select from a list of options.",
  },
  {
    name: "Command",
    category: "Navigation",
    description: "Offer keyboard-friendly application commands.",
  },
  {
    name: "Context Menu",
    category: "Navigation",
    description: "Expose actions relevant to a specific target.",
  },
  {
    name: "Dialog",
    category: "Overlays",
    description: "Focus attention on a task in a modal surface.",
  },
  {
    name: "Direction",
    category: "Utilities",
    description: "Set left-to-right or right-to-left direction.",
  },
  {
    name: "Drawer",
    category: "Overlays",
    description: "Reveal supplementary content in a panel.",
  },
  {
    name: "Dropdown Menu",
    category: "Navigation",
    description: "Group actions in a compact menu.",
  },
  {
    name: "Empty",
    category: "Data display",
    description: "Guide users when a section has no content.",
  },
  {
    name: "Field",
    category: "Forms",
    description: "Arrange labels, controls and helper text.",
  },
  {
    name: "Hover Card",
    category: "Overlays",
    description: "Preview related information on hover.",
  },
  {
    name: "Input Group",
    category: "Forms",
    description: "Combine an input with supporting elements.",
  },
  {
    name: "Input OTP",
    category: "Forms",
    description: "Enter a one-time verification code.",
  },
  {
    name: "Input",
    category: "Forms",
    description: "Capture a single line of text.",
  },
  {
    name: "Item",
    category: "Data display",
    description: "Structure a row with supporting content.",
  },
  {
    name: "Kbd",
    category: "Data display",
    description: "Represent a keyboard shortcut.",
  },
  {
    name: "Label",
    category: "Forms",
    description: "Identify a form control.",
  },
  {
    name: "Marker",
    category: "Data display",
    description: "Annotate a point or location.",
  },
  {
    name: "Menubar",
    category: "Navigation",
    description: "Present application-level menu actions.",
  },
  {
    name: "Message Scroller",
    category: "Messaging",
    description: "Keep a conversation anchored to recent messages.",
  },
  {
    name: "Message",
    category: "Messaging",
    description: "Structure a message with metadata and content.",
  },
  {
    name: "Native Select",
    category: "Forms",
    description: "Use the browser's native selection control.",
  },
  {
    name: "Navigation Menu",
    category: "Navigation",
    description: "Navigate between related destinations.",
  },
  {
    name: "Pagination",
    category: "Navigation",
    description: "Move through a multi-page collection.",
  },
  {
    name: "Popover",
    category: "Overlays",
    description: "Show contextual content next to a trigger.",
  },
  {
    name: "Progress",
    category: "Feedback",
    description: "Indicate completion of a task.",
  },
  {
    name: "Questionnaire",
    category: "Forms",
    description: "Collect structured answers from a user.",
  },
  {
    name: "Radio Group",
    category: "Forms",
    description: "Choose exactly one option from a set.",
  },
  {
    name: "Resizable",
    category: "Layout",
    description: "Let users adjust the size of panels.",
  },
  {
    name: "Scroll Area",
    category: "Layout",
    description: "Provide a styled scrollable region.",
  },
  {
    name: "Select",
    category: "Forms",
    description: "Choose an option from a custom menu.",
  },
  {
    name: "Separator",
    category: "Layout",
    description: "Visually divide related content.",
  },
  {
    name: "Sheet",
    category: "Overlays",
    description: "Open a side panel for focused tasks.",
  },
  {
    name: "Sidebar",
    category: "Navigation",
    description: "Provide persistent application navigation.",
  },
  {
    name: "Skeleton",
    category: "Feedback",
    description: "Preview the shape of loading content.",
  },
  {
    name: "Slider",
    category: "Forms",
    description: "Choose a value within a numeric range.",
  },
  {
    name: "Spinner",
    category: "Feedback",
    description: "Indicate an operation in progress.",
  },
  {
    name: "Switch",
    category: "Forms",
    description: "Toggle a setting between enabled and disabled.",
  },
  {
    name: "Table",
    category: "Data display",
    description: "Organise structured information into rows.",
  },
  {
    name: "Tabs",
    category: "Navigation",
    description: "Switch between related content panels.",
  },
  {
    name: "Textarea",
    category: "Forms",
    description: "Capture longer-form text.",
  },
  {
    name: "Toast",
    category: "Feedback",
    description: "Provide brief, temporary feedback.",
  },
  {
    name: "Toggle Group",
    category: "Actions",
    description: "Select one or more related view options.",
  },
  {
    name: "Toggle",
    category: "Actions",
    description: "Switch a single pressed state.",
  },
  {
    name: "Tooltip",
    category: "Overlays",
    description: "Explain an element on hover or focus.",
  },
  {
    name: "Trace",
    category: "Data display",
    description: "Inspect a sequence of events or execution steps.",
  },
]

const categories = [
  "All components",
  "Actions",
  "Data display",
  "Feedback",
  "Forms",
  "Layout",
  "Messaging",
  "Navigation",
  "Overlays",
  "Utilities",
]

const activityItems = [
  {
    name: "Alex Morgan",
    action: "Updated design tokens",
    status: "Completed",
    date: "Today",
  },
  {
    name: "Jamie Lee",
    action: "Added new components",
    status: "In review",
    date: "Yesterday",
  },
  {
    name: "Taylor Kim",
    action: "Published documentation",
    status: "Completed",
    date: "Nov 15",
  },
]

const teamMembers = [
  { name: "Alex Morgan", role: "Owner", initials: "AM" },
  { name: "Jamie Lee", role: "Developer", initials: "JL" },
  { name: "Taylor Kim", role: "Designer", initials: "TK" },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="mb-5 space-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function DemoCard({
  title,
  description,
  children,
  className,
}: {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "Actions":
      return Activity
    case "Feedback":
      return Zap
    case "Forms":
      return SlidersHorizontal
    case "Layout":
      return LayoutGrid
    case "Messaging":
      return MessageSquare
    case "Navigation":
      return Command
    case "Overlays":
      return Layers3
    default:
      return Package
  }
}

function getComponentId(name: string) {
  return name.toLowerCase().replaceAll(" ", "-")
}

function App() {
  const [query, setQuery] = React.useState("")
  const [activeCategory, setActiveCategory] =
    React.useState("All components")
  const [darkMode, setDarkMode] = React.useState(false)

  const [termsAccepted, setTermsAccepted] = React.useState(true)
  const [marketingEnabled, setMarketingEnabled] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState("pro")
  const [volume, setVolume] = React.useState([68])
  const [progress, setProgress] = React.useState(72)

  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date(),
  )
  const [detailsOpen, setDetailsOpen] = React.useState(true)
  const [notificationVisible, setNotificationVisible] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState("overview")
  const [selectedView, setSelectedView] = React.useState("grid")
  const [currentPage, setCurrentPage] = React.useState(1)

  const [email, setEmail] = React.useState("alex@example.com")
  const [message, setMessage] = React.useState(
    "A thoughtful component system makes every interaction feel consistent.",
  )

  const filteredComponents = components.filter((component) => {
    const matchesCategory =
      activeCategory === "All components" ||
      component.category === activeCategory

    const searchTerm = query.toLowerCase()
    const matchesSearch =
      component.name.toLowerCase().includes(searchTerm) ||
      component.description.toLowerCase().includes(searchTerm)

    return matchesCategory && matchesSearch
  })

  const categoryCounts = categories.slice(1).map((category) => ({
    category,
    count: components.filter((component) => component.category === category)
      .length,
  }))

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  function resetFilters() {
    setQuery("")
    setActiveCategory("All components")
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-8">
            <a
              href="#"
              className="flex items-center gap-2.5 font-semibold tracking-tight"
            >
              <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Layers3 className="size-4" />
              </span>
              Viora
              <span className="font-normal text-muted-foreground">
                / UI Library
              </span>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a href="#overview" className="hover:text-foreground">
                Overview
              </a>
              <a href="#showcase" className="hover:text-foreground">
                Showcase
              </a>
              <a href="#catalog" className="hover:text-foreground">
                Catalog
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="hidden sm:inline-flex">
                v1.0 · 63 components
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode((current) => !current)}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun /> : <Moon />}
              </Button>
              <Button
                size="sm"
                onClick={() =>
                  window.open(
                    "https://github.com/viora-studio/template-preview",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <Github className="mr-1.5 size-4" />
                Repository
                <ArrowUpRight className="ml-1 size-3.5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-8">
          <section
            id="overview"
            className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20"
          >
            <div className="space-y-6">
              <Badge variant="secondary" className="gap-1.5">
                <Sparkles className="size-3" />
                A cohesive component system
              </Badge>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Every building block.
                  <br />
                  <span className="text-muted-foreground">
                    One consistent language.
                  </span>
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  Explore the Viora UI library through interactive examples. A
                  carefully crafted collection of accessible, composable
                  components for modern product experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button onClick={() => scrollToSection("showcase")}>
                  Explore components
                  <ArrowDown className="ml-2 size-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("catalog")}
                >
                  Browse the catalog
                </Button>
              </div>

              <div className="flex flex-wrap gap-7 pt-2">
                <div>
                  <p className="text-2xl font-semibold tabular-nums">63</p>
                  <p className="text-xs text-muted-foreground">Components</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tabular-nums">10</p>
                  <p className="text-xs text-muted-foreground">Categories</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">React 19</p>
                  <p className="text-xs text-muted-foreground">
                    Built for modern React
                  </p>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden border-primary/20 bg-card shadow-xl shadow-primary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardDescription>Component health</CardDescription>
                    <CardTitle className="mt-1 text-2xl">
                      Design system status
                    </CardTitle>
                  </div>
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Activity className="size-5" />
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Library coverage
                  </span>
                  <span className="font-medium">63 / 63</span>
                </div>
                <Progress value={100} />
                <Separator />

                <div className="grid grid-cols-2 gap-3">
                  {categoryCounts.slice(0, 4).map(({ category, count }) => (
                    <div
                      key={category}
                      className="rounded-xl bg-muted/60 p-3"
                    >
                      <p className="text-xl font-semibold tabular-nums">
                        {count}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {category}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-4 text-primary" />
                  All component files are represented in the catalog below.
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="showcase" className="scroll-mt-24 py-10">
            <SectionHeading
              eyebrow="Live playground"
              title="Try the components"
              description="Interact with real components from the library and see how they behave in context."
            />

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-5"
            >
              <TabsList className="flex h-auto flex-wrap">
                <TabsTrigger value="overview">Essentials</TabsTrigger>
                <TabsTrigger value="forms">Form controls</TabsTrigger>
                <TabsTrigger value="navigation">Navigation</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>

              <TabsContent
                value="overview"
                className="mt-0 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
              >
                <DemoCard
                  title="Buttons"
                  description="Clear hierarchy for primary and secondary actions."
                >
                  <div className="flex flex-wrap gap-2">
                    <Button>
                      Continue
                      <ArrowRight className="ml-1 size-4" />
                    </Button>
                    <Button variant="outline">Learn more</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Delete</Button>
                    <Button variant="link">Text link</Button>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center gap-2">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon" variant="outline">
                      <MoreHorizontal />
                    </Button>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Badges & status"
                  description="Compact labels for state, category and priority."
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge>New</Badge>
                    <Badge variant="secondary">In progress</Badge>
                    <Badge variant="outline">Draft</Badge>
                    <Badge variant="destructive">Overdue</Badge>
                    <Badge variant="ghost">Archived</Badge>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/80?img=12" />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Alex Morgan</p>
                      <p className="text-xs text-muted-foreground">
                        Product designer
                      </p>
                    </div>
                    <Badge className="ml-auto gap-1">
                      <span className="size-1.5 rounded-full bg-current" />
                      Online
                    </Badge>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Alerts"
                  description="Communicate important information with context."
                >
                  <div className="space-y-3">
                    <Alert>
                      <Info className="size-4" />
                      <AlertTitle>Heads up</AlertTitle>
                      <AlertDescription>
                        Your workspace is up to date and ready to use.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <ShieldCheck className="size-4" />
                      <AlertTitle>Action required</AlertTitle>
                      <AlertDescription>
                        Please review your security settings.
                      </AlertDescription>
                    </Alert>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Accordion"
                  description="Reveal details only when they are needed."
                >
                  <Accordion className="w-full" defaultValue="item-1">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Is the library accessible?
                      </AccordionTrigger>
                      <AccordionContent>
                        Components are built on accessible primitives and
                        include keyboard interaction and semantic structure.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Can components be customised?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. Use the component props and Tailwind classes to
                        adapt each component to your product.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </DemoCard>

                <DemoCard
                  title="Collapsible"
                  description="Show or hide supporting information."
                >
                  <Collapsible
                    open={detailsOpen}
                    onOpenChange={setDetailsOpen}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between rounded-xl border p-3">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <FileText className="size-4 text-muted-foreground" />
                        Release notes
                        <Badge variant="secondary">3 updates</Badge>
                      </div>
                      <CollapsibleTrigger
                        render={
                          <Button variant="ghost" size="sm">
                            {detailsOpen ? "Hide" : "Show"}
                            <ChevronDown className="ml-1 size-4" />
                          </Button>
                        }
                      />
                    </div>
                    <CollapsibleContent className="rounded-xl bg-muted/50 p-3 text-sm text-muted-foreground">
                      Improved keyboard navigation, refined input states and
                      updated component tokens.
                    </CollapsibleContent>
                  </Collapsible>
                </DemoCard>

                <DemoCard
                  title="Tooltip & popover"
                  description="Offer contextual help without cluttering the page."
                >
                  <div className="flex flex-wrap gap-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger
                          className="grid size-9 place-items-center rounded-xl border transition-colors hover:bg-muted"
                          aria-label="Help"
                        >
                          <CircleHelp className="size-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          Find help and documentation
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <Popover>
                      <PopoverTrigger className="rounded-xl border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
                        Quick details
                        <ChevronDown className="ml-2 inline size-4" />
                      </PopoverTrigger>
                      <PopoverContent className="space-y-2">
                        <p className="font-medium">Workspace details</p>
                        <p className="text-sm text-muted-foreground">
                          Your team has 8 active members and 2 pending
                          invitations.
                        </p>
                      </PopoverContent>
                    </Popover>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Aspect ratio"
                  description="Keep visual content inside a consistent frame."
                >
                  <AspectRatio
                    ratio={16 / 9}
                    className="overflow-hidden rounded-xl bg-muted"
                  >
                    <div className="flex size-full items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Layers3 className="size-5" />
                      16:9 media preview
                    </div>
                  </AspectRatio>
                </DemoCard>
              </TabsContent>

              <TabsContent
                value="forms"
                className="mt-0 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
              >
                <DemoCard
                  title="Text input & label"
                  description="A simple, clearly labelled text field."
                >
                  <div className="space-y-2">
                    <Label htmlFor="demo-email">Email address</Label>
                    <Input
                      id="demo-email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="name@company.com"
                    />
                    <p className="text-xs text-muted-foreground">
                      We will never share your email address.
                    </p>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Textarea"
                  description="Capture longer messages and descriptions."
                >
                  <div className="space-y-2">
                    <Label htmlFor="demo-message">Message</Label>
                    <Textarea
                      id="demo-message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      rows={3}
                    />
                    <p className="text-right text-xs text-muted-foreground">
                      {message.length} characters
                    </p>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Checkbox & switch"
                  description="Independent choices and on/off settings."
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="terms"
                        checked={termsAccepted}
                        onCheckedChange={(value) =>
                          setTermsAccepted(value === true)
                        }
                      />
                      <Label htmlFor="terms">
                        Accept the terms and conditions
                      </Label>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="marketing">Product updates</Label>
                        <p className="text-xs text-muted-foreground">
                          Receive occasional product news.
                        </p>
                      </div>
                      <Switch
                        id="marketing"
                        checked={marketingEnabled}
                        onCheckedChange={setMarketingEnabled}
                      />
                    </div>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Radio group"
                  description="Choose one option from a mutually exclusive set."
                >
                  <RadioGroup
                    value={selectedPlan}
                    onValueChange={setSelectedPlan}
                    className="gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="starter" id="starter" />
                      <Label htmlFor="starter">Starter</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="pro" id="pro" />
                      <Label htmlFor="pro">Professional</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="enterprise" id="enterprise" />
                      <Label htmlFor="enterprise">Enterprise</Label>
                    </div>
                  </RadioGroup>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Selected plan:{" "}
                    <span className="font-medium capitalize text-foreground">
                      {selectedPlan}
                    </span>
                  </p>
                </DemoCard>

                <DemoCard
                  title="Select"
                  description="Choose from a compact list of options."
                >
                  <div className="space-y-2">
                    <Label>Workspace region</Label>
                    <Select defaultValue="europe">
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="north-america">
                          North America
                        </SelectItem>
                        <SelectItem value="asia-pacific">
                          Asia Pacific
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Slider"
                  description="Adjust a numeric value within a defined range."
                >
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <Label>Volume</Label>
                      <span className="font-medium tabular-nums">
                        {volume[0]}%
                      </span>
                    </div>
                    <Slider
                      value={volume}
                      onValueChange={setVolume}
                      max={100}
                      step={1}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Quiet</span>
                      <span>Loud</span>
                    </div>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Calendar"
                  description="Select a date with a familiar calendar interface."
                  className="md:col-span-2 xl:col-span-1"
                >
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-xl border"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    Selected:{" "}
                    {selectedDate
                      ? selectedDate.toLocaleDateString("en-US", {
                          dateStyle: "long",
                        })
                      : "No date selected"}
                  </p>
                </DemoCard>

                <DemoCard
                  title="Button group"
                  description="Keep related actions visually connected."
                >
                  <ButtonGroup>
                    <Button variant="outline">
                      <ChevronLeft className="mr-1 size-4" />
                      Back
                    </Button>
                    <Button variant="outline">Save draft</Button>
                    <Button>
                      Publish
                      <ArrowUpRight className="ml-1 size-4" />
                    </Button>
                  </ButtonGroup>
                </DemoCard>
              </TabsContent>

              <TabsContent
                value="navigation"
                className="mt-0 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
              >
                <DemoCard
                  title="View selector"
                  description="Switch between related content views."
                >
                  <div className="rounded-xl border p-3">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={
                          selectedView === "grid" ? "secondary" : "ghost"
                        }
                        onClick={() => setSelectedView("grid")}
                      >
                        <LayoutGrid className="mr-1 size-4" />
                        Grid
                      </Button>
                      <Button
                        size="sm"
                        variant={
                          selectedView === "list" ? "secondary" : "ghost"
                        }
                        onClick={() => setSelectedView("list")}
                      >
                        <Menu className="mr-1 size-4" />
                        List
                      </Button>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Showing the{" "}
                      <span className="font-medium text-foreground">
                        {selectedView}
                      </span>{" "}
                      view.
                    </p>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Breadcrumb"
                  description="Make the current location easy to understand."
                >
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Projects</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Design system</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </DemoCard>

                <DemoCard
                  title="Pagination"
                  description="Navigate through a collection of records."
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Page {currentPage} of 5
                    </p>
                    <div className="flex gap-1">
                      <Button
                        size="icon"
                        variant="outline"
                        disabled={currentPage === 1}
                        onClick={() =>
                          setCurrentPage((page) => Math.max(1, page - 1))
                        }
                      >
                        <ChevronLeft />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        disabled={currentPage === 5}
                        onClick={() =>
                          setCurrentPage((page) => Math.min(5, page + 1))
                        }
                      >
                        <ChevronRight />
                      </Button>
                    </div>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Navigation links"
                  description="A lightweight application navigation pattern."
                >
                  <div className="flex flex-col gap-1">
                    {[
                      { label: "Overview", icon: LayoutGrid },
                      { label: "Team members", icon: Users },
                      { label: "Settings", icon: Settings2 },
                    ].map(({ label, icon: Icon }, index) => (
                      <button
                        key={label}
                        type="button"
                        onClick={() =>
                          setActiveCategory(
                            index === 0 ? "All components" : "Navigation",
                          )
                        }
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted ${
                          index === 0
                            ? "bg-muted font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        <Icon className="size-4" />
                        {label}
                        <ChevronRight className="ml-auto size-4" />
                      </button>
                    ))}
                  </div>
                </DemoCard>

                <DemoCard
                  title="Keyboard shortcuts"
                  description="Communicate efficient ways to navigate."
                >
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Open command menu</span>
                      <span className="flex gap-1">
                        <kbd className="rounded-md border bg-muted px-2 py-1 text-xs">
                          ⌘
                        </kbd>
                        <kbd className="rounded-md border bg-muted px-2 py-1 text-xs">
                          K
                        </kbd>
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Search</span>
                      <kbd className="rounded-md border bg-muted px-2 py-1 text-xs">
                        /
                      </kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Close dialog</span>
                      <kbd className="rounded-md border bg-muted px-2 py-1 text-xs">
                        Esc
                      </kbd>
                    </div>
                  </div>
                </DemoCard>
              </TabsContent>

              <TabsContent
                value="feedback"
                className="mt-0 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
              >
                <DemoCard
                  title="Progress"
                  description="Show the current state of a multi-step process."
                >
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Uploading assets</span>
                      <span className="font-medium tabular-nums">
                        {progress}%
                      </span>
                    </div>
                    <Progress value={progress} />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          setProgress((value) => Math.max(0, value - 10))
                        }
                      >
                        Decrease
                      </Button>
                      <Button
                        size="sm"
                        onClick={() =>
                          setProgress((value) => Math.min(100, value + 10))
                        }
                      >
                        Increase
                      </Button>
                    </div>
                  </div>
                </DemoCard>

                <DemoCard
                  title="Toast notification"
                  description="Confirm an action with brief feedback."
                >
                  <div className="space-y-3">
                    <Button onClick={() => setNotificationVisible(true)}>
                      <Bell className="mr-2 size-4" />
                      Show notification
                    </Button>

                    {notificationVisible && (
                      <Alert>
                        <CheckCircle2 className="size-4" />
                        <AlertTitle>Changes saved</AlertTitle>
                        <AlertDescription>
                          Your preferences have been updated successfully.
                        </AlertDescription>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute right-2 top-2"
                          onClick={() => setNotificationVisible(false)}
                          aria-label="Dismiss notification"
                        >
                          <X className="size-4" />
                        </Button>
                      </Alert>
                    )}
                  </div>
                </DemoCard>

                <DemoCard
                  title="Loading states"
                  description="Use skeletons and spinners to communicate progress."
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Loader2 className="size-4 animate-spin text-muted-foreground" />
                      <span className="text-sm">
                        Synchronising workspace…
                      </span>
                    </div>

                    <Separator />

                    <div className="flex items-center gap-3">
                      <div className="size-10 animate-pulse rounded-full bg-muted" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
                        <div className="h-2 w-1/2 animate-pulse rounded bg-muted" />
                      </div>
                    </div>
                  </div>
                </DemoCard>
              </TabsContent>
            </Tabs>
          </section>

          <section className="py-10">
            <SectionHeading
              eyebrow="Composition patterns"
              title="Components in context"
              description="Small interface patterns demonstrate how individual building blocks work together."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent activity</CardTitle>
                      <CardDescription>
                        Latest updates across your workspace
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      View all
                      <ArrowUpRight className="ml-1 size-3.5" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Member</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activityItems.map((item) => (
                        <TableRow key={item.name}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="size-7">
                                <AvatarFallback>
                                  {item.name
                                    .split(" ")
                                    .map((part) => part[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{item.name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {item.action}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                item.status === "Completed"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {item.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right text-muted-foreground">
                            {item.date}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Team members</CardTitle>
                  <CardDescription>
                    People working in this space
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {teamMembers.map((person) => (
                    <div
                      key={person.name}
                      className="flex items-center gap-3"
                    >
                      <Avatar>
                        <AvatarFallback>{person.initials}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {person.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {person.role}
                        </p>
                      </div>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Users className="mr-2 size-4" />
                    Manage team
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section id="catalog" className="scroll-mt-24 py-10">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Complete inventory"
                title="Component catalog"
                description="Search all components and filter by category to find the right building block."
              />

              <div className="mb-5 flex w-full flex-col gap-2 sm:flex-row md:max-w-md">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search components…"
                    className="pl-9"
                  />
                </div>

                <Select
                  value={activeCategory}
                  onValueChange={setActiveCategory}
                >
                  <SelectTrigger className="sm:w-48">
                    <Filter className="mr-2 size-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem value={category} key={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {filteredComponents.length}
                </span>{" "}
                components found
              </p>
              <p className="text-xs text-muted-foreground">
                Source: src/components/ui
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredComponents.map((component) => {
                const Icon = getCategoryIcon(component.category)

                return (
                  <a
                    href={`#component-${getComponentId(component.name)}`}
                    key={component.name}
                    className="group rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="grid size-9 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <Icon className="size-4" />
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>

                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold">
                        {component.name}
                      </h3>
                      <Badge variant="outline" className="text-[10px]">
                        {component.category}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {component.description}
                    </p>
                  </a>
                )
              })}
            </div>

            {filteredComponents.length === 0 && (
              <div className="rounded-xl border border-dashed py-14 text-center">
                <Search className="mx-auto mb-3 size-6 text-muted-foreground" />
                <p className="font-medium">No components found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try another search or category.
                </p>
                <Button variant="link" onClick={resetFilters}>
                  Clear filters
                </Button>
              </div>
            )}
          </section>

          <section className="py-10">
            <Card className="overflow-hidden border-primary/20 bg-muted/30">
              <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
                <div className="space-y-2">
                  <Badge variant="secondary">Built for product teams</Badge>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    A consistent foundation for every experience.
                  </h2>
                  <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                    Explore the source, reuse the components and build
                    interfaces that feel like they belong together.
                  </p>
                </div>

                <Button
                  onClick={() =>
                    window.open(
                      "https://github.com/viora-studio/template-preview/tree/master/src/components/ui",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Explore source files
                  <ArrowUpRight className="ml-2 size-4" />
                </Button>
              </div>
            </Card>
          </section>
        </main>

        <footer className="border-t">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© 2026 Viora Studio. UI component showcase.</p>
            <div className="flex items-center gap-4">
              <a
                className="hover:text-foreground"
                href="https://github.com/viora-studio/template-preview"
              >
                GitHub
              </a>
              <a
                className="hover:text-foreground"
                href="https://github.com/viora-studio"
              >
                Viora Studio
              </a>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="size-3.5 text-primary" />
                63 components catalogued
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
