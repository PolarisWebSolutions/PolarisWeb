import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  title, 
  description 
}) => {
  return (
    <div className={cn(
      'bg-white rounded-xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-shadow duration-300',
      className
    )}>
      {title && (
        <h3 className="text-lg font-bold text-deepNavy mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-mediumGray mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

export default Card
