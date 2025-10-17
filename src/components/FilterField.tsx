import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import type { FilterOption } from '../config/filterConfig'

interface FilterFieldProps {
  label: string
  value: string
  options: FilterOption[]
  onValueChange: (value: string) => void
  className?: string
}

export function FilterField({ 
  label, 
  value, 
  options, 
  onValueChange, 
  className = "col-span-2" 
}: FilterFieldProps) {
  return (
    <div className={`space-y-2 text-start ${className}`}>
      <label className="text-xs text-start font-semibold text-gray-700">{label}</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="border-gray-300 w-full mt-1">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.hasDot ? (
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${option.dotColor} rounded-full`}></div>
                  {option.label}
                </div>
              ) : (
                option.label
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
