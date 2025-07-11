/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as mainRouteRouteImport } from './routes/(main)/route'
import { Route as IndexRouteImport } from './routes/index'
import { Route as mainDemoRouteRouteImport } from './routes/(main)/demo/route'
import { Route as mainPermissionIndexRouteImport } from './routes/(main)/permission/index'
import { Route as mainDashboardIndexRouteImport } from './routes/(main)/dashboard/index'
import { Route as authLoginIndexRouteImport } from './routes/(auth)/login/index'
import { Route as mainDemoAbcIndexRouteImport } from './routes/(main)/demo/abc/index'

const mainRouteRoute = mainRouteRouteImport.update({
  id: '/(main)',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const mainDemoRouteRoute = mainDemoRouteRouteImport.update({
  id: '/demo',
  path: '/demo',
  getParentRoute: () => mainRouteRoute,
} as any)
const mainPermissionIndexRoute = mainPermissionIndexRouteImport.update({
  id: '/permission/',
  path: '/permission/',
  getParentRoute: () => mainRouteRoute,
} as any)
const mainDashboardIndexRoute = mainDashboardIndexRouteImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => mainRouteRoute,
} as any)
const authLoginIndexRoute = authLoginIndexRouteImport.update({
  id: '/(auth)/login/',
  path: '/login/',
  getParentRoute: () => rootRouteImport,
} as any)
const mainDemoAbcIndexRoute = mainDemoAbcIndexRouteImport.update({
  id: '/abc/',
  path: '/abc/',
  getParentRoute: () => mainDemoRouteRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof mainRouteRouteWithChildren
  '/demo': typeof mainDemoRouteRouteWithChildren
  '/login': typeof authLoginIndexRoute
  '/dashboard': typeof mainDashboardIndexRoute
  '/permission': typeof mainPermissionIndexRoute
  '/demo/abc': typeof mainDemoAbcIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof mainRouteRouteWithChildren
  '/demo': typeof mainDemoRouteRouteWithChildren
  '/login': typeof authLoginIndexRoute
  '/dashboard': typeof mainDashboardIndexRoute
  '/permission': typeof mainPermissionIndexRoute
  '/demo/abc': typeof mainDemoAbcIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/(main)': typeof mainRouteRouteWithChildren
  '/(main)/demo': typeof mainDemoRouteRouteWithChildren
  '/(auth)/login/': typeof authLoginIndexRoute
  '/(main)/dashboard/': typeof mainDashboardIndexRoute
  '/(main)/permission/': typeof mainPermissionIndexRoute
  '/(main)/demo/abc/': typeof mainDemoAbcIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/demo'
    | '/login'
    | '/dashboard'
    | '/permission'
    | '/demo/abc'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/demo' | '/login' | '/dashboard' | '/permission' | '/demo/abc'
  id:
    | '__root__'
    | '/'
    | '/(main)'
    | '/(main)/demo'
    | '/(auth)/login/'
    | '/(main)/dashboard/'
    | '/(main)/permission/'
    | '/(main)/demo/abc/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  mainRouteRoute: typeof mainRouteRouteWithChildren
  authLoginIndexRoute: typeof authLoginIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(main)': {
      id: '/(main)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof mainRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(main)/demo': {
      id: '/(main)/demo'
      path: '/demo'
      fullPath: '/demo'
      preLoaderRoute: typeof mainDemoRouteRouteImport
      parentRoute: typeof mainRouteRoute
    }
    '/(main)/permission/': {
      id: '/(main)/permission/'
      path: '/permission'
      fullPath: '/permission'
      preLoaderRoute: typeof mainPermissionIndexRouteImport
      parentRoute: typeof mainRouteRoute
    }
    '/(main)/dashboard/': {
      id: '/(main)/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof mainDashboardIndexRouteImport
      parentRoute: typeof mainRouteRoute
    }
    '/(auth)/login/': {
      id: '/(auth)/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(main)/demo/abc/': {
      id: '/(main)/demo/abc/'
      path: '/abc'
      fullPath: '/demo/abc'
      preLoaderRoute: typeof mainDemoAbcIndexRouteImport
      parentRoute: typeof mainDemoRouteRoute
    }
  }
}

interface mainDemoRouteRouteChildren {
  mainDemoAbcIndexRoute: typeof mainDemoAbcIndexRoute
}

const mainDemoRouteRouteChildren: mainDemoRouteRouteChildren = {
  mainDemoAbcIndexRoute: mainDemoAbcIndexRoute,
}

const mainDemoRouteRouteWithChildren = mainDemoRouteRoute._addFileChildren(
  mainDemoRouteRouteChildren,
)

interface mainRouteRouteChildren {
  mainDemoRouteRoute: typeof mainDemoRouteRouteWithChildren
  mainDashboardIndexRoute: typeof mainDashboardIndexRoute
  mainPermissionIndexRoute: typeof mainPermissionIndexRoute
}

const mainRouteRouteChildren: mainRouteRouteChildren = {
  mainDemoRouteRoute: mainDemoRouteRouteWithChildren,
  mainDashboardIndexRoute: mainDashboardIndexRoute,
  mainPermissionIndexRoute: mainPermissionIndexRoute,
}

const mainRouteRouteWithChildren = mainRouteRoute._addFileChildren(
  mainRouteRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  mainRouteRoute: mainRouteRouteWithChildren,
  authLoginIndexRoute: authLoginIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
