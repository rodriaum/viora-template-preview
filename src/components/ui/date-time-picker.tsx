"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "cn"

type DateTimePickerProps = {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date | undefined) => void
  minuteStep?: number
  secondStep?: number
  disabled?: boolean
  className?: string
  locale?: React.ComponentProps<typeof Calendar>["locale"]
}

function pad(value: number) {
  return String(value).padStart(2, "0")
}

function getSteps(step: number, fallback: number) {
  const safeStep = Number.isFinite(step)
    ? Math.min(60, Math.max(1, Math.floor(step)))
    : fallback

  return Array.from(
    { length: Math.ceil(60 / safeStep) },
    (_, index) => index * safeStep
  ).filter((value) => value < 60)
}

function DateTimePicker({
  value,
  defaultValue,
  onChange,
  minuteStep = 1,
  secondStep = 1,
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
  const selectedSecond = selectedDate?.getSeconds() ?? 0

  const hours = React.useMemo(
    () => Array.from({ length: 24 }, (_, hour) => hour),
    []
  )
  const minutes = React.useMemo(() => getSteps(minuteStep, 1), [minuteStep])
  const seconds = React.useMemo(() => getSteps(secondStep, 1), [secondStep])

  const updateValue = React.useCallback(
    (nextValue: Date | undefined) => {
      if (value === undefined) {
        setInternalValue(nextValue)
      }

      onChange?.(nextValue)
    },
    [onChange, value]
  )

  const updateTime = (
    hour: number,
    minute: number,
    second: number
  ) => {
    const nextValue = selectedDate
      ? new Date(selectedDate)
      : new Date()

    nextValue.setHours(hour, minute, second, 0)
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

  return (
    <div
      className={cn(
        "flex w-fit max-w-full flex-col overflow-hidden rounded-3xl border bg-popover text-popover-foreground shadow-sm sm:flex-row",
        className
      )}
    >
      <div className="min-w-0 flex-1">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          disabled={disabled}
          locale={locale}
          className="mx-auto"
        />
      </div>

      <div className="w-full border-t sm:w-36 sm:border-t-0 sm:border-l">
        <ScrollArea className="h-[280px] sm:h-[280px]">
          <div className="grid grid-cols-3 gap-0.5 p-1">
            <div className="sticky top-0 z-10 flex flex-col gap-1 bg-popover/95 p-1 backdrop-blur">
              <span className="pb-1 text-center text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                HH
              </span>
              {hours.map((hour) => (
                <Button
                  key={hour}
                  type="button"
                  size="sm"
                  variant={selectedHour === hour ? "default" : "ghost"}
                  disabled={disabled}
                  className="h-8 w-full px-0 font-medium tabular-nums"
                  onClick={() =>
                    updateTime(hour, selectedMinute, selectedSecond)
                  }
                >
                  {pad(hour)}
                </Button>
              ))}
            </div>

            <div className="flex flex-col gap-1 p-1">
              <span className="pb-1 text-center text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                MM
              </span>
              {minutes.map((minute) => (
                <Button
                  key={minute}
                  type="button"
                  size="sm"
                  variant={selectedMinute === minute ? "default" : "ghost"}
                  disabled={disabled}
                  className="h-8 w-full px-0 font-medium tabular-nums"
                  onClick={() =>
                    updateTime(selectedHour, minute, selectedSecond)
                  }
                >
                  {pad(minute)}
                </Button>
              ))}
            </div>

            <div className="flex flex-col gap-1 p-1">
              <span className="pb-1 text-center text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                SS
              </span>
              {seconds.map((second) => (
                <Button
                  key={second}
                  type="button"
                  size="sm"
                  variant={selectedSecond === second ? "default" : "ghost"}
                  disabled={disabled}
                  className="h-8 w-full px-0 font-medium tabular-nums"
                  onClick={() =>
                    updateTime(selectedHour, selectedMinute, second)
                  }
                >
                  {pad(second)}
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export { DateTimePicker, type DateTimePickerProps }
