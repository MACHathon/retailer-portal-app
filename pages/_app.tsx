import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import MainLayout from '@/components/shared-components/layouts/main-layout'
import NotificationProvider from 'context/notification-context/notification'

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ChakraProvider>
      <NotificationProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </NotificationProvider>
    </ChakraProvider>
  )
}
export default MyApp
