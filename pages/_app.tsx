import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import MainLayout from '@/components/shared-components/layouts/main-layout'

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}
export default MyApp
