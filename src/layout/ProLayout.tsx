import Logo from '@/components/common/logo'
import { Layout, Menu } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React from 'react'

interface ProLayoutProps {
  children?: React.ReactNode
}
const mockMenuItems = [
  { key: '1', label: 'Home' },
  { key: '2', label: 'About' },
  { key: '3', label: 'Contact' },
]
const ProLayout: React.FC<ProLayoutProps> = ({ children }) => {
  return (
    <Layout className="bg-gray-200">
      <Header className="bg-white dark:bg-black flex items-center p-4">
        <Logo.Header />
        <div className="flex-1">
          <Menu
            mode="horizontal"
            items={mockMenuItems}
          />
        </div>
      </Header>
      <Layout className="">
        <Sider className="fixed w-[200px] h-[calc(100dvh-64px)]">
          <Menu
            className="h-full"
            items={mockMenuItems}
          />
        </Sider>
        <Content>{children}</Content>
      </Layout>
      <Footer className="p-4 bg-gray-200">Footer</Footer>
    </Layout>
  )
}

export default ProLayout
