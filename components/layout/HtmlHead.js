import Head from 'next/head'

import { theme } from '../styled/global'

const HtmlHead = props => {
  const { title } = props
  return (
    <>
      <Head>
        <title>Connect Social{title && ` - ${title}`}</title>

        <meta charSet='utf-8' />
        <meta name='theme-color' content={theme.primaryColor} />
        <meta name='description' content='A social media site built with Next.js' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        />
      </Head>
    </>
  )
}

export default HtmlHead
