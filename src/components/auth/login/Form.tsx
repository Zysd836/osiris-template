import useAuth from '@/contexts/Auth/useAuth'
import { initialAuthValues } from '@/utils/auth.mock'
import { useNavigate } from '@tanstack/react-router'
import { Button, Checkbox, Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { Lock, User } from 'lucide-react'

const LoginForm = () => {
  const [form] = useForm<Schema.LoginRequest>()
  const navigate = useNavigate()
  const auth = useAuth()

  const onFinished = (values: Schema.LoginRequest) => {
    auth.login(values, navigate)
  }
  return (
    <Form
      form={form}
      onFinish={onFinished}
      initialValues={initialAuthValues}
    >
      <Form.Item
        name="username"
        className="mb-2"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input
          prefix={<User size={20} />}
          width={320}
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          prefix={<Lock size={20} />}
          width={320}
          size="large"
        />
      </Form.Item>
      <div className="w-full flex justify-between items-center mb-4">
        <Form.Item
          name="remember"
          valuePropName="checked"
          className="mb-0"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <span>Forgot password?</span>
      </div>
      <Form.Item className="text-center">
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
