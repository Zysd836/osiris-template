import Display from '@/components/common/Display'
import useAuth from '@/contexts/Auth/useAuth'
import { useTheme } from '@/contexts/Theme/useTheme'
import { Avatar, Button, Dropdown, MenuProps } from 'antd'
import { LogOut, Settings, User } from 'lucide-react'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Profile',
    icon: <User size={16} />,
  },
  {
    key: '2',
    label: 'Settings',
    icon: <Settings size={16} />,
  },
  {
    key: '3',
    label: 'Logout',
    danger: true,
    icon: <LogOut size={16} />,
  },
]
const UserDropdown = () => {
  const { me } = useAuth()
  const { collapsedMenu } = useTheme()
  return (
    <>
      <Dropdown menu={{ items }}>
        <Button
          size="large"
          type="text"
        >
          <Avatar size={32} />
          <Display display={!collapsedMenu}>{me?.username || 'User'}</Display>
        </Button>
      </Dropdown>
    </>
  )
}

export default UserDropdown
