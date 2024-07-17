import { getLocalStorageValue } from '@/lib/utils'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SignInDto } from './authApi'
import { localeStorageConst } from '@/lib/constants'

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:5224/api/',
    prepareHeaders: (headers, api) => {
      if (api.endpoint === 'signIn') return headers
      const signInInfo = getLocalStorageValue<SignInDto>(localeStorageConst.signIn)
      if (signInInfo && signInInfo.accessToken) {
        headers.set('authorization', `Bearer ${signInInfo.accessToken}`)
      }
      return headers
    },
  }),
  endpoints: () => ({}),
})

