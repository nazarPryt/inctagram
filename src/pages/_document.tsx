import {appSettings} from '@/_app/AppSettings'
import {Favicon} from '@/_app/Favicon'
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()

        try {
            ctx.renderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
            })

            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet={'utf-8'} />
                    <meta content={'The site for enthusiastic web developer'} name={'description'} />
                    <meta content={'Next, JS, Social network'} name={'keywords'} />
                    <meta content={'website'} property={'og:type'} />
                    <meta content={'Inctareplica'} property={'og:title'} />
                    <meta content={'This is the Open graph description'} property={'og:description'} />
                    <meta content={appSettings.DOMAIN_URL} property={'og:url'} />
                    <meta
                        content={'https://maxwellinvestmentsgroup.com/wp-content/uploads/2020/07/IMG_1475.png'}
                        property={'og:image'}
                    />
                    <Favicon />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
