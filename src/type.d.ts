declare namespace Schema {
  type LoginRequest = {
    username: string
    password: string
    remember: boolean
  }
  type Me = {
    id: string
    username: string
  }
}
