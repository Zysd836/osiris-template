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
export type LoaderDataRoute = {
  crumb?: {
    title: string
  }
  isContainer?: boolean // Optional property to indicate if the route is a container
}
