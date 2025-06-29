import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'

const LoginForm = () => {
  const [form] = useForm()
  return (
    <Form form={form}>
      <Form.Item name="username">
        <Input
          width={320}
          size="large"
        />
      </Form.Item>
      <Form.Item name="username">
        <Input.Password
          width={320}
          size="large"
        />
      </Form.Item>
      <Form.Item className="text-center">
        <Button>Login</Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
