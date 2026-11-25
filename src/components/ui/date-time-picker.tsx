"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "cn"
import { Clock3 } from "lucide-react"

type DateTimePickerProps = {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date | undefined) => void
  minuteStep?: number
  disabled?: boolean
  className?: string
  locale?: React.ComponentProps<typeof Calendar>["locale"]
}

function pad(value: number) {
  return String(value).padStart(2, "0")
}

function DateTimePicker({
  value,
  defaultValue,
  onChange,
  minuteStep = 15,
  disabled = false,
  className,
  locale,
}: DateTimePickerProps) {
  const [internalValue, setInternalValue] = React.useState<Date | undefined>(
    defaultValue
  )

  const selectedDate = value ?? internalValue
  const selectedHour = selectedDate?.getHours() ?? 9
  const selectedMinute = selectedDate?.getMinutes() ?? 0

  const hours = React.useMemo(
    () => Array.from({ length: 24 }, (_, hour) => hour),
    []
  )

  const minutes = React.useMemo(() => {
    const step = Number.isFinite(minuteStep)
      ? Math.min(60, Math.max(1, Math.floor(minuteStep)))
      : 15

    return Array.from(
      { length: Math.ceil(60 / step) },
      (_, index) => index * step
    ).filter((minute) => minute < 60)
  }, [minuteStep])

  const updateValue = React.useCallback(
    (nextValue: Date | undefined) => {
      if (value === undefined) {
        setInternalValue(nextValue)
      }

      onChange?.(nextValue)
    },
    [onChange, value]
  )

  const updateTime = (hour: number, minute: number) => {
    const nextValue = selectedDate
      ? new Date(selectedDate)
      : new Date()

    nextValue.setHours(hour, minute, 0, 0)
    updateValue(nextValue)
  }

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) {
      updateValue(undefined)
      return
    }

    const nextValue = selectedDate ? new Date(selectedDate) : new Date(date)
    nextValue.setFullYear(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )

    if (!selectedDate) {
      nextValue.setHours(9, 0, 0, 0)
    }

    updateValue(nextValue)
  }

  const formattedDate = selectedDate
    ? new Intl.DateTimeFormat(locale?.code, {
        dateStyle: "long",
      }).format(selectedDate)
    : "Seleciona uma data"

  return (
    <div
      className={cn(
        "flex w-fit max-w-full flex-col overflow-hidden rounded-3xl border bg-popover text-popover-foreground shadow-sm sm:flex-row",
        className
      )}
    >
      <div className="min-w-0 flex-1">
        <div className="border-b px-4 py-3">
          <p className="text-sm font-medium">Data</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {formattedDate}
          </p>
        </div>

        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          disabled={disabled}
          locale={locale}
          className="mx-auto"
        />
      </div>

      <div className="flex w-full flex-col border-t sm:w-36 sm:border-t-0 sm:border-l">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <Clock3 className="size-4 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Hora</p>
            <p className="text-xs text-muted-foreground">
              {selectedDate
                ? `${pad(selectedHour)}:${pad(selectedMinute)}`
                : "Seleciona"}
            </p>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-2 sm:grid-cols-1">
          <ScrollArea className="h-52 sm:h-64">
            <div className="flex flex-col gap-1 p-2">
              {hours.map((hour) => (
                <Button
                  key={hour}
                  type="button"
                  size="sm"
                  variant={selectedHour === hour ? "default" : "ghost"}
                  disabled={disabled}
                  className="w-full justify-center tabular-nums"
                  onClick={() => updateTime(hour, selectedMinute)}
                >
                  {pad(hour)}
                </Button>
              ))}
            </div>
          </ScrollArea>

          <ScrollArea className="h-52 border-l sm:h-64 sm:border-l-0">
            <div className="flex flex-col gap-1 p-2">
              {minutes.map((minute) => (
                <Button
                  key={minute}
                  type="button"
                  size="sm"
                  variant={selectedMinute === minute ? "default" : "ghost"}
                  disabled={disabled}
                  className="w-full justify-center tabular-nums"
                  onClick={() => updateTime(selectedHour, minute)}
                >
                  {pad(minute)}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export { DateTimePicker, type DateTimePickerProps }
