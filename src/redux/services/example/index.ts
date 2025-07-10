import { MethodType } from '@/types/enum'
import { baseApi } from '@/redux/api'
export * from './types'

export const ExampleTags = {
  namespace: 'Example',
  id: [],
}

export const exampleApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [ExampleTags.namespace],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      createExample: builder.mutation<Schema.ResponseType<string>, Schema.RequestType<undefined, { title: string }>>({
        query: (query) => ({
          method: MethodType.POST,
          url: `/posts`,
          body: query,
        }),
        invalidatesTags: [ExampleTags.namespace],
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          const result = await queryFulfilled
          // write logic here
        },
      }),
      getPostById: builder.query<Schema.ResponseType<string>, Schema.RequestType<{ postId: number }, undefined>>({
        query: (query) => ({
          method: MethodType.GET,
          url: `/comments`,
        }),
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          const result = await queryFulfilled
          // write logic here
        },
      }),
    }),
  })
export const { useCreateExampleMutation, useGetPostByIdQuery, useLazyGetPostByIdQuery } = exampleApi
