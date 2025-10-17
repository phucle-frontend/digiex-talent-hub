import { useEffect, useState } from "react";
import { SearchIcon, Minimize2, CircleX } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FilterField } from "./FilterField";
import { filterFields, defaultFilters } from "../config/filterConfig";

interface FilterSectionProps {
  isOpen: boolean;
  onClose: () => void;
  values?: Record<string, string>;
  onValuesChange?: (values: Record<string, string>) => void;
  searchValue?: string;
  onSearch?: (payload: {
    search: string;
    values: Record<string, string>;
  }) => void;
  isClear?: boolean;
}

export function FilterSection({
  isOpen,
  onClose,
  values,
  onValuesChange,
  searchValue = "",
  onSearch,
  isClear = false,
}: FilterSectionProps) {
  const [filters, setFilters] = useState(defaultFilters);
  const [searchText, setSearchText] = useState<string>(searchValue);

  useEffect(() => {
    if (values) {
      setFilters((prev) => ({ ...prev, ...values }));
    }
  }, [values]);

  useEffect(() => {
    if (isClear) {
      setSearchText("");
    }
  }, [isClear]);

  useEffect(() => {
    setSearchText(searchValue ?? "");
  }, [searchValue]);

  const handleClearFilters = () => {
    setSearchText("");
    setFilters(defaultFilters);
    onValuesChange?.(defaultFilters);
  };

  const handleSearch = () => {
    onSearch?.({ search: searchText, values: filters });
  };

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => {
      const next = { ...prev, [key]: value } as Record<string, string>;
      onValuesChange?.(next);
      return next as typeof defaultFilters;
    });
  };

  return (
    <div
      className={`
        overflow-hidden transition-all duration-500 ease-in-out transform
        ${
          isOpen
            ? "max-h-[600px] opacity-100 translate-y-0 mb-4"
            : "max-h-0 opacity-0 -translate-y-2 mt-4"
        }
      `}
    >
      <div className="bg-gray-50 rounded-lg p-3">
        <div className="grid grid-cols-12 gap-4">
          <div className="space-y-2 col-span-4 text-start">
            <label className="text-xs font-semibold text-gray-700">
              Search for Talent
            </label>
            <div className="relative mt-1">
              <Input
                className="pl-8 text-sm border-gray-300"
                placeholder="Search by Email/Name"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <SearchIcon className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          {filterFields.map((field) => (
            <FilterField
              key={field.key}
              label={field.label}
              value={
                (values?.[field.key] as string) ??
                (filters[field.key as keyof typeof filters] as string)
              }
              options={field.options}
              onValueChange={(value) => updateFilter(field.key, value)}
            />
          ))}
        </div>

        {/* action btns */}
        <div className="flex justify-end gap-3 pt-4 ">
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-violet-600 hover:text-violet-700 hover:bg-violet-50 flex items-center gap-2"
          >
            <Minimize2 className="w-4 h-4" />
            Close
          </Button>

          <Button
            variant="outline"
            onClick={handleClearFilters}
            className="text-gray-600 hover:text-gray-700 border-gray-200 hover:bg-gray-50 flex items-center gap-2"
          >
            <CircleX />
            Clear Filters
          </Button>

          <Button
            onClick={handleSearch}
            className="bg-violet-600 hover:bg-violet-700 text-white flex items-center gap-2"
          >
            <SearchIcon className="w-4 h-4" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
