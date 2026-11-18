import * as React from "react"

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Layers3,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
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

export type ComponentInfo = {
  id: string
  name: string
  category: string
}

type ComponentDetailProps = {
  component: ComponentInfo
  onNavigate: (path: string) => void
}

const categoryDescriptions: Record<string, string> = {
  Actions:
    "Give users a clear way to trigger an operation. Action components should make the result of an interaction obvious and keep related actions visually consistent.",
  "Data display":
    "Present information in a way that is easy to scan and understand. Use this component to add structure, context, and visual hierarchy to your content.",
  Feedback:
    "Communicate what is happening after a user action. Feedback components help users understand progress, success, warnings, and errors.",
  Forms:
    "Collect input in a predictable and accessible way. Pair form controls with labels, clear instructions, and useful validation messages.",
  Layout:
    "Organise content into clear sections and predictable structures. Layout components help build interfaces that remain consistent as they grow.",
  Messaging:
    "Display conversations and message content with a clear reading order and enough context to understand each interaction.",
  Navigation:
    "Help users understand where they are and move between related sections without losing context.",
  Overlays:
    "Show contextual content above the current interface. Keep overlays focused and provide an obvious way to close or dismiss them.",
  Utilities:
    "Handle supporting interface behaviour and presentation that does not fit into a single content or interaction category.",
}

const componentDescriptions: Record<string, string> = {
  accordion:
    "Organise related information into expandable sections. An accordion keeps a page compact while allowing users to reveal the details they need.",
  alert:
    "Bring important information to the user's attention without interrupting the current task. Use variants to distinguish neutral updates from critical messages.",
  avatar:
    "Represent a person, team, or account with an image or initials. Avatars work best when paired with a name or another clear identifier.",
  badge:
    "Show a short status, category, or attribute beside related content. Keep badge labels brief so they remain easy to scan.",
  breadcrumb:
    "Show the current location within a hierarchy and let users move back to parent sections.",
  button:
    "Trigger an action such as saving a form, opening a dialog, or moving to the next step. Use clear labels and reserve destructive styling for irreversible actions.",
  checkbox:
    "Let users select one or more independent options. Use a checkbox when several choices can be active at the same time.",
  input:
    "Collect a short value such as a name, email address, or search query. Always provide a visible label and an example when the expected format is not obvious.",
  popover:
    "Display small pieces of contextual content next to a trigger. Use a popover for lightweight interactions that do not need a full dialog.",
  progress:
    "Show how much of a task has been completed. Include a label or value when users need to understand what the progress refers to.",
  "radio-group":
    "Let users choose exactly one option from a small set. Use labels that make each choice easy to compare.",
  select:
    "Let users choose one value from a predefined list when showing every option inline would take too much space.",
  slider:
    "Allow users to select a numeric value or range from a defined interval. Display the current value when precision matters.",
  switch:
    "Represent an immediate on or off setting. Use a clear label that explains what changes when the switch is enabled.",
  table:
    "Present structured information in rows and columns. Keep column labels clear and align values consistently to make comparisons easier.",
  tabs:
    "Separate related content into peer sections while keeping the surrounding page in place. Use short labels and a clear active state.",
  textarea:
    "Collect longer text such as comments, descriptions, or messages. Set a useful initial size and provide guidance about expected content.",
  tooltip:
    "Reveal a short explanation when users point to or focus an interface element. Keep tooltip content supplementary rather than essential.",
}

