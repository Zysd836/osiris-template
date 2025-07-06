import useAuth from '@/contexts/Auth/useAuth'
import { useTheme } from '@/contexts/Theme/useTheme'
import { Avatar, Button, Dropdown, MenuProps } from 'antd'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Profile',
  },
  {
    key: '2',
    label: 'Settings',
  },
  {
    key: '3',
    label: 'Logout',
  },
]
const UserDropdown = () => {
  const { layout } = useTheme()
  const { me } = useAuth()
  return (
    <>
      {layout === 'top' ? (
        <Dropdown menu={{ items }}>
          <Button
            type="text"
            size="large"
          >
            <Avatar size={32} />
            {me?.username || 'User'}
          </Button>
        </Dropdown>
      ) : (
        <Dropdown menu={{ items }}>
          <Button
            size="large"
            type="text"
          >
            <Avatar size={32} />
            {me?.username || 'User'}
          </Button>
        </Dropdown>
      )}
    </>
  )
}

export default UserDropdown
