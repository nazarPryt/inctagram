import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import {Favicon} from '_app/Favicon/Favicon'

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
                <Head lang='en'>
                    <link rel='preload' href='/fonts/inter-latin-400.woff' as='font' type='font/woff' crossOrigin='' />
                    <link rel='preload' href='/fonts/inter-latin-500.woff' as='font' type='font/woff' crossOrigin='' />
                    <link rel='preload' href='/fonts/inter-latin-600.woff' as='font' type='font/woff' crossOrigin='' />
                    <link rel='preload' href='/fonts/inter-latin-700.woff' as='font' type='font/woff' crossOrigin='' />
                    {
                        // @ts-ignore
                        this.props.styleTags
                    }
                    <meta charSet='utf-8' />
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
// import React from 'react'
//
// import {Html, Head, Main, NextScript} from 'next/document'
// import {Favicon} from '_app/Favicon/Favicon'
//
// export default function Document() {
//     return (
//         <Html lang='en'>
//             <Head>
//                 <meta charSet='utf-8' />
//                 <Favicon />
//             </Head>
//             <body>
//                 <Main />
//                 <NextScript />
//             </body>
//         </Html>
//     )
// }