const componentSnippets: Record<string, string> = {
  accordion: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Example() {
  return (
    <Accordion defaultValue={["account"]}>
      <AccordionItem value="account">
        <AccordionTrigger>Account settings</AccordionTrigger>
        <AccordionContent>
          Manage your account details and preferences.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
  alert: `import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function Example() {
  return (
    <Alert>
      <AlertTitle>Changes saved</AlertTitle>
      <AlertDescription>
        Your preferences have been updated.
      </AlertDescription>
    </Alert>
  )
}`,
  avatar: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Example() {
  return (
    <Avatar>
      <AvatarImage src="/images/profile.png" alt="Profile" />
      <AvatarFallback>RF</AvatarFallback>
    </Avatar>
  )
}`,
  badge: `import { Badge } from "@/components/ui/badge"

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <Badge>New</Badge>
      <Badge variant="secondary">Draft</Badge>
      <Badge variant="outline">Archived</Badge>
    </div>
  )
}`,
  breadcrumb: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Settings</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  button: `import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="flex gap-2">
      <Button>Save changes</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  )
}`,
  checkbox: `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="updates" />
      <Label htmlFor="updates">Receive product updates</Label>
    </div>
  )
}`,
  input: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Example() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="email">Email address</Label>
      <Input
        id="email"
        type="email"
        placeholder="name@example.com"
      />
    </div>
  )
}`,
  popover: `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open details
      </PopoverTrigger>
      <PopoverContent>
        Additional information goes here.
      </PopoverContent>
    </Popover>
  )
}`,
  progress: `import { Progress } from "@/components/ui/progress"

export function Example() {
  const value = 64

  return (
    <div className="grid gap-2">
      <div className="flex justify-between text-sm">
        <span>Uploading files</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  )
}`,
  "radio-group": `import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function Example() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="comfortable" />
        <Label htmlFor="comfortable">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="compact" />
        <Label htmlFor="compact">Compact</Label>
      </div>
    </RadioGroup>
  )
}`,
  select: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Example() {
  return (
    <Select defaultValue="personal">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Choose a workspace" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="personal">Personal</SelectItem>
        <SelectItem value="team">Team</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
  slider: `import { Slider } from "@/components/ui/slider"

export function Example() {
  return <Slider defaultValue={[40]} max={100} step={1} />
}`,
  switch: `import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function Example() {
  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="notifications">Notifications</Label>
      <Switch id="notifications" defaultChecked />
    </div>
  )
}`,
  table: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Website redesign</TableCell>
          <TableCell>In progress</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
  tabs: `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Example() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        Overview content goes here.
      </TabsContent>
      <TabsContent value="activity">
        Recent activity goes here.
      </TabsContent>
    </Tabs>
  )
}`,
  textarea: `import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Example() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        placeholder="Write your message..."
        rows={4}
      />
    </div>
  )
}`,
  tooltip: `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Save
        </TooltipTrigger>
        <TooltipContent>
          Save your current changes
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,
}

const exportNames: Record<string, string> = {
  "alert-dialog": "AlertDialog",
  "aspect-ratio": "AspectRatio",
  attachment: "Attachment",
  "button-group": "ButtonGroup",
  "code-block": "CodeBlock",
  "context-menu": "ContextMenu",
  "input-group": "InputGroup",
  "input-otp": "InputOTP",
  "message-scroller": "MessageScroller",
  "native-select": "NativeSelect",
  "navigation-menu": "NavigationMenu",
  "radio-group": "RadioGroup",
  "scroll-area": "ScrollArea",
  "toggle-group": "ToggleGroup",
}

function toExportName(id: string) {
  return (
    exportNames[id] ??
    id
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("")
  )
}

function getSnippet(component: ComponentInfo) {
  if (componentSnippets[component.id]) {
    return componentSnippets[component.id]
  }

  const exportName = toExportName(component.id)

  return `import { ${exportName} } from "@/components/ui/${component.id}"

export function Example() {
  return (
    <${exportName} />
  )
}`
}

function ComponentPreview({ id }: { id: string }) {
  const [checked, setChecked] = React.useState(true)
  const [enabled, setEnabled] = React.useState(false)
  const [sliderValue, setSliderValue] = React.useState([64])
  const [progress, setProgress] = React.useState(64)

  switch (id) {
    case "accordion":
      return (
        <Accordion defaultValue={["details"]} className="w-full max-w-lg">
          <AccordionItem value="details">
            <AccordionTrigger>What is this component?</AccordionTrigger>
            <AccordionContent>
              It keeps related content organised and reveals details on demand.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="usage">
            <AccordionTrigger>When should I use it?</AccordionTrigger>
            <AccordionContent>
              Use it when users may only need some of the information on the page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
    case "alert":
      return (
        <Alert className="max-w-lg">
          <AlertTitle>Your changes are saved</AlertTitle>
          <AlertDescription>
            The latest updates are now available in your workspace.
          </AlertDescription>
        </Alert>
      )
    case "aspect-ratio":
      return (
        <AspectRatio
          ratio={16 / 9}
          className="grid max-w-lg place-items-center rounded-xl bg-muted text-sm text-muted-foreground"
        >
          16:9 content area
        </AspectRatio>
      )
    case "avatar":
      return (
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/119365213"
              alt="Rodrigo Ferreira"
            />
            <AvatarFallback>RF</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Rodrigo Ferreira</p>
            <p className="text-xs text-muted-foreground">Software Developer</p>
          </div>
        </div>
      )
    case "badge":
      return (
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      )
    case "breadcrumb":
      return (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Workspace</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Design system</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )
    case "button":
      return (
        <div className="flex flex-wrap gap-2">
          <Button>Save changes</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      )
    case "checkbox":
      return (
        <div className="flex items-center gap-2">
          <Checkbox
            id="detail-checkbox"
            checked={checked}
            onCheckedChange={(value) => setChecked(value === true)}
          />
          <Label htmlFor="detail-checkbox">Send me product updates</Label>
        </div>
      )
    case "input":
      return (
        <div className="grid w-full max-w-sm gap-2">
          <Label htmlFor="detail-input">Email address</Label>
          <Input id="detail-input" type="email" placeholder="name@example.com" />
        </div>
      )
    case "popover":
      return (
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>
            Open popover
          </PopoverTrigger>
          <PopoverContent>
            A small surface for contextual actions and information.
          </PopoverContent>
        </Popover>
      )
    case "progress":
      return (
        <div className="w-full max-w-sm space-y-3">
          <div className="flex justify-between text-sm">
            <span>Upload progress</span>
            <span className="text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} />
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
              Less
            </Button>
            <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
              More
            </Button>
          </div>
        </div>
      )
    case "radio-group":
      return (
        <RadioGroup defaultValue="comfortable" className="gap-3">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="detail-comfortable" />
            <Label htmlFor="detail-comfortable">Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="compact" id="detail-compact" />
            <Label htmlFor="detail-compact">Compact</Label>
          </div>
        </RadioGroup>
      )
    case "select":
      return (
        <Select defaultValue="personal">
          <SelectTrigger className="w-full max-w-xs">
            <SelectValue placeholder="Choose a workspace" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">Personal workspace</SelectItem>
            <SelectItem value="team">Team workspace</SelectItem>
            <SelectItem value="client">Client workspace</SelectItem>
          </SelectContent>
        </Select>
      )
    case "slider":
      return (
        <div className="w-full max-w-sm space-y-3">
          <div className="flex justify-between text-sm">
            <Label>Volume</Label>
            <span className="text-muted-foreground">{sliderValue[0]}%</span>
          </div>
          <Slider
            value={sliderValue}
            onValueChange={(value) =>
              setSliderValue(typeof value === "number" ? [value] : [...value])
            }
            max={100}
            step={1}
          />
        </div>
      )
    case "switch":
      return (
        <div className="flex w-full max-w-sm items-center justify-between">
          <Label htmlFor="detail-switch">Enable notifications</Label>
          <Switch
            id="detail-switch"
            checked={enabled}
            onCheckedChange={setEnabled}
          />
        </div>
      )
    case "table":
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Website redesign</TableCell>
              <TableCell><Badge variant="secondary">Active</Badge></TableCell>
              <TableCell className="text-right">4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mobile app</TableCell>
              <TableCell><Badge variant="outline">Planning</Badge></TableCell>
              <TableCell className="text-right">2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
    case "tabs":
      return (
        <Tabs defaultValue="overview" className="w-full max-w-lg">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="py-4 text-sm text-muted-foreground">
            A summary of the current workspace.
          </TabsContent>
          <TabsContent value="activity" className="py-4 text-sm text-muted-foreground">
            Recent changes and activity.
          </TabsContent>
          <TabsContent value="settings" className="py-4 text-sm text-muted-foreground">
            Workspace preferences.
          </TabsContent>
        </Tabs>
      )
    case "textarea":
      return (
        <div className="grid w-full max-w-sm gap-2">
          <Label htmlFor="detail-textarea">Project notes</Label>
          <Textarea id="detail-textarea" placeholder="Add a few details..." rows={4} />
        </div>
      )
    case "tooltip":
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Hover or focus me
            </TooltipTrigger>
            <TooltipContent>Helpful context appears here.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    case "separator":
      return (
        <div className="w-full max-w-sm space-y-3">
          <p className="text-sm">Account details</p>
          <Separator />
          <p className="text-sm text-muted-foreground">Security preferences</p>
        </div>
      )
    case "card":
      return (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Project overview</CardTitle>
            <CardDescription>A quick summary of your workspace.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Completion</span>
              <Badge variant="secondary">64%</Badge>
            </div>
            <Progress value={64} className="mt-3" />
          </CardContent>
        </Card>
      )
    default:
      return (
        <Card className="w-full max-w-md border-dashed shadow-none">
          <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="grid size-11 place-items-center rounded-xl bg-muted">
              <Layers3 className="size-5 text-muted-foreground" />
            </span>
            <div className="space-y-1">
              <p className="text-sm font-medium">{id.split("-").join(" ")} example</p>
              <p className="max-w-xs text-xs text-muted-foreground">
                Use the implementation example below as a starting point for this component.
              </p>
            </div>
            <Badge variant="outline">Component preview</Badge>
          </CardContent>
        </Card>
      )
  }
}

export default function ComponentDetail({
  component,
  onNavigate,
}: ComponentDetailProps) {
  const [copied, setCopied] = React.useState(false)
  const snippet = getSnippet(component)
  const description =
    componentDescriptions[component.id] ??
    categoryDescriptions[component.category] ??
    "A reusable interface building block from the Viora component library."

  async function copySnippet() {
    try {
      await navigator.clipboard.writeText(snippet)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Layers3 className="size-4" />
            </span>
            <span>Viora</span>
            <span className="font-normal text-muted-foreground">/ UI</span>
          </button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => onNavigate("/")}>
              <ArrowLeft className="mr-2 size-4" />
              All components
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.open(
                  "https://github.com/viora-studio/template-preview",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <Code2 className="mr-2 size-4" />
              Source
              <ArrowUpRight className="ml-1 size-3.5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-5 py-9 sm:py-12">
        <div className="space-y-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate("/")
                  }}
                >
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{component.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{component.category}</Badge>
              <span className="text-xs text-muted-foreground">Viora UI</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {component.name}
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              {description}
            </p>
          </div>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Live preview</h2>
              <p className="text-sm text-muted-foreground">
                Try the component and explore its behaviour.
              </p>
            </div>
            <Badge variant="outline">Interactive</Badge>
          </div>
          <div className="flex min-h-64 items-center justify-center rounded-2xl border bg-card p-6 sm:p-10">
            <div className="flex w-full items-center justify-center">
              <ComponentPreview id={component.id} />
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1fr_280px]">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Implementation</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Import the component and compose it with your application content.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border bg-card">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center gap-2 text-sm">
                  <Code2 className="size-4 text-muted-foreground" />
                  <span className="font-medium">example.tsx</span>
                </div>
                <Button variant="outline" size="sm" onClick={copySnippet}>
                  {copied ? <Check className="mr-2 size-4" /> : <Copy className="mr-2 size-4" />}
                  {copied ? "Copied" : "Copy code"}
                </Button>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-6 sm:p-5 sm:text-sm">
                <code>{snippet}</code>
              </pre>
            </div>
          </div>

          <aside className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Component details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">{component.category}</span>
                </div>
                <Separator />
                <div className="flex justify-between gap-3">
                  <span className="text-muted-foreground">Component</span>
                  <code className="text-xs">{component.id}</code>
                </div>
                <Separator />
                <div className="space-y-1">
                  <p className="text-muted-foreground">Source location</p>
                  <code className="break-all text-xs">src/components/ui/{component.id}.tsx</code>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Implementation tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs leading-5 text-muted-foreground">
                <p>Use a visible label whenever the component collects input.</p>
                <p>Keep interaction states clear and provide feedback after important actions.</p>
                <p>Prefer the component's built-in variants before adding custom styles.</p>
              </CardContent>
            </Card>
          </aside>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-6">
          <Button variant="outline" onClick={() => onNavigate("/")}>
            <ArrowLeft className="mr-2 size-4" />
            Back to all components
          </Button>
          <a
            href="https://github.com/viora-studio/template-preview/tree/master/src/components/ui"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Browse component source
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <footer className="border-t pt-5 text-xs text-muted-foreground">
          Viora Studio · UI Components
        </footer>
      </main>
    </div>
  )
}
