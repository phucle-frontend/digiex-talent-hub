import { useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { SkillsDialog } from "./SkillsDialog";
import BadgeCustom from "./BadgeCustom";
import { FILTER_FIELDS_KEY, FILTER_FIELDS_TYPE } from "@/config/filterConfig";
import { DayPicker } from "react-day-picker";
import Slider from "@mui/material/Slider";
import type { DateRange } from "react-day-picker";


interface CollapsibleFilterFieldProps {
  label: string;
  selectedValues: string[];
  options: string[];
  onSelectionChange: (values: string[]) => void;
  className?: string;
  type?: string;
  fieldKey: FILTER_FIELDS_KEY;
  from?: any;
  to?: any;
}

export function CollapsibleFilterField({
  label,
  selectedValues,
  options,
  onSelectionChange,
  className = "",
  type = FILTER_FIELDS_TYPE.CHECKBOXES ,
  fieldKey,
  from,
  to,
}: CollapsibleFilterFieldProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    from && to
      ? {
          from: new Date(from),
          to: new Date(to),
        }
      : undefined
  );
  const [value, setValue] = useState([0, 14]);

  const [expandedFilter, setExpandedFilter] = useState<FILTER_FIELDS_KEY | null>(null)

  const allOptions = type === FILTER_FIELDS_TYPE.CHECKBOXES ? ["All", ...options] : options;
  const filteredOptions = allOptions.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log('cehck search term', searchTerm, 'check option', allOptions, filteredOptions)

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (value === "All") {
      if (checked) {
        onSelectionChange(["All", ...options.filter((opt) => opt !== "All")]);
      } else {
        onSelectionChange([]);
      }
    } else {
      if (checked) {
        const newValues = [...selectedValues.filter((v) => v !== "All"), value];
        onSelectionChange(newValues);
      } else {
        onSelectionChange(selectedValues.filter((v) => v !== value));
      }
    }
  };

  const handleRadioChange = (value: string) => {
    onSelectionChange([value]);
  };

  const handleChange = (_event: Event, newValue: number[]) => {
    setValue(newValue);
    onSelectionChange([`${newValue[0]}-${newValue[1]}`]);
  };

  const handleDateRangeChange = (newDateRange?: DateRange) => {
    console.log("Date range changed:", newDateRange);
    setDateRange(newDateRange);

    if (newDateRange?.from && newDateRange?.to) {
      const fromStr = format(newDateRange.from, "yyyy-MM-dd");
      const toStr = format(newDateRange.to, "yyyy-MM-dd");
      console.log("Sending date range:", `${fromStr}-${toStr}`);
      onSelectionChange([`${fromStr}-${toStr}`]);
    } else {
      console.log("Clearing date range");
      onSelectionChange([]);
    }
  };

  const renderContent = () => {
    const shouldRenderSearchInput = [
      FILTER_FIELDS_KEY.PARTNERS,
      FILTER_FIELDS_KEY.POSITION,
    ]?.includes(fieldKey as any);
    switch (type) {
      case FILTER_FIELDS_TYPE.SKILLS:
        return (
          <>
            <div className="space-y-2 flex flex-col justify-start">
              {selectedValues.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedValues.map((skill, index) => (
                    <BadgeCustom
                      key={index}
                      title={
                        skill.length > 30 ? skill.slice(0, 30) + "..." : skill
                      }
                      color="green"
                      condition={true}
                      className="text-sm"
                    />
                  ))}
                </div>
              )}
              <SkillsDialog
                selectedSkills={selectedValues}
                onSkillsChange={onSelectionChange}
              />
            </div>
          </>
        );

      case FILTER_FIELDS_TYPE.CHECKBOXES:
        return (
          <>
            <div className="relative">
              {shouldRenderSearchInput && (
                <>
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 text-sm border-gray-200"
                  />
                </>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              {selectedValues?.map((item) => (
                <BadgeCustom
                  color="green"
                  className="py-1 self-start"
                  title={item}
                  condition={true}
                />
              ))}
            </div>

            <div className="max-h-72 overflow-y-auto space-y-1">
              {filteredOptions.slice(0, expandedFilter === fieldKey ? -1 : 5).map((option) => (
                <div
                  key={option}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
                >
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
        );

      case FILTER_FIELDS_TYPE.RADIO:
        return (
          <>
          {
            shouldRenderSearchInput &&
              <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 text-sm border-gray-200"
              />
            </div>
          }

            <RadioGroup
              value={selectedValues[0] || ""}
              onValueChange={handleRadioChange}
            >
              <div className="max-h-48 overflow-y-auto space-y-1">
                {filteredOptions.map((option) => (
                  <div
                    key={option}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
                  >
                    <RadioGroupItem value={option} id={`${label}-${option}`} />
                    <Label
                      htmlFor={`${label}-${option}`}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </>
        );

      case FILTER_FIELDS_TYPE.RANGE:
        return (
          <div className="space-y-3">
            <div className="px-2">
              <div className="flex justify-between">
                <div className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm shadow-sm">
                  {value[0]}
                </div>
                <div className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm shadow-sm">
                  {value[1]}
                </div>
              </div>
              <Slider
                value={value}
                onChange={handleChange}
                min={0}
                max={14}
                sx={{
                  height: 6,
                  padding: '15px 0',
                  '& .MuiSlider-rail': {
                    color: '#e5e7eb', 
                    opacity: 1,
                    height: 6,
                    borderRadius: 9999,
                  },
                  '& .MuiSlider-track': {
                    color: '#7c3aed',
                    height: 6,
                    borderRadius: 9999,
                  },
                  '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: '#fff',
                    border: '3px solid #7c3aed',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    '&:hover, &.Mui-focusVisible': { boxShadow: '0 0 0 8px rgba(124,58,237,0.1)' },
                  },
                }}
              />
            </div>
          </div>
        );

      case FILTER_FIELDS_TYPE.DATE_PICKER:
        return (
          <div className="space-y-4">
            {dateRange?.from && dateRange?.to && (
              <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                {format(dateRange.from, "MMM dd, yyyy")} - {format(dateRange.to, "MMM dd, yyyy")}
              </div>
            )}
            <DayPicker
              mode="range"
              numberOfMonths={1}
              selected={dateRange}
              onSelect={handleDateRangeChange}
              className="rounded-md border p-3 bg-white shadow-sm"
              showOutsideDays={true}
              fixedWeeks={true}
              modifiers={{
                range_start: dateRange?.from,
                range_end: dateRange?.to,
                range_middle: dateRange?.from && dateRange?.to ? 
                  Array.from({ length: Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)) - 1 }, (_, i) => {
                    const date = new Date(dateRange.from!);
                    date.setDate(date.getDate() + i + 1);
                    return date;
                  }) : []
              }}
              modifiersStyles={{
                range_start: {
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '6px 0 0 6px'
                },
                range_end: {
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '0 6px 6px 0'
                },
                range_middle: {
                  backgroundColor: '#dbeafe',
                  color: '#1e40af',
                  borderRadius: '0'
                }
              }}
            />
          </div>
        );

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
                <div
                  key={option}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
                >
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
        );
    }
  };

  const renderBadgeSelectedFilter = (
    fieldKey: FILTER_FIELDS_KEY,
    value?: any
  ) => {
    if (fieldKey === FILTER_FIELDS_KEY.TOTAL_EXPS) {
      return <BadgeCustom title={value} color="violet" condition={true} />;
    }
    console.log("check key", fieldKey, "check value", value);
    return (
      <BadgeCustom title={`${value.length}`} color="violet" condition={true} />
    );
  };
  return (
    <div className={`space-y-2 ${className}`}>
      <Accordion type="single"  collapsible>
        <AccordionItem
          value="item-1"
          className="border-b  border-gray-200 hover:bg-white"
        >
          <AccordionTrigger className="flex items-center cursor-pointer justify-between w-full bg-white py-3 transition-colors">
            <div className="flex items-center gap-2 justify-between w-full">
              <span className="font-medium text-gray-900">{label}</span>
              {selectedValues.length > 0 &&
                renderBadgeSelectedFilter(fieldKey, selectedValues)}
            </div>
          </AccordionTrigger>

          <AccordionContent className="mt-2 space-y-2 px-2">
            {renderContent()}

            {filteredOptions.length > 6 && 
              type !== "range" &&
              type !== "date_picker" && (
                <div className="text-start">
                  <Button
                    variant={"ghost"}
                    onClick={() => {setExpandedFilter(fieldKey)}}
                    className="text-violet-700 text-sm hover:text-violet-800"
                  >
                    More...
                  </Button>
                </div>
              )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
