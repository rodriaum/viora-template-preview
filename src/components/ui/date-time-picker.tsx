"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

type DateTimePickerProps = {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date | undefined) => void
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
  const minutes = React.useMemo(
    () => Array.from({ length: 60 }, (_, minute) => minute),
    []
  )

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

      <div className="grid w-full grid-cols-2 border-t sm:w-36 sm:border-l sm:border-t-0">
        <div className="min-w-0">
          <div className="flex h-[280px] min-h-0 flex-col">
            <span className="shrink-0 px-1 py-2 text-center text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              HH
            </span>
            <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col gap-1 p-1">
              {hours.map((hour) => (
                <Button
                  key={hour}
                  type="button"
                  size="sm"
                  variant={selectedHour === hour ? "default" : "ghost"}
                  disabled={disabled}
                  className="h-8 w-full px-0 font-medium tabular-nums"
                  onClick={() => updateTime(hour, selectedMinute)}
                >
                  {pad(hour)}
                </Button>
              ))}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex h-[280px] min-h-0 flex-col">
            <span className="shrink-0 px-1 py-2 text-center text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              MM
            </span>
            <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col gap-1 p-1">
              {minutes.map((minute) => (
                <Button
                  key={minute}
                  type="button"
                  size="sm"
                  variant={selectedMinute === minute ? "default" : "ghost"}
                  disabled={disabled}
                  className="h-8 w-full px-0 font-medium tabular-nums"
                  onClick={() => updateTime(selectedHour, minute)}
                >
                  {pad(minute)}
                </Button>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { DateTimePicker, type DateTimePickerProps }
