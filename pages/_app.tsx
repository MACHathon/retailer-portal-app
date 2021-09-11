import App, { AppContext, AppProps } from "next/app";
import { ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { getLocale, LocaleContext, UnknownLocale } from "lib/translations";

import "../styles/globals.css";
import MainLayout from "@/components/shared-components/layouts/main-layout";
import NotificationProvider from "context/notification-context/notification";

import { Fonts } from "../packages/Fonts";

const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
});

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
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { pageProps, ...other } = await App.getInitialProps(appContext);
  const locale = getLocale(appContext.ctx.query.locale);

  switch (locale) {
    case UnknownLocale:
      appContext?.ctx?.res?.writeHead(302, { Location: "/" }).end();
      break;
    case undefined:
      return { pageProps, ...other };
    default:
      return { pageProps: { ...pageProps, locale }, ...other };
  }
};

export default MyApp;
