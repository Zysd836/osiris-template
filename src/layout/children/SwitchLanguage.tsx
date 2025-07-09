import { Button, Dropdown } from 'antd'
import { Languages } from 'lucide-react'
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
  return (
    <Dropdown menu={{ items }}>
      <Button
        type="text"
        size={'large'}
        icon={<Languages size={16} />}
      />
    </Dropdown>
  )
}

export default SwitchLanguage
