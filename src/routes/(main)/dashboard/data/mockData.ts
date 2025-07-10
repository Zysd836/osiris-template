// Mock data for dashboard components
export const revenueData = [
  { month: 'Jan', revenue: 4000, profit: 2400 },
  { month: 'Feb', revenue: 3000, profit: 1398 },
  { month: 'Mar', revenue: 2000, profit: 9800 },
  { month: 'Apr', revenue: 2780, profit: 3908 },
  { month: 'May', revenue: 1890, profit: 4800 },
  { month: 'Jun', revenue: 2390, profit: 3800 },
  { month: 'Jul', revenue: 3490, profit: 4300 },
]

export const userActivityData = [
  { time: '00:00', users: 120 },
  { time: '04:00', users: 80 },
  { time: '08:00', users: 450 },
  { time: '12:00', users: 650 },
  { time: '16:00', users: 580 },
  { time: '20:00', users: 380 },
  { time: '24:00', users: 200 },
]

export const categoryData = [
  { category: 'Technology', value: 35 },
  { category: 'Design', value: 25 },
  { category: 'Marketing', value: 20 },
  { category: 'Sales', value: 15 },
  { category: 'Others', value: 5 },
]

export const categoryColors = ['#3498DB', '#2ECC71', '#E74C3C', '#F1C40F', '#9B59B6']

export const recentActivities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'completed project',
    target: 'Mobile App UI',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'created new',
    target: 'Design System',
    time: '4 hours ago',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    action: 'updated',
    target: 'API Documentation',
    time: '6 hours ago',
  },
  {
    id: 4,
    user: 'Sarah Wilson',
    action: 'reviewed',
    target: 'Code Review #123',
    time: '8 hours ago',
  },
]

export const projectsData = [
  { name: 'Mobile App', progress: 85, color: '#52c41a' },
  { name: 'Website Redesign', progress: 62, color: '#1890ff' },
  { name: 'API Development', progress: 94, color: '#722ed1' },
]

export const serverData = [
  { name: 'CPU Usage', value: '2.4 GHz', progress: 45, color: '#52c41a' },
  { name: 'Memory', value: '8.2 GB', progress: 68, color: '#faad14' },
  { name: 'Storage', value: '256 GB', progress: 32, color: '#1890ff' },
]

export const teamData = [
  {
    name: 'John Doe',
    role: 'Developer',
    initials: 'JD',
    avatarColor: '#87d068',
    status: 'Active' as const,
    statusColor: 'green' as const,
  },
  {
    name: 'Jane Smith',
    role: 'Designer',
    initials: 'JS',
    avatarColor: '#f56a00',
    status: 'Online' as const,
    statusColor: 'blue' as const,
  },
  {
    name: 'Mike Johnson',
    role: 'Manager',
    initials: 'MJ',
    avatarColor: '#7265e6',
    status: 'Away' as const,
    statusColor: 'orange' as const,
  },
]

export const topProducts = [
  { key: '1', name: 'iPhone 15 Pro', sales: 1234, revenue: '$123,400', trend: 'up' as const },
  { key: '2', name: 'MacBook Pro M3', sales: 856, revenue: '$171,200', trend: 'up' as const },
  { key: '3', name: 'iPad Air', sales: 642, revenue: '$38,520', trend: 'down' as const },
  { key: '4', name: 'Apple Watch', sales: 534, revenue: '$26,700', trend: 'up' as const },
  { key: '5', name: 'AirPods Pro', sales: 423, revenue: '$10,575', trend: 'down' as const },
]

export const statsCardsData = [
  {
    title: 'Total Revenue',
    value: 245670,
    prefix: '$',
    icon: 'DollarSign',
    iconBgColor: 'bg-blue-100 dark:bg-blue-900',
    iconColor: 'text-blue-600 dark:text-blue-400',
    valueColor: '#3f8600',
    trend: {
      value: '+12.5%',
      type: 'up' as const,
      color: 'text-green-500',
    },
  },
  {
    title: 'Active Users',
    value: 12458,
    icon: 'Users',
    iconBgColor: 'bg-green-100 dark:bg-green-900',
    iconColor: 'text-green-600 dark:text-green-400',
    valueColor: '#3f8600',
    trend: {
      value: '+8.2%',
      type: 'up' as const,
      color: 'text-green-500',
    },
  },
  {
    title: 'Orders',
    value: 3429,
    icon: 'ShoppingCart',
    iconBgColor: 'bg-purple-100 dark:bg-purple-900',
    iconColor: 'text-purple-600 dark:text-purple-400',
    valueColor: '#722ed1',
    trend: {
      value: '-2.1%',
      type: 'down' as const,
      color: 'text-red-500',
    },
  },
  {
    title: 'Page Views',
    value: 89241,
    icon: 'Eye',
    iconBgColor: 'bg-orange-100 dark:bg-orange-900',
    iconColor: 'text-orange-600 dark:text-orange-400',
    valueColor: '#fa8c16',
    trend: {
      value: '+15.3%',
      type: 'up' as const,
      color: 'text-green-500',
    },
  },
]
