import { Input } from './ui/input'
import { SearchIcon } from 'lucide-react'

type Props = {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

const SearchInput = ({ placeholder, value, onChange }: Props) => {
  return (
    <div className="flex items-center gap-2 relative">
      <Input
        className="pl-8 text-sm"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <SearchIcon className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
    </div>
  )
}

export default SearchInput