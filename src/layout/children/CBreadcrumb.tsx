import { isMatch, useMatches } from '@tanstack/react-router'
import { Breadcrumb, BreadcrumbProps } from 'antd'
import { Home } from 'lucide-react'
import React, { useCallback, useMemo } from 'react'

const CBreadcrumb = () => {
  const matches = useMatches()

  const matchesWithCrumbs = useMemo(() => {
    if (matches.some((match) => match.status === 'pending')) return null
    return matches.filter((match) => isMatch(match, 'loaderData.crumb'))
  }, [matches])
  const transformBreadcrumbs = useCallback((crumbs: typeof matchesWithCrumbs) => {
    const initBreadcrumbs = [
      {
        title: 'Home',
        icon: <Home size={16} />,
      },
    ]
    const newBreadCrumbs: BreadcrumbProps['items'] =
      crumbs?.map((crumb) => ({
        title: crumb?.loaderData?.crumb?.title || '',
        href: crumb?.pathname,
      })) || []
    return [...initBreadcrumbs, ...newBreadCrumbs]
  }, [])
  return <Breadcrumb items={transformBreadcrumbs(matchesWithCrumbs)} />
}

export default React.memo(CBreadcrumb)
