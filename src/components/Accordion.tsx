'use client'

import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen?: boolean
  onToggle?: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  children, 
  isOpen = false, 
  onToggle 
}) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium text-white hover:text-primaryBlue focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:ring-offset-2 focus:ring-offset-black"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDownIcon 
          className={cn(
            'h-5 w-5 text-white transition-transform duration-200',
            isOpen && 'rotate-180'
          )} 
        />
      </button>
      <div className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="pb-4 text-gray-300">
          {children}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  children: React.ReactNode
  className?: string
}

const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  return (
    <div className={cn('space-y-0', className)}>
      {children}
    </div>
  )
}

export { Accordion, AccordionItem }
