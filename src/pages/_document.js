import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="!scroll-smooth h-full">
        <Head />
        <body className='h-full theme-switch'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument