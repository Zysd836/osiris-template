import React from 'react'
import { Spin } from 'antd'
type SpinnerProps = {
  loading?: boolean
}
const Spinner: React.FC<SpinnerProps> = ({ loading = false }) => {
  return <Spin spinning={loading}></Spin>
}

export default Spinner
