import { Avatar, Dropdown, MenuProps } from 'antd'

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
  return (
    <Dropdown menu={{ items }}>
      <Avatar
        className="cursor-pointer"
        size={32}
      />
    </Dropdown>
  )
}

export default UserDropdown
