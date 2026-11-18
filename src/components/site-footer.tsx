import { ArrowUpRight } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="flex flex-col justify-between gap-3 border-t pt-5 text-xs text-muted-foreground sm:flex-row">
      <span>
        © {new Date().getFullYear()} Viora Studio · All
        rights reserved.
      </span>

      <a
        href="https://github.com/viora-studio/template-preview"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
      >
        View Source
        <ArrowUpRight className="size-3" />
      </a>
    </footer>
  )
}
