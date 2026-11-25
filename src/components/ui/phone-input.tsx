"use client"

import * as React from "react"
import { cn } from "cn"
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"

export type PhoneCountry = {
  code: string
  name: string
  dialCode: string
  flag: string
  pattern: RegExp
  placeholder: string
}

export const phoneCountries: PhoneCountry[] = [
  { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹", pattern: /^9\d{8}$/, placeholder: "912 345 678" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹", pattern: /^\d{6,11}$/, placeholder: "312 345 6789" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸", pattern: /^[6-9]\d{8}$/, placeholder: "612 345 678" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷", pattern: /^[1-9]\d{8}$/, placeholder: "6 12 34 56 78" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪", pattern: /^[1-9]\d{5,13}$/, placeholder: "151 23456789" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧", pattern: /^7\d{9}$/, placeholder: "7400 123456" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸", pattern: /^[2-9]\d{9}$/, placeholder: "(201) 555-0123" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦", pattern: /^[2-9]\d{9}$/, placeholder: "(204) 234-5678" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷", pattern: /^[1-9]{2}9?\d{8}$/, placeholder: "(11) 91234-5678" },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱", pattern: /^6\d{8}$/, placeholder: "6 12345678" },
  { code: "BE", name: "Belgium", dialCode: "+32", flag: "🇧🇪", pattern: /^4\d{8}$/, placeholder: "470 12 34 56" },
  { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭", pattern: /^\d{9}$/, placeholder: "78 123 45 67" },
  { code: "AT", name: "Austria", dialCode: "+43", flag: "🇦🇹", pattern: /^\d{7,13}$/, placeholder: "664 123456" },
  { code: "IE", name: "Ireland", dialCode: "+353", flag: "🇮🇪", pattern: /^8\d{8}$/, placeholder: "85 123 4567" },
  { code: "PL", name: "Poland", dialCode: "+48", flag: "🇵🇱", pattern: /^[4-8]\d{8}$/, placeholder: "512 345 678" },
  { code: "GR", name: "Greece", dialCode: "+30", flag: "🇬🇷", pattern: /^6\d{9}$/, placeholder: "691 234 5678" },
  { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪", pattern: /^7\d{8}$/, placeholder: "70 123 45 67" },
  { code: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴", pattern: /^[49]\d{7}$/, placeholder: "412 34 567" },
  { code: "DK", name: "Denmark", dialCode: "+45", flag: "🇩🇰", pattern: /^[2-9]\d{7}$/, placeholder: "20 12 34 56" },
  { code: "FI", name: "Finland", dialCode: "+358", flag: "🇫🇮", pattern: /^\d{7,10}$/, placeholder: "40 1234567" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺", pattern: /^4\d{8}$/, placeholder: "412 345 678" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿", pattern: /^2\d{7,9}$/, placeholder: "21 123 4567" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽", pattern: /^[2-9]\d{9}$/, placeholder: "55 1234 5678" },
  { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷", pattern: /^\d{10,11}$/, placeholder: "11 2345 6789" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵", pattern: /^[1-9]\d{8,9}$/, placeholder: "90 1234 5678" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷", pattern: /^1\d{8,9}$/, placeholder: "10 1234 5678" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳", pattern: /^[6-9]\d{9}$/, placeholder: "98765 43210" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳", pattern: /^1\d{10}$/, placeholder: "131 2345 6789" },
  { code: "TR", name: "Türkiye", dialCode: "+90", flag: "🇹🇷", pattern: /^5\d{9}$/, placeholder: "501 234 56 78" },
  { code: "UA", name: "Ukraine", dialCode: "+380", flag: "🇺🇦", pattern: /^\d{9}$/, placeholder: "50 123 4567" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦", pattern: /^[6-8]\d{8}$/, placeholder: "82 123 4567" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪", pattern: /^5\d{8}$/, placeholder: "50 123 4567" },
]

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
  const [countryCode, setCountryCode] = React.useState(defaultCountry)

  const country =
    phoneCountries.find((item) => item.code === countryCode) ?? phoneCountries[0]
  const currentValue = value ?? internalValue
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

  const handleCountryChange = (nextCode: string) => {
    const nextCountry =
      phoneCountries.find((item) => item.code === nextCode) ?? phoneCountries[0]

    setCountryCode(nextCountry.code)
    onCountryChange?.(nextCountry)

    if (digits) {
      onChange?.(`${nextCountry.dialCode}${digits}`, nextCountry)
    }
  }

  const sortedCountries = React.useMemo(
    () => phoneCountries.slice().sort((a, b) => a.name.localeCompare(b.name)),
    []
  )

  return (
    <div
      className={cn(
        "flex h-10 w-full min-w-0 items-center rounded-4xl border border-input bg-input/30 transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        (invalid || !isValid) &&
          "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
        disabled && "pointer-events-none cursor-not-allowed opacity-50",
        className
      )}
    >
      <Combobox
        items={sortedCountries.map((item) => item.code)}
        value={country.code}
        onValueChange={(nextCode) => {
          if (typeof nextCode === "string") handleCountryChange(nextCode)
        }}
      >
        <ComboboxTrigger
          aria-label="Select country calling code"
          disabled={disabled}
          className="h-full shrink-0 rounded-l-4xl px-3 text-sm font-medium outline-none"
        >
          {country.dialCode}
        </ComboboxTrigger>
        <ComboboxContent className="w-72">
          <ComboboxInput placeholder="Search country..." />
          <ComboboxList>
            {sortedCountries.map((item) => (
              <ComboboxItem key={item.code} value={item.code}>
                <span className="text-base">{item.flag}</span>
                <span className="flex-1">{item.name}</span>
                <span className="text-muted-foreground">{item.dialCode}</span>
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      <div className="h-5 w-px shrink-0 bg-border" />

      <input
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={digits}
        onChange={(event) => handleValueChange(event.target.value)}
        placeholder={placeholder ?? country.placeholder}
        disabled={disabled}
        aria-invalid={invalid || !isValid}
        className="h-full min-w-0 flex-1 rounded-r-4xl bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
        {...props}
      />
    </div>
  )
}

export { PhoneInput, type PhoneInputProps }
