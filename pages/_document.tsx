import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=355f51a71d4eba26b3ed240aae6eec80&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  )
}
