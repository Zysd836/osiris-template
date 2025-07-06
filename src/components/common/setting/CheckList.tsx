import { cn } from '@/utils/styles'
import { CheckCircle } from 'lucide-react'
import React from 'react'

type CheckListProps<T> = {
  items: (T & { key: string })[]
  checkedValue?: string
  onChange?: (value: T & { key: string }) => void
  renderItem?: (item: T & { key: string }) => React.ReactNode
  classContainer?: string
  classItem?: string
}
const CheckList = <T,>({ items, checkedValue, onChange, renderItem, classContainer, classItem }: CheckListProps<T>) => {
  return (
    <div className={cn('flex gap-4', classContainer)}>
      {items.map((item) => {
        return (
          <div
            onClick={() => onChange?.(item)}
            key={item.key}
            className={cn('flex flex-col items-center', 'cursor-pointer', classItem)}
          >
            {renderItem?.(item)}
            {checkedValue === item.key ? (
              <CheckCircle
                className="text-green-500"
                size={16}
              />
            ) : (
              <CheckCircle
                className="text-transparent"
                size={16}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CheckList
