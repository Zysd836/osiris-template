import React from 'react'

type LoginContainerProps = {
  children?: React.ReactNode
}
const LoginContainer: React.FC<LoginContainerProps> = ({ children }) => {
  return (
    <section className="flex flex-col items-center justify-center h-dvh w-dvw bg-[url(/public/auth.png)] bg-cover bg-center">
      {children}
    </section>
  )
}

export default LoginContainer
