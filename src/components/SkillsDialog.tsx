import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Input } from './ui/input'
import BadgeCustom from './BadgeCustom'
import { SKILL_OPTIONS } from '@/config/filterConfig'
import type { COMPETENCY } from '@/data/talents'

interface SkillRow {
  id: string
  name: string
  yoe: number
  competency: COMPETENCY
}

interface SkillsDialogProps {
  selectedSkills: string[]
  onSkillsChange: (skills: string[]) => void
}



const YOE_OPTIONS = Array.from({ length: 21 }, (_, i) => i)
const COMPETENCY_OPTIONS = ['BEGINNER', 'EXPERIENCED', 'ADVANCED', 'EXPERT']

export function SkillsDialog({ selectedSkills, onSkillsChange }: SkillsDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [skillRows, setSkillRows] = useState<SkillRow[]>([
    { id: '1', name: '', yoe: 0, competency: 'BEGINNER' }
  ])
  const [skillSearch, setSkillSearch] = useState('')

  const handleAddRow = () => {
    const newRow: SkillRow = {
      id: Date.now().toString(),
      name: '',
      yoe: 0,
      competency: 'BEGINNER'
    }
    setSkillRows([...skillRows, newRow])
  }

  const handleRemoveRow = (id: string) => {
    if (skillRows.length > 1) {
      setSkillRows(skillRows.filter(row => row.id !== id))
    }
  }

  const handleRowChange = (id: string, field: keyof SkillRow, value: string | number) => {
    setSkillRows(prev => {
      const updated = prev.map(row => (row.id === id ? { ...row, [field]: value } : row))
      if (field === 'name' && typeof value === 'string' && value) {
        const hasEmpty = updated.some(r => !r.name)
        if (!hasEmpty) {
          updated.push({ id: Date.now().toString(), name: '', yoe: 0, competency: 'BEGINNER' })
        }
      }
      return updated
    })
  }

  const handleConfirm = () => {
    const validSkills = skillRows
      .filter(row => row.name && row.name !== '')
      .map(row => `${row.name} | ${row.yoe} | ${row.competency}`)
    
    onSkillsChange(validSkills)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className='self-start'>
        <Button variant="outline" size="sm" className="gap-2 border-gray-200">
          <Plus className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      
      <DialogContent size="6xl" className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Select Skills</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {skillRows.map((row, index) => (
            <div key={row.id} className="flex items-center gap-4 p-4 rounded-lg">
              <div className="flex-1 ">
                <label className="text-sm font-medium mb-2 block">Skill Name</label>
                <Select value={row.name} onValueChange={(value) => handleRowChange(row.id, 'name', value)}>
                  <SelectTrigger className='w-full  flex-1'>
                    <SelectValue placeholder="Select skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="p-2 sticky top-0 bg-white">
                      <Input
                        placeholder="Search skill..."
                        value={skillSearch}
                        onChange={e => setSkillSearch(e.target.value)}
                        className="h-8 text-sm"
                      />
                    </div>
                    {SKILL_OPTIONS.filter(s => s.toLowerCase().includes(skillSearch.toLowerCase())).map(skill => (
                      <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Years of Experience</label>
                <Select value={row.yoe.toString()} onValueChange={(value) => handleRowChange(row.id, 'yoe', parseInt(value))}>
                  <SelectTrigger className='w-full flex-1'>
                    <SelectValue placeholder="Select YoE" />
                  </SelectTrigger>
                  <SelectContent className='w-full  flex-1'>
                    {YOE_OPTIONS.map(yoe => (
                      <SelectItem key={yoe} value={yoe.toString()}>{yoe} years</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Competency</label>
                <Select value={row.competency} onValueChange={(value) => handleRowChange(row.id, 'competency', value as any)}>
                  <SelectTrigger className='w-full flex-1'>
                    <SelectValue placeholder="Select competency" />
                  </SelectTrigger>
                  <SelectContent>
                    {COMPETENCY_OPTIONS.map(comp => (
                      <SelectItem key={comp} value={comp}>{comp}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {skillRows.length > 1 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemoveRow(row.id)}
                  className="text-gray-900 hover:text-black border-none shadow-none"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}          
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleConfirm}>
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
