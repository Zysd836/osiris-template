import Clayout from '@/components/common/clayout'
import { useTheme } from '@/contexts/Theme/useTheme'

const Footer = () => {
  const { brandName } = useTheme()
  return (
    <Clayout.Footer>
      <div>{brandName}</div>
      <div className="font-semibold">Power of {brandName}</div>
    </Clayout.Footer>
  )
}

export default Footer
