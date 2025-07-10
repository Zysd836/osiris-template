import { useTheme } from '@/contexts/Theme/useTheme'
import { Typography } from 'antd'
import React from 'react'

const Header = () => {
  const { brandName, description } = useTheme()
  return (
    <header className="text-center mb-8">
      <Typography.Title className="">{brandName}</Typography.Title>
      <Typography.Text>{description}</Typography.Text>
    </header>
  )
}

export default Header
