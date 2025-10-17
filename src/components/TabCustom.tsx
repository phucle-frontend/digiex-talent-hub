import * as React from "react"
import { cn } from "@/lib/utils"

interface TabItem {
  id: string
  label: string
  content?: React.ReactNode
}

interface TabCustomProps {
  items: TabItem[]
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function TabCustom({
  items,
  defaultValue,
  value,
  onValueChange,
  className,
}: TabCustomProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue || items[0]?.id)

  const currentValue = value ?? activeTab

  const handleTabClick = (tabId: string) => {
    if (onValueChange) {
      onValueChange(tabId)
    } else {
      setActiveTab(tabId)
    }
  }

  return (
    <div className={cn("w-full h-full", className)}>
      {/* Tab Navigation */}
      <div className="relative">
        <div className="flex space-x-8 border-b border-gray-200">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={cn(
                "relative pb-4 text-sm font-medium transition-all duration-200 ease-in-out",
                "focus:outline-none focus:ring-0",
                currentValue === item.id
                  ? "text-violet-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {item.label}
              
              {/* Active indicator */}
              {currentValue === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600 rounded-full transition-all duration-200 ease-in-out" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "mt-6 transition-all h-full duration-200 ease-in-out",
            currentValue === item.id
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 absolute pointer-events-none"
          )}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
