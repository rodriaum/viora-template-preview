"use client"

import * as React from "react"
import { cn } from "cn"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type PhoneCountry = {
  code: string
  name: string
  dialCode: string
  pattern: RegExp
  placeholder: string
}

export const phoneCountries: PhoneCountry[] = [
  { code: "PT", name: "Portugal", dialCode: "+351", pattern: /^9\d{8}$/, placeholder: "912 345 678" },
  { code: "IT", name: "Italy", dialCode: "+39", pattern: /^\d{6,11}$/, placeholder: "312 345 6789" },
  { code: "ES", name: "Spain", dialCode: "+34", pattern: /^[6-9]\d{8}$/, placeholder: "612 345 678" },
  { code: "FR", name: "France", dialCode: "+33", pattern: /^[1-9]\d{8}$/, placeholder: "6 12 34 56 78" },
  { code: "DE", name: "Germany", dialCode: "+49", pattern: /^[1-9]\d{5,13}$/, placeholder: "151 23456789" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", pattern: /^7\d{9}$/, placeholder: "7400 123456" },
  { code: "US", name: "United States", dialCode: "+1", pattern: /^[2-9]\d{9}$/, placeholder: "(201) 555-0123" },
  { code: "CA", name: "Canada", dialCode: "+1", pattern: /^[2-9]\d{9}$/, placeholder: "(204) 234-5678" },
  { code: "BR", name: "Brazil", dialCode: "+55", pattern: /^[1-9]{2}9?\d{8}$/, placeholder: "(11) 91234-5678" },
  { code: "NL", name: "Netherlands", dialCode: "+31", pattern: /^6\d{8}$/, placeholder: "6 12345678" },
  { code: "BE", name: "Belgium", dialCode: "+32", pattern: /^4\d{8}$/, placeholder: "470 12 34 56" },
  { code: "CH", name: "Switzerland", dialCode: "+41", pattern: /^\d{9}$/, placeholder: "78 123 45 67" },
  { code: "AT", name: "Austria", dialCode: "+43", pattern: /^\d{7,13}$/, placeholder: "664 123456" },
  { code: "IE", name: "Ireland", dialCode: "+353", pattern: /^8\d{8}$/, placeholder: "85 123 4567" },
  { code: "PL", name: "Poland", dialCode: "+48", pattern: /^[4-8]\d{8}$/, placeholder: "512 345 678" },
  { code: "GR", name: "Greece", dialCode: "+30", pattern: /^6\d{9}$/, placeholder: "691 234 5678" },
  { code: "SE", name: "Sweden", dialCode: "+46", pattern: /^7\d{8}$/, placeholder: "70 123 45 67" },
  { code: "NO", name: "Norway", dialCode: "+47", pattern: /^[49]\d{7}$/, placeholder: "412 34 567" },
  { code: "DK", name: "Denmark", dialCode: "+45", pattern: /^[2-9]\d{7}$/, placeholder: "20 12 34 56" },
  { code: "FI", name: "Finland", dialCode: "+358", pattern: /^\d{7,10}$/, placeholder: "40 1234567" },
  { code: "AU", name: "Australia", dialCode: "+61", pattern: /^4\d{8}$/, placeholder: "412 345 678" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", pattern: /^2\d{7,9}$/, placeholder: "21 123 4567" },
  { code: "MX", name: "Mexico", dialCode: "+52", pattern: /^[2-9]\d{9}$/, placeholder: "55 1234 5678" },
  { code: "AR", name: "Argentina", dialCode: "+54", pattern: /^\d{10,11}$/, placeholder: "11 2345 6789" },
  { code: "JP", name: "Japan", dialCode: "+81", pattern: /^[1-9]\d{8,9}$/, placeholder: "90 1234 5678" },
  { code: "KR", name: "South Korea", dialCode: "+82", pattern: /^1\d{8,9}$/, placeholder: "10 1234 5678" },
  { code: "IN", name: "India", dialCode: "+91", pattern: /^[6-9]\d{9}$/, placeholder: "98765 43210" },
  { code: "CN", name: "China", dialCode: "+86", pattern: /^1\d{10}$/, placeholder: "131 2345 6789" },
  { code: "TR", name: "Türkiye", dialCode: "+90", pattern: /^5\d{9}$/, placeholder: "501 234 56 78" },
  { code: "UA", name: "Ukraine", dialCode: "+380", pattern: /^\d{9}$/, placeholder: "50 123 4567" },
  { code: "ZA", name: "South Africa", dialCode: "+27", pattern: /^[6-8]\d{8}$/, placeholder: "82 123 4567" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", pattern: /^5\d{8}$/, placeholder: "50 123 4567" },
]

const sortedCountries = phoneCountries
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name))

// Lets the trigger show "+351" instead of the raw value "PT".
const selectItems = sortedCountries.map((country) => ({
  value: country.code,
  label: country.dialCode,
}))

type PhoneInputProps = Omit<
  React.ComponentProps<"input">,
  "value" | "defaultValue" | "onChange"
> & {
  value?: string
  defaultValue?: string
  defaultCountry?: string
  onChange?: (value: string, country: PhoneCountry) => void
  onCountryChange?: (country: PhoneCountry) => void
  invalid?: boolean
}

function getDigits(value: string) {
  return value.replace(/\D/g, "")
}

/** Detects the country from an E.164 value, preferring the longest dial code match. */
function detectCountry(value: string, preferredCode: string) {
  if (!value.startsWith("+")) return undefined

  const matches = phoneCountries.filter((item) =>
    value.startsWith(item.dialCode)
  )
  if (matches.length === 0) return undefined

  const longest = Math.max(...matches.map((item) => item.dialCode.length))
  const best = matches.filter((item) => item.dialCode.length === longest)

  return best.find((item) => item.code === preferredCode) ?? best[0]
}

/** Formats digits using the country placeholder as a mask (e.g. "(##) #####-####"). */
function formatPhoneNumber(value: string, country: PhoneCountry) {
  const digits = getDigits(value)
  const mask = country.placeholder.replace(/\d/g, "#")

  let formatted = ""
  let index = 0

  for (const char of mask) {
    if (index >= digits.length) break

    if (char === "#") {
      formatted += digits[index]
      index += 1
    } else {
      formatted += char
    }
  }

  return formatted + digits.slice(index)
}

function PhoneInput({
  value,
  defaultValue = "",
  defaultCountry = "PT",
  onChange,
  onCountryChange,
  className,
  disabled,
  invalid,
  placeholder,
  ...props
}: PhoneInputProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const [selectedCode, setSelectedCode] = React.useState(defaultCountry)

  const currentValue = value ?? internalValue

  // In controlled mode the country comes from the value prefix.
  const country =
    detectCountry(currentValue, selectedCode) ??
    phoneCountries.find((item) => item.code === selectedCode) ??
    phoneCountries[0]

  const nationalNumber = currentValue.startsWith(country.dialCode)
    ? currentValue.slice(country.dialCode.length)
    : currentValue
  const digits = getDigits(nationalNumber)
  const isValid = digits.length === 0 || country.pattern.test(digits)

  const handleValueChange = (nextValue: string) => {
    const nextDigits = getDigits(nextValue)

    if (value === undefined) {
      setInternalValue(nextDigits)
    }

    onChange?.(nextDigits ? `${country.dialCode}${nextDigits}` : "", country)
  }

  const handleCountryChange = (nextCode: unknown) => {
    if (typeof nextCode !== "string" || !nextCode) return

    const nextCountry =
      phoneCountries.find((item) => item.code === nextCode) ?? phoneCountries[0]

    setSelectedCode(nextCountry.code)
    onCountryChange?.(nextCountry)

    if (digits) {
      onChange?.(`${nextCountry.dialCode}${digits}`, nextCountry)
    }
  }

  return (
    <div
      className={cn(
        "flex h-9 w-full min-w-0 items-center rounded-4xl border border-input bg-input/30 transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        (invalid || !isValid) &&
          "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
        disabled && "pointer-events-none cursor-not-allowed opacity-50",
        className
      )}
    >
      <Select
        items={selectItems}
        value={country.code}
        onValueChange={handleCountryChange}
        disabled={disabled}
      >
        <SelectTrigger
          aria-label="Select country calling code"
          className="h-full w-auto shrink-0 rounded-l-4xl rounded-r-none border-0 bg-transparent shadow-none ring-0 hover:bg-transparent focus-visible:ring-0 data-[size=default]:h-full dark:bg-transparent dark:hover:bg-transparent"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {sortedCountries.map((item) => (
            <SelectItem key={item.code} value={item.code} label={item.code}>
              {item.code} ({item.dialCode})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="h-5 w-px shrink-0 bg-border" />

      <Input
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={formatPhoneNumber(digits, country)}
        onChange={(event) => handleValueChange(event.target.value)}
        placeholder={placeholder ?? country.placeholder}
        disabled={disabled}
        aria-invalid={invalid || !isValid}
        className="h-full min-w-0 flex-1 rounded-l-none rounded-r-4xl border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent"
        {...props}
      />
    </div>
  )
}

export { PhoneInput, type PhoneInputProps }