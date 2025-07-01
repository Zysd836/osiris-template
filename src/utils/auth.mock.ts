export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export const initialAuthValues = {
  remember: true,
  username: 'admin',
  password: 'osiris.team',
}
export const fetchMe = async () => {
  await sleep(2000) // Simulate network delay
  return {
    id: '1',
    username: 'admin',
  }
}
