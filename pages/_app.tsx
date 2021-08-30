import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import '../styles/globals.css'
import MainLayout from '@/components/shared-components/layouts/main-layout'
import NotificationProvider from 'context/notification-context/notification'

import { Fonts } from "../lib/Fonts";

const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
})

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NotificationProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </NotificationProvider>
    </ChakraProvider>
  )
}
export default MyApp
