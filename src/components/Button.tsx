import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primaryBlue to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-primaryBlue shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-primaryGreen to-green-500 text-deepNavy hover:from-green-400 hover:to-green-600 focus:ring-primaryGreen shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primaryBlue text-primaryBlue hover:bg-gradient-to-r hover:from-primaryBlue hover:to-blue-600 hover:text-white focus:ring-primaryBlue shadow-lg hover:shadow-xl'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
