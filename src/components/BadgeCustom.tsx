import { FEEDBACK_COMMENT } from "@/data/talents"
import { cn } from "@/lib/utils"
import { CircleAlert, Laugh, ThumbsUp } from "lucide-react"

type BadgeColor =
  | "green"
  | "blue"
  | "red"
  | "violet"
  | "amber"
  | "indigo"
  | "sky"
  | "gray"

type BadgeCustomProps = {
  title: string
  color?: BadgeColor
  condition: boolean
  className?: string
  icon?: React.ReactNode
}

const COLOR_STYLES: Record<BadgeColor, { bg: string; border: string; text: string }> = {
  green: { bg: "bg-green-100", border: "border-green-300", text: "text-green-800" },
  blue: { bg: "bg-blue-100", border: "border-blue-300", text: "text-blue-800" },
  red: { bg: "bg-red-100", border: "border-red-300", text: "text-red-800" },
  violet: { bg: "bg-violet-100", border: "border-violet-300", text: "text-violet-800" },
  amber: { bg: "bg-amber-100", border: "border-amber-300", text: "text-amber-800" },
  indigo: { bg: "bg-indigo-100", border: "border-indigo-300", text: "text-indigo-800" },
  sky: { bg: "bg-sky-100", border: "border-sky-300", text: "text-sky-800" },
  gray: { bg: "bg-gray-100", border: "border-gray-300", text: "text-gray-800" },
}

const GRAY_STYLE = { bg: "bg-gray-100", border: "border-gray-300", text: "text-gray-800" }

export default function BadgeCustom({ title, color= 'gray', condition, className, icon }: BadgeCustomProps) {
  const palette = condition ? COLOR_STYLES[color] : GRAY_STYLE

  return (
    <div
      className={cn(
        "rounded-full text-xs font-medium inline-flex items-center justify-center gap-1 px-2 py-0.5",
        "border",
        palette.bg,
        palette.border,
        palette.text,
        className
      )}
    >
      {icon       }
      {title}
    </div>
  )
}

export const BadgeCustomEvaluation = ({ title, condition, className }: BadgeCustomProps) => {
  
  const colorEvaluation = title === FEEDBACK_COMMENT.VERY_GOOD
      ? "green"
      : title === FEEDBACK_COMMENT.GOOD
      ? "blue"
      : "amber";
      const iconEvaluation = title === FEEDBACK_COMMENT.VERY_GOOD
      ? <Laugh className="w-3 h-3 text-green-600" />
      : title === FEEDBACK_COMMENT.GOOD
      ? <ThumbsUp className="w-3 h-3 text-blue-600" />
      : <CircleAlert className="w-3 h-3 text-amber-600" />;
  return <BadgeCustom title={title} color={colorEvaluation} condition={condition} icon={iconEvaluation} className={className} />;
};