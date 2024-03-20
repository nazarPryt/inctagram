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
                    <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
                    <meta content={'The site for enthusiastic web developer'} name={'description'} />
                    <meta content={'Next, JS, Social network'} name={'keywords'} />
                    <meta content={'website'} property={'og:type'} />
                    <meta content={'Instareplica'} property={'og:title'} />
                    <meta
                        content={
                            'Instareplica: A next-gen social media platform blending the best features of popular apps. Share photos, videos, and stories with interactive features like live streaming and polls. Prioritizes privacy and security while fostering authentic connections worldwide.'
                        }
                        property={'og:description'}
                    />
                    <meta content={appSettings.DOMAIN_URL} property={'og:url'} />
                    <meta content={appSettings.OG_IMAGE_URL} property={'og:image'} />
                    <meta content={'750'} property={'og:image:width'} />
                    <meta content={'372'} property={'og:image:height'} />
                    <meta content={'Seriously!! just drop me a line :)'} property={'og:image:alt'} />
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
