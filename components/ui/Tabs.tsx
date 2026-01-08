'use client'

import { useState, ReactNode, Children, cloneElement, isValidElement } from 'react'
import { motion } from 'framer-motion'

interface TabsProps {
  defaultValue: string
  children: ReactNode
  className?: string
}

export function Tabs({ defaultValue, children, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  const childrenArray = Children.toArray(children)
  const tabsList = childrenArray.find((child: any) => child?.type?.name === 'TabsList')
  const tabsContent = childrenArray.filter((child: any) => child?.type?.name === 'TabsContent')

  return (
    <div className={className}>
      {tabsList && cloneElement(tabsList as any, { activeTab, setActiveTab })}
      {tabsContent.map((content: any) => 
        cloneElement(content, { key: content.props.value, activeTab })
      )}
    </div>
  )
}

interface TabsListProps {
  children: ReactNode
  className?: string
  activeTab?: string
  setActiveTab?: (value: string) => void
}

export function TabsList({ children, activeTab, setActiveTab, className = '' }: TabsListProps) {
  return (
    <div className={`flex bg-gray-100 rounded-lg p-1 ${className}`}>
      {Children.map(children, (child: any) => {
        if (isValidElement(child) && child.type.name === 'TabsTrigger') {
          return cloneElement(child, {
            activeTab,
            setActiveTab,
            isActive: child.props.value === activeTab,
          })
        }
        return child
      })}
    </div>
  )
}

interface TabsTriggerProps {
  value: string
  children: ReactNode
  activeTab?: string
  setActiveTab?: (value: string) => void
  isActive?: boolean
}

export function TabsTrigger({ value, children, activeTab, setActiveTab, isActive }: TabsTriggerProps) {
  return (
    <button
      onClick={() => setActiveTab?.(value)}
      className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors relative ${
        isActive
          ? 'text-verde-selva'
          : 'text-gray-600 hover:text-gray-800'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-white rounded-md shadow-sm"
          initial={false}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )
}

interface TabsContentProps {
  value: string
  children: ReactNode
  activeTab?: string
}

export function TabsContent({ value, children, activeTab }: TabsContentProps) {
  if (value !== activeTab) return null
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="mt-6"
    >
      {children}
    </motion.div>
  )
}
