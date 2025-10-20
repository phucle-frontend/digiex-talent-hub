import { useState } from 'react'
import { Search, CalendarIcon } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { Slider } from './ui/slider'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { format } from 'date-fns'

interface CollapsibleFilterFieldProps {
  label: string
  selectedValues: string[]
  options: string[]
  onSelectionChange: (values: string[]) => void
  className?: string
  type?: string
  value?: any
  from?: any
  to?: any
}

export function CollapsibleFilterField({ 
  label, 
  selectedValues, 
  options, 
  onSelectionChange, 
  className = "",
  type = "checkboxes",
  value,
  from,
  to
}: CollapsibleFilterFieldProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [dateFrom, setDateFrom] = useState<Date | undefined>(from ? new Date(from) : undefined)
  const [dateTo, setDateTo] = useState<Date | undefined>(to ? new Date(to) : undefined)
  const [rangeValue, setRangeValue] = useState([0, 14])

  // Add "All" option for checkboxes
  const allOptions = type === "checkboxes" ? ["All", ...options] : options
  const filteredOptions = allOptions.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (value === "All") {
      if (checked) {
        onSelectionChange(["All", ...options.filter(opt => opt !== "All")])
      } else {
        onSelectionChange([])
      }
    } else {
      if (checked) {
        const newValues = [...selectedValues.filter(v => v !== "All"), value]
        onSelectionChange(newValues)
      } else {
        onSelectionChange(selectedValues.filter(v => v !== value))
      }
    }
  }

  const handleRadioChange = (value: string) => {
    onSelectionChange([value])
  }

  const handleSelectAll = () => {
    if (selectedValues.length === options.length) {
      onSelectionChange([])
    } else {
      onSelectionChange([...options])
    }
  }

  const handleRangeChange = (values: number[]) => {
    setRangeValue(values)
    onSelectionChange([`${values[0]}-${values[1]}`])
  }

  const handleDateChange = (date: Date | undefined, isFrom: boolean) => {
    if (isFrom) {
      setDateFrom(date)
    } else {
      setDateTo(date)
    }
    // Update selection with date range
    const fromStr = dateFrom ? format(dateFrom, 'yyyy-MM-dd') : ''
    const toStr = dateTo ? format(dateTo, 'yyyy-MM-dd') : ''
    onSelectionChange([`${fromStr}-${toStr}`])
  }

  const renderContent = () => {
    switch (type) {
      case 'skills':
        return (
          <>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search skills"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 text-sm border-gray-200"
              />
            </div>
            
            <div className="max-h-48 overflow-y-auto space-y-1">
              {filteredOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                  <Checkbox
                    id={`${label}-${option}`}
                    checked={selectedValues.includes(option)}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange(option, checked as boolean)
                    }
                  />
                  <label 
                    htmlFor={`${label}-${option}`}
                    className="flex items-center gap-2 text-sm cursor-pointer flex-1"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </>
        )

      case 'checkboxes':
        return (
          <>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 text-sm border-gray-200"
              />
            </div>
            
            {/* <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Select all</span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSelectAll}
                className="text-xs"
              >
                {selectedValues.length === options.length ? 'Deselect All' : 'Select All'}
              </Button>
            </div> */}
            
            <div className="max-h-48 overflow-y-auto space-y-1">
              {filteredOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                  <Checkbox
                    id={`${label}-${option}`}
                    checked={selectedValues.includes(option)}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange(option, checked as boolean)
                    }
                  />
                  <label 
                    htmlFor={`${label}-${option}`}
                    className="flex items-center gap-2 text-sm cursor-pointer flex-1"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </>
        )

      case 'radio':
        return (
          <>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 text-sm border-gray-200"
              />
            </div>
            
            <RadioGroup value={selectedValues[0] || ""} onValueChange={handleRadioChange}>
              <div className="max-h-48 overflow-y-auto space-y-1">
                {filteredOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                    <RadioGroupItem value={option} id={`${label}-${option}`} />
                    <Label htmlFor={`${label}-${option}`} className="text-sm cursor-pointer flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </>
        )

      case 'range':
        return (
          <div className="space-y-4">
            <div className="px-2">
              <Slider
                value={rangeValue}
                onValueChange={handleRangeChange}
                max={14}
                min={0}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>{rangeValue[0]} years</span>
                <span>{rangeValue[1]} years</span>
              </div>
            </div>
          </div>
        )

      case 'date_picker':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-sm font-medium">From</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateFrom ? format(dateFrom, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateFrom}
                      onSelect={(date) => handleDateChange(date, true)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label className="text-sm font-medium">To</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateTo ? format(dateTo, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateTo}
                      onSelect={(date) => handleDateChange(date, false)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 text-sm border-gray-200"
              />
            </div>
            
            <div className="max-h-48 overflow-y-auto space-y-1">
              {filteredOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                  <Checkbox
                    id={`${label}-${option}`}
                    checked={selectedValues.includes(option)}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange(option, checked as boolean)
                    }
                  />
                  <label 
                    htmlFor={`${label}-${option}`}
                    className="flex items-center gap-2 text-sm cursor-pointer flex-1"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </>
        )
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-b border-gray-200 hover:bg-white">
          <AccordionTrigger className="flex items-center justify-between w-full bg-white transition-colors">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{label}</span>
            </div>
          </AccordionTrigger>
          
          <AccordionContent className="mt-2 space-y-2 px-2">
            {renderContent()}
            
            {filteredOptions.length > 6 && type !== 'range' && type !== 'date_picker' && (
              <div className="text-center">
                <button className="text-violet-600 text-sm hover:text-violet-700">
                  More...
                </button>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}