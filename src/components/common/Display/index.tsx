import React from 'react'

type DisplayProps = {
  children?: React.ReactNode
  display: boolean
  fallback?: React.ReactNode
}
const Display: React.FC<DisplayProps> = ({ display, children, fallback = null }) => {
  return <>{display ? children : fallback}</>
}

export default Display
