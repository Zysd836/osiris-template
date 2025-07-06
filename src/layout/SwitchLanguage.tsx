import { useTheme } from '@/contexts/Theme/useTheme'
import { Button, Dropdown, Tooltip } from 'antd'
import { Languages } from 'lucide-react'
import React from 'react'

const items = [
  {
    key: 'en',
    label: 'English',
    icon: <Languages size={16} />,
  },
  {
    key: 'vi',
    label: 'Tiếng Việt',
    icon: <Languages size={16} />,
  },
  {
    key: 'fr',
    label: 'Français',
    icon: <Languages size={16} />,
  },
]
const SwitchLanguage = () => {
  const { layout } = useTheme()
  return (
    <Dropdown menu={{ items }}>
      <Button
        type="text"
        size={layout === 'top' ? 'small' : 'large'}
        icon={<Languages size={16} />}
      />
    </Dropdown>
  )
}

export default SwitchLanguage
