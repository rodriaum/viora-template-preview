import * as React from "react"

import {
  Layers3,
  Search,
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
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "@/components/ui/sidebar"
import { Calendar } from "@/components/ui/calendar"
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


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
} from "@/components/ui/bubble"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts"
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import {
  Kbd,
  KbdGroup,
} from "@/components/ui/kbd"
import {
  Marker,
  MarkerContent,
} from "@/components/ui/marker"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Questionnaire,
} from "@/components/ui/questionnaire"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import {
  toast,
  Toaster,
} from "@/components/ui/toast"
import { Toggle } from "@/components/ui/toggle"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  FileText,
  Plus,
  Search as SearchIcon,
  Settings,
  Share2,
  Trash2,
} from "lucide-react"

export type ComponentInfo = {
  id: string
  name: string
  category: string
}

type ComponentDetailProps = {
  component: ComponentInfo
  components: ComponentInfo[]
  onNavigate: (path: string) => void
  basePath: string
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
  "aspect-ratio":
    "Reserve a predictable space for media such as images and video. Aspect ratio containers prevent content from jumping while assets load.",
  calendar:
    "Let users browse dates and select a day or a range. Calendars work well for scheduling, booking, and date-based filters.",
  card:
    "Group related information and actions into a self-contained surface. Cards help users scan dashboards, settings, and collections of content.",
  separator:
    "Create a subtle visual break between related groups. Use separators to improve structure without adding unnecessary visual weight.",
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

function ComponentPreview({ id }: { id: string }) {
  const [checked, setChecked] = React.useState(true)
  const [enabled, setEnabled] = React.useState(false)
  const [sliderValue, setSliderValue] = React.useState([64])
  const [progress, setProgress] = React.useState(64)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [sheetOpen, setSheetOpen] = React.useState(false)
  const [selectedPage, setSelectedPage] = React.useState(2)
  const [selectedView, setSelectedView] = React.useState("grid")
  const [otp, setOtp] = React.useState("123")
  const [detailsOpen, setDetailsOpen] = React.useState(true)

  const chartConfig = {
    visitors: {
      label: "Visitors",
      color: "var(--chart-1)",
    },
  }

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

    case "alert-dialog":
      return (
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="destructive" />}>
            Delete project
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this project?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. All project data will be permanently
                removed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">
                Delete project
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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

    case "attachment":
      return (
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Attachment state="done">
            <AttachmentMedia>
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>project-brief.pdf</AttachmentTitle>
              <AttachmentDescription>PDF document · 2.4 MB</AttachmentDescription>
            </AttachmentContent>
            <Badge variant="secondary">Ready</Badge>
          </Attachment>

          <Attachment state="uploading">
            <AttachmentMedia>
              <Spinner />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>design-assets.zip</AttachmentTitle>
              <AttachmentDescription>Uploading · 68%</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </div>
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

    case "bubble":
      return (
        <BubbleGroup className="w-full max-w-md">
          <Bubble align="start" variant="secondary">
            <BubbleContent>
              Hey! Have you reviewed the latest design?
            </BubbleContent>
          </Bubble>
          <Bubble align="end">
            <BubbleContent>
              Yes! Looks great. I left a few comments.
            </BubbleContent>
          </Bubble>
          <Bubble align="start" variant="muted">
            <BubbleContent>Perfect, thanks!</BubbleContent>
          </Bubble>
        </BubbleGroup>
      )

    case "button-group":
      return (
        <div className="flex flex-col gap-3">
          <ButtonGroup>
            <Button variant="outline" size="sm">
              <ChevronLeft />
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight />
            </Button>
          </ButtonGroup>

          <ButtonGroup orientation="vertical">
            <Button variant="outline" size="sm">Edit</Button>
            <Button variant="outline" size="sm">Duplicate</Button>
            <Button variant="outline" size="sm">Archive</Button>
          </ButtonGroup>
        </div>
      )

    case "button":
      return (
        <div className="flex flex-wrap gap-2">
          <Button>Save changes</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="secondary-destructive">Remove</Button>
        </div>
      )

    case "calendar":
      return (
        <div className="rounded-xl border p-3">
          <Calendar mode="single" />
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

    case "carousel":
      return (
        <Carousel className="w-full max-w-sm">
          <CarouselContent>
            {["Design system", "Mobile application", "Website refresh"].map(
              (title, index) => (
                <CarouselItem key={title}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>Project {index + 1} of 3</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid h-24 place-items-center rounded-xl bg-muted text-sm text-muted-foreground">
                        Slide {index + 1}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )

    case "chart":
      return (
        <div className="w-full max-w-lg space-y-2">
          <div>
            <p className="text-sm font-medium">Visitors</p>
            <p className="text-xs text-muted-foreground">Weekly activity</p>
          </div>
          <ChartContainer config={chartConfig} className="h-52 w-full">
            <AreaChart
              data={[
                { day: "Mon", visitors: 24 },
                { day: "Tue", visitors: 38 },
                { day: "Wed", visitors: 31 },
                { day: "Thu", visitors: 52 },
                { day: "Fri", visitors: 45 },
                { day: "Sat", visitors: 68 },
                { day: "Sun", visitors: 59 },
              ]}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                dataKey="visitors"
                type="monotone"
                stroke="var(--color-visitors)"
                fill="var(--color-visitors)"
                fillOpacity={0.18}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
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

    case "code-block":
      return (
        <CodeBlock className="w-full max-w-lg">
          <CodeBlockHeader>
            <CodeBlockTitle>hello.ts</CodeBlockTitle>
            <CodeBlockCopyButton value={'const greeting = "Hello, Viora!"'} />
          </CodeBlockHeader>
          <CodeBlockContent lineNumbers>
            const greeting = "Hello, Viora!"
            {"\n"}console.log(greeting)
          </CodeBlockContent>
        </CodeBlock>
      )

    case "collapsible":
      return (
        <Collapsible
          open={detailsOpen}
          onOpenChange={setDetailsOpen}
          className="w-full max-w-sm space-y-3"
        >
          <div className="flex items-center justify-between rounded-xl border p-3">
            <div className="text-sm font-medium">Release notes</div>
            <CollapsibleTrigger
              render={
                <Button variant="ghost" size="sm">
                  {detailsOpen ? "Hide" : "Show"}
                  <ChevronDown className="ml-1 size-4" />
                </Button>
              }
            />
          </div>
          <CollapsibleContent className="rounded-xl bg-muted p-3 text-sm text-muted-foreground">
            Updated components and refined interaction states.
          </CollapsibleContent>
        </Collapsible>
      )

    case "combobox":
      return (
        <Combobox
          items={[
            "Amsterdam",
            "Berlin",
            "Lisbon",
            "London",
            "Paris",
            "Rome",
          ]}
        >
          <ComboboxInput placeholder="Search for a city..." />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxItem value="Amsterdam">Amsterdam</ComboboxItem>
              <ComboboxItem value="Berlin">Berlin</ComboboxItem>
              <ComboboxItem value="Lisbon">Lisbon</ComboboxItem>
              <ComboboxItem value="London">London</ComboboxItem>
              <ComboboxItem value="Paris">Paris</ComboboxItem>
              <ComboboxItem value="Rome">Rome</ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      )

    case "command":
      return (
        <Command className="w-full max-w-sm border">
          <CommandInput placeholder="Search commands..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem><SearchIcon /> Search files</CommandItem>
              <CommandItem><Settings /> Settings</CommandItem>
              <CommandItem><Plus /> Create a project</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      )

    case "context-menu":
      return (
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="grid h-32 w-full max-w-sm place-items-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground">
              Right click here to open the context menu
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem><FileText /> Open</ContextMenuItem>
            <ContextMenuItem><Copy /> Copy</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <Trash2 /> Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )

    case "dialog":
      return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger render={<Button variant="outline" />}>
            Open dialog
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share project</DialogTitle>
              <DialogDescription>
                Invite people to collaborate on this project.
              </DialogDescription>
            </DialogHeader>
            <Input placeholder="name@example.com" />
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setDialogOpen(false)}>
                Send invitation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )

    case "direction":
      return (
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div dir="ltr" className="rounded-lg border p-3">
            Left to right <span className="ml-2">→</span>
          </div>
          <div dir="rtl" className="rounded-lg border p-3">
            Right to left <span className="mr-2">←</span>
          </div>
        </div>
      )

    case "drawer":
      return (
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger render={<Button variant="outline" />}>
            Open drawer
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Quick settings</DrawerTitle>
              <DrawerDescription>
                Manage your workspace preferences.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-6 pb-4 text-sm text-muted-foreground">
              Your settings are saved automatically.
            </div>
            <DrawerFooter>
              <Button onClick={() => setDrawerOpen(false)}>Done</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )

    case "dropdown-menu":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Open menu <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
            <DropdownMenuItem><Share2 /> Share</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <Trash2 /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

    case "empty":
      return (
        <Empty className="max-w-md">
          <EmptyHeader>
            <EmptyMedia variant="icon"><SearchIcon /></EmptyMedia>
            <EmptyTitle>No projects yet</EmptyTitle>
            <EmptyDescription>
              Create your first project to start organising your work.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button><Plus /> Create project</Button>
          </EmptyContent>
        </Empty>
      )

    case "field":
      return (
        <FieldSet className="w-full max-w-sm">
          <FieldLegend>Profile details</FieldLegend>
          <Field>
            <FieldLabel htmlFor="field-name">Full name</FieldLabel>
            <Input id="field-name" placeholder="Alex Morgan" />
            <FieldDescription>
              Your name is visible to your team.
            </FieldDescription>
          </Field>
        </FieldSet>
      )

    case "hover-card":
      return (
        <HoverCard>
          <HoverCardTrigger render={<Button variant="link" className="px-0" />}>
            @rodriaum
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex items-center gap-3">
              <Avatar><AvatarFallback>RF</AvatarFallback></Avatar>
              <div>
                <p className="font-medium">Rodrigo Ferreira</p>
                <p className="text-xs text-muted-foreground">@rodriaum</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Software developer building useful products.
            </p>
          </HoverCardContent>
        </HoverCard>
      )

    case "input-group":
      return (
        <InputGroup className="max-w-sm">
          <InputGroupAddon><SearchIcon /></InputGroupAddon>
          <InputGroupInput placeholder="Search projects..." />
          <InputGroupAddon align="inline-end">
            <KbdGroup><Kbd>Ctrl</Kbd><Kbd>K</Kbd></KbdGroup>
          </InputGroupAddon>
        </InputGroup>
      )

    case "input-otp":
      return (
        <div className="space-y-3">
          <Label>Verification code</Label>
          <InputOTP maxLength={6} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-xs text-muted-foreground">
            Enter the six digit code sent to your email.
          </p>
        </div>
      )

    case "input":
      return (
        <div className="grid w-full max-w-sm gap-2">
          <Label htmlFor="detail-input">Email address</Label>
          <Input id="detail-input" type="email" placeholder="name@example.com" />
        </div>
      )

    case "item":
      return (
        <div className="w-full max-w-sm">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <Avatar><AvatarFallback>AM</AvatarFallback></Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Alex Morgan</ItemTitle>
              <ItemDescription>Product Designer</ItemDescription>
            </ItemContent>
            <Badge variant="secondary">Online</Badge>
          </Item>
        </div>
      )

    case "kbd":
      return (
        <div className="flex items-center gap-3 text-sm">
          <span>Open command menu</span>
          <KbdGroup><Kbd>Ctrl</Kbd><Kbd>K</Kbd></KbdGroup>
        </div>
      )

    case "label":
      return (
        <div className="grid w-full max-w-sm gap-2">
          <Label htmlFor="detail-label">Workspace name</Label>
          <Input id="detail-label" defaultValue="Viora Studio" />
        </div>
      )

    case "marker":
      return (
        <div className="w-full max-w-sm space-y-4">
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerContent>New activity</MarkerContent>
          </Marker>
        </div>
      )

    case "menubar":
      return (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New project</MenubarItem>
              <MenubarItem>Open...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Export</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Zoom in</MenubarItem>
              <MenubarItem>Zoom out</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )

    case "message-scroller":
      return (
        <div className="h-64 w-full max-w-sm overflow-hidden rounded-xl border">
          <MessageScrollerProvider>
            <MessageScroller className="h-full">
              <MessageScrollerViewport>
                <MessageScrollerContent className="gap-3 p-3">
                  <MessageScrollerItem>
                    <MessageGroup>
                      <Message>
                        <MessageAvatar>
                          <Avatar className="size-7">
                            <AvatarFallback>AM</AvatarFallback>
                          </Avatar>
                        </MessageAvatar>
                        <MessageContent>
                          <MessageHeader>Alex · 10:42</MessageHeader>
                          <Bubble variant="secondary">
                            <BubbleContent>Are we still meeting today?</BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                      <Message align="end">
                        <MessageContent>
                          <MessageHeader>You · 10:43</MessageHeader>
                          <Bubble>
                            <BubbleContent>Yes, see you at 14:00!</BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageGroup>
                  </MessageScrollerItem>
                </MessageScrollerContent>
              </MessageScrollerViewport>
            </MessageScroller>
          </MessageScrollerProvider>
        </div>
      )

    case "message":
      return (
        <MessageGroup className="w-full max-w-md">
          <Message>
            <MessageAvatar>
              <Avatar className="size-8"><AvatarFallback>AM</AvatarFallback></Avatar>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>Alex Morgan · 10:42</MessageHeader>
              <Bubble variant="secondary">
                <BubbleContent>Could you review the latest changes?</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message align="end">
            <MessageContent>
              <MessageHeader>You · 10:44</MessageHeader>
              <Bubble>
                <BubbleContent>Absolutely. I will take a look now.</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </MessageGroup>
      )

    case "native-select":
      return (
        <div className="grid w-full max-w-xs gap-2">
          <Label htmlFor="region-select">Region</Label>
          <NativeSelect id="region-select" defaultValue="eu">
            <NativeSelectOption value="eu">Europe</NativeSelectOption>
            <NativeSelectOption value="na">North America</NativeSelectOption>
            <NativeSelectOption value="apac">Asia Pacific</NativeSelectOption>
          </NativeSelect>
        </div>
      )

    case "navigation-menu":
      return (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-64 gap-2 p-3">
                  <NavigationMenuLink href="#">Components</NavigationMenuLink>
                  <NavigationMenuLink href="#">Templates</NavigationMenuLink>
                  <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">About</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )

    case "pagination":
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  setSelectedPage((page) => Math.max(1, page - 1))
                }}
              />
            </PaginationItem>
            {[1, 2, 3].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={page === selectedPage}
                  onClick={(event) => {
                    event.preventDefault()
                    setSelectedPage(page)
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  setSelectedPage((page) => Math.min(3, page + 1))
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
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
            <Button
              size="sm"
              variant="outline"
              onClick={() => setProgress((value) => Math.max(0, value - 10))}
            >
              Less
            </Button>
            <Button
              size="sm"
              onClick={() => setProgress((value) => Math.min(100, value + 10))}
            >
              More
            </Button>
          </div>
        </div>
      )

    case "questionnaire":
      return (
        <Questionnaire className="w-full max-w-md">
          <div className="space-y-4">
            <div>
              <p className="font-medium">Choose your workspace plan</p>
              <p className="text-sm text-muted-foreground">
                You can change your plan at any time.
              </p>
            </div>
            <RadioGroup defaultValue="starter" className="gap-3">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="starter" id="plan-starter" />
                <Label htmlFor="plan-starter">Starter · Free</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="pro" id="plan-pro" />
                <Label htmlFor="plan-pro">Professional · €12/month</Label>
              </div>
            </RadioGroup>
            <Button className="w-full">Continue</Button>
          </div>
        </Questionnaire>
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

    case "resizable":
      return (
        <ResizablePanelGroup
          orientation="horizontal"
          className="h-48 w-full max-w-lg overflow-hidden rounded-xl border"
        >
          <ResizablePanel defaultSize={50} minSize={20}>
            <div className="grid h-full place-items-center bg-muted/40 p-3 text-sm">
              Main panel
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={20}>
            <div className="grid h-full place-items-center p-3 text-sm">
              Side panel
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      )

    case "scroll-area":
      return (
        <ScrollArea className="h-48 w-full max-w-sm rounded-xl border p-4">
          <div className="space-y-4">
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} className="border-b pb-3">
                <p className="text-sm font-medium">Activity item {index + 1}</p>
                <p className="text-xs text-muted-foreground">
                  A short description of this activity entry.
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
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

    case "separator":
      return (
        <div className="w-full max-w-sm space-y-3">
          <p className="text-sm">Account details</p>
          <Separator />
          <p className="text-sm text-muted-foreground">Security preferences</p>
        </div>
      )

    case "sheet":
      return (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger render={<Button variant="outline" />}>
            Open sheet
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>
                Choose which updates you want to receive.
              </SheetDescription>
            </SheetHeader>
            <div className="flex items-center justify-between px-6">
              <Label htmlFor="sheet-switch">Product updates</Label>
              <Switch id="sheet-switch" defaultChecked />
            </div>
          </SheetContent>
        </Sheet>
      )

    case "sidebar":
      return (
        <div className="flex h-56 w-full max-w-md overflow-hidden rounded-xl border">
          <div className="w-40 border-r bg-sidebar p-3">
            <p className="mb-3 text-xs font-semibold text-muted-foreground">
              WORKSPACE
            </p>
            <div className="space-y-1 text-sm">
              <div className="rounded-lg bg-sidebar-accent px-2 py-1.5">
                Overview
              </div>
              <div className="px-2 py-1.5 text-muted-foreground">Projects</div>
              <div className="px-2 py-1.5 text-muted-foreground">Settings</div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <p className="text-sm font-medium">Overview</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Your workspace at a glance.
            </p>
          </div>
        </div>
      )

    case "skeleton":
      return (
        <div className="w-full max-w-sm space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-2/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-28 w-full" />
        </div>
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

    case "spinner":
      return (
        <div className="flex items-center gap-4">
          <Spinner className="size-5" />
          <Spinner className="size-7 text-primary" />
          <Spinner className="size-10 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Loading your workspace…
          </span>
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

    case "toast":
      return (
        <div className="space-y-3">
          <Toaster />
          <Button
            onClick={() =>
              toast.add({
                title: "Changes saved",
                description: "Your project is up to date.",
                type: "success",
              })
            }
          >
            Show toast notification
          </Button>
          <p className="text-xs text-muted-foreground">
            Click to display a live notification.
          </p>
        </div>
      )

    case "toggle-group":
      return (
        <ToggleGroup
          type="single"
          value={selectedView}
          onValueChange={(value) => value && setSelectedView(value)}
          variant="outline"
        >
          <ToggleGroupItem value="grid" aria-label="Grid view">Grid</ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">List</ToggleGroupItem>
          <ToggleGroupItem value="compact" aria-label="Compact view">Compact</ToggleGroupItem>
        </ToggleGroup>
      )

    case "toggle":
      return (
        <Toggle
          pressed={checked}
          onPressedChange={setChecked}
          variant="outline"
        >
          <Check className="mr-2" />
          {checked ? "Saved" : "Save"}
        </Toggle>
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

    case "trace":
      return (
        <Trace className="w-full max-w-md">
          <TraceCollapsible defaultOpen>
            <TraceCollapsibleTrigger>
              <TraceLine status="running">
                <TraceTitle>Build application</TraceTitle>
                <TraceDescription>2.4s</TraceDescription>
              </TraceLine>
            </TraceCollapsibleTrigger>
            <TraceCollapsibleContent>
              <div className="space-y-2 text-xs">
                <TraceLine>
                  <TraceTitle>Install dependencies</TraceTitle>
                  <TraceDescription>0.8s</TraceDescription>
                </TraceLine>
                <TraceLine>
                  <TraceTitle>Compile TypeScript</TraceTitle>
                  <TraceDescription>1.1s</TraceDescription>
                </TraceLine>
              </div>
            </TraceCollapsibleContent>
          </TraceCollapsible>
          <TraceLine>
            <TraceTitle>Deploy preview</TraceTitle>
            <Badge variant="secondary">Complete</Badge>
          </TraceLine>
        </Trace>
      )

    default:
      return (
        <Alert className="max-w-lg">
          <AlertTitle>Preview not found</AlertTitle>
          <AlertDescription>
            There is no preview registered for this component yet.
          </AlertDescription>
        </Alert>
      )
  }
}
export default function ComponentDetail({
  component,
  components,
  onNavigate,
  basePath,
}: ComponentDetailProps) {
  const [componentQuery, setComponentQuery] = React.useState("")
  const description =
    componentDescriptions[component.id] ??
    categoryDescriptions[component.category] ??
    "A reusable interface building block from the Viora component library."

  const filteredComponents = components.filter((item) =>
    item.name.toLowerCase().includes(componentQuery.trim().toLowerCase())
  )

  const groupedComponents = filteredComponents.reduce<
    Record<string, ComponentInfo[]>
  >((groups, item) => {
    groups[item.category] ??= []
    groups[item.category].push(item)
    return groups
  }, {})
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader basePath={basePath} onNavigate={onNavigate} />

      <SidebarProvider className="min-h-[calc(100svh-3.5rem)] items-stretch">
        <Sidebar collapsible="icon" className="top-14 h-[calc(100svh-3.5rem)]">
          <SidebarHeader>
            <div className="flex items-center justify-between px-2">
              <SidebarGroupLabel className="px-0 text-sm font-semibold text-sidebar-foreground">
                Components
              </SidebarGroupLabel>
              <Badge variant="secondary">{components.length}</Badge>
            </div>
            <div className="relative">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <SidebarInput
                value={componentQuery}
                onChange={(event) => setComponentQuery(event.target.value)}
                placeholder="Search components"
                aria-label="Search components"
                className="pl-9"
              />
            </div>
          </SidebarHeader>

          <SidebarContent>
            {Object.entries(groupedComponents)
              .sort(([first], [second]) => first.localeCompare(second))
              .map(([category, items]) => (
                <SidebarGroup key={category}>
                  <SidebarGroupLabel>{category}</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {items.map((item) => (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton
                            render={
                              <a href={`${basePath}/components/${item.id}`} />
                            }
                            isActive={item.id === component.id}
                            tooltip={item.name}
                            onClick={(event) => {
                              event.preventDefault()
                              onNavigate(`/components/${item.id}`)
                            }}
                          >
                            <span>{item.name}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            {filteredComponents.length === 0 ? (
              <p className="px-4 py-4 text-sm text-muted-foreground">
                No components found.
              </p>
            ) : null}
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="min-w-0 bg-background">
          <main className="mx-auto w-full max-w-5xl space-y-10 px-5 py-9 sm:py-12">
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1 space-y-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href={`${basePath}/components`}
                        onClick={(event) => {
                          event.preventDefault()
                          onNavigate("/components")
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
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {component.name}
                  </h1>
                  <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </div>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    Preview
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Try the component and explore its behaviour.
                  </p>
                </div>
              </div>
              <div className="flex min-h-64 items-center justify-center rounded-2xl border bg-card p-6 sm:p-10">
                <div className="flex w-full items-center justify-center">
                  <ComponentPreview id={component.id} />
                </div>
              </div>
            </section>
          </main>
        </SidebarInset>
      </SidebarProvider>
      <div className="mx-auto max-w-6xl px-5 pb-10">
        <SiteFooter />
      </div>
    </div>
  )
}
