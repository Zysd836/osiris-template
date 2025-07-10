declare namespace Schema {
  type RequestType<T, P> = {
    body?: T
    params?: P
  }
  type ResponseType<T> = {
    data: T
  }
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
