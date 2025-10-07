import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'info'
  className?: string
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className 
}) => {
  const variantClasses = {
    default: 'bg-silver text-darkGray',
    success: 'bg-primaryGreen text-deepNavy',
    warning: 'bg-accentYellow text-deepNavy',
    info: 'bg-primaryBlue text-white'
  }

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  )
}

export default Badge
