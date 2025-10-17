import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const ButtonIcon = ({icon, className}: {icon: React.ReactNode, className?: string}) => {
    return (
        <Button
        variant="outline"
        className={cn("border-none shadow-none bg-transparent", className)}
        size="icon"
      >
            {icon}
      </Button>
      )
}

export default ButtonIcon