import React from 'react'

type LoginContainerProps = {
  children?: React.ReactNode
}
const LoginContainer: React.FC<LoginContainerProps> = ({ children }) => {
  return <div className=''>{children}</div>
}

export default LoginContainer
