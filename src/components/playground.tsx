import * as React from "react"

import {
  Bell,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  FileText,
  Info,
  Loader2,
  MoreHorizontal,
  X,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function DemoCard({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Card className={className}>
      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">{children}</CardContent>
    </Card>
  )
}

export default function Playground() {
  const [activeTab, setActiveTab] = React.useState("basics")
  const [termsAccepted, setTermsAccepted] = React.useState(true)
  const [marketingEnabled, setMarketingEnabled] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState("pro")
  const [volume, setVolume] = React.useState([68])
  const [progress, setProgress] = React.useState(72)
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date()
  )
  const [detailsOpen, setDetailsOpen] = React.useState(false)
  const [notificationVisible, setNotificationVisible] = React.useState(false)
  const [email, setEmail] = React.useState("alex@example.com")
  const [message, setMessage] = React.useState("A short message goes here.")

  return (
    <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">Playground</h2>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-4"
          >
            <TabsList className="h-auto flex-wrap">
              <TabsTrigger value="basics">Basics</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>

            <TabsContent
              value="basics"
              className="mt-0 grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
            >
              <DemoCard title="Buttons">
                <div className="flex flex-wrap gap-2">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="secondary-destructive">
                    Secondary Destructive
                  </Button>
                  <Button variant="link">Link</Button>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="More actions"
                  >
                    <MoreHorizontal />
                  </Button>
                </div>
              </DemoCard>

              <DemoCard title="Badges & avatars">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="beta">Beta</Badge>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/119365213" />
                    <AvatarFallback>RF</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">Rodrigo Ferreira</p>
                    <p className="text-xs text-muted-foreground">
                      Software Developer
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    Online
                  </Badge>
                </div>
              </DemoCard>

              <DemoCard title="Alerts">
                <div className="space-y-3">
                  <Alert>
                    <Info className="size-4" />
                    <AlertTitle>Heads up</AlertTitle>
                    <AlertDescription>
                      Your changes have been saved.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTitle>Something went wrong</AlertTitle>
                    <AlertDescription>Please try again.</AlertDescription>
                  </Alert>
                </div>
              </DemoCard>

              <DemoCard title="Accordion">
                <Accordion className="w-full" defaultValue={["item-1"]}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>First item</AccordionTrigger>
                    <AccordionContent>
                      Accordion content can be shown or hidden.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Second item</AccordionTrigger>
                    <AccordionContent>
                      Keep related information together.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </DemoCard>

              <DemoCard title="Popover & tooltip">
                <div className="flex flex-wrap items-center gap-3">
                  <Popover>
                    <PopoverTrigger className="h-9 rounded-xl border px-3 text-sm font-medium transition-colors hover:bg-muted">
                      Open popover
                      <ChevronDown className="ml-2 inline size-4" />
                    </PopoverTrigger>
                    <PopoverContent className="space-y-2">
                      <p className="text-sm font-medium">Popover content</p>
                      <p className="text-xs text-muted-foreground">
                        Contextual information on demand.
                      </p>
                    </PopoverContent>
                  </Popover>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="grid size-9 place-items-center rounded-xl border transition-colors hover:bg-muted">
                        <CircleHelp className="size-4" />
                      </TooltipTrigger>
                      <TooltipContent>Helpful information</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </DemoCard>

              <DemoCard title="Aspect ratio">
                <AspectRatio
                  ratio={16 / 9}
                  className="grid place-items-center rounded-xl bg-muted text-sm text-muted-foreground"
                >
                  16:9 preview
                </AspectRatio>
              </DemoCard>

              <DemoCard title="Collapsible">
                <Collapsible
                  open={detailsOpen}
                  onOpenChange={setDetailsOpen}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between rounded-xl border p-3">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="size-4 text-muted-foreground" />
                      Release notes
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
                  <CollapsibleContent className="rounded-xl bg-muted p-3 text-sm text-muted-foreground">
                    Updated components and refined interaction states.
                  </CollapsibleContent>
                </Collapsible>
              </DemoCard>
            </TabsContent>

            <TabsContent
              value="forms"
              className="mt-0 grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
            >
              <DemoCard title="Input">
                <div className="space-y-2">
                  <Label htmlFor="demo-email">Email</Label>
                  <Input
                    id="demo-email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="name@example.com"
                  />
                </div>
              </DemoCard>

              <DemoCard title="Textarea">
                <div className="space-y-2">
                  <Label htmlFor="demo-message">Message</Label>
                  <Textarea
                    id="demo-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={3}
                  />
                </div>
              </DemoCard>

              <DemoCard title="Checkbox & switch">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(value) =>
                        setTermsAccepted(value === true)
                      }
                    />
                    <Label htmlFor="terms">Accept terms</Label>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <Label htmlFor="marketing">Product updates</Label>
                    <Switch
                      id="marketing"
                      checked={marketingEnabled}
                      onCheckedChange={setMarketingEnabled}
                    />
                  </div>
                </div>
              </DemoCard>

              <DemoCard title="Radio group">
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
              </DemoCard>

              <DemoCard title="Select">
                <Select defaultValue="europe">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="americas">Americas</SelectItem>
                    <SelectItem value="asia">Asia Pacific</SelectItem>
                  </SelectContent>
                </Select>
              </DemoCard>

              <DemoCard title="Slider">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <Label>Volume</Label>
                    <span className="text-muted-foreground tabular-nums">
                      {volume[0]}%
                    </span>
                  </div>
                  <Slider
                    value={volume}
                    onValueChange={(value) =>
                      setVolume(
                        typeof value === "number" ? [value] : [...value]
                      )
                    }
                    max={100}
                    step={1}
                  />
                </div>
              </DemoCard>

              <DemoCard title="Calendar">
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-xl border"
                  />
                </div>
              </DemoCard>

              <DemoCard title="Button group">
                <ButtonGroup>
                  <Button variant="outline">
                    <ChevronLeft className="mr-1 size-4" />
                    Back
                  </Button>
                  <Button variant="outline">Save</Button>
                  <Button>Continue</Button>
                </ButtonGroup>
              </DemoCard>
            </TabsContent>

            <TabsContent
              value="navigation"
              className="mt-0 grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
            >
              <DemoCard title="Breadcrumb">
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

              <DemoCard title="Tabs">
                <Tabs defaultValue="account" className="w-full">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="account"
                    className="pt-3 text-sm text-muted-foreground"
                  >
                    Account preferences.
                  </TabsContent>
                  <TabsContent
                    value="security"
                    className="pt-3 text-sm text-muted-foreground"
                  >
                    Security preferences.
                  </TabsContent>
                </Tabs>
              </DemoCard>

              <DemoCard title="Pagination">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Page 2 of 5
                  </span>
                  <ButtonGroup>
                    <Button
                      size="icon"
                      variant="outline"
                      aria-label="Previous page"
                    >
                      <ChevronLeft />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      aria-label="Next page"
                    >
                      <ChevronRight />
                    </Button>
                  </ButtonGroup>
                </div>
              </DemoCard>

              <DemoCard title="Navigation menu">
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" size="sm">
                    Overview
                  </Button>
                  <Button variant="ghost" size="sm">
                    Projects
                  </Button>
                  <Button variant="ghost" size="sm">
                    Settings
                  </Button>
                </div>
              </DemoCard>

              <DemoCard title="Keyboard shortcuts">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Open command menu</span>
                    <kbd className="rounded-md border bg-muted px-2 py-1 text-xs">
                      ⌘ K
                    </kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Search</span>
                    <kbd className="rounded-md border bg-muted px-2 py-1 text-xs">
                      /
                    </kbd>
                  </div>
                </div>
              </DemoCard>

              <DemoCard title="Table">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Member</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Alex Morgan</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jamie Lee</TableCell>
                      <TableCell>
                        <Badge variant="outline">Pending</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </DemoCard>
            </TabsContent>

            <TabsContent
              value="feedback"
              className="mt-0 grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
            >
              <DemoCard title="Progress">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Uploading files</span>
                    <span className="text-muted-foreground tabular-nums">
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
                      <ChevronLeft className="mr-1 size-4" />
                      Less
                    </Button>
                    <Button
                      size="sm"
                      onClick={() =>
                        setProgress((value) => Math.min(100, value + 10))
                      }
                    >
                      More
                      <ChevronRight className="ml-1 size-4" />
                    </Button>
                  </div>
                </div>
              </DemoCard>

              <DemoCard title="Notification">
                <div className="space-y-3">
                  <Button onClick={() => setNotificationVisible(true)}>
                    <Bell className="mr-2 size-4" />
                    Show notification
                  </Button>
                  {notificationVisible && (
                    <Alert>
                      <CheckCircle2 className="size-4" />
                      <AlertTitle>Saved</AlertTitle>
                      <AlertDescription>
                        Changes saved successfully.
                      </AlertDescription>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 size-7"
                        onClick={() => setNotificationVisible(false)}
                        aria-label="Dismiss notification"
                      >
                        <X className="size-4" />
                      </Button>
                    </Alert>
                  )}
                </div>
              </DemoCard>

              <DemoCard title="Loading states">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Loader2 className="size-4 animate-spin text-muted-foreground" />
                    Loading content
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

              <DemoCard title="Status">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">
                      All systems operational
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Last checked just now
                    </p>
                  </div>
                </div>
              </DemoCard>
            </TabsContent>
          </Tabs>
        </section>
  )
}
