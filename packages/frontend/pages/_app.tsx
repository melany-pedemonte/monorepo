import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (<Component {...pageProps} />);
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

export default MyApp;
