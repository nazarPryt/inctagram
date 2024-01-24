export const Favicon = (): JSX.Element => {
    return (
        <>
            <link href={'/favicons/apple-touch-icon.png'} rel={'apple-touch-icon'} sizes={'180x180'} />
            <link href={'/favicons/favicon-32x32.png'} rel={'icon'} sizes={'32x32'} type={'image/png'} />
            <link href={'/favicons/favicon-16x16.png'} rel={'icon'} sizes={'16x16'} type={'image/png'} />
            <link href={'/favicons/favicon.ico'} rel={'shortcut icon'} />
            <link href={'/favicons/site.webmanifest'} rel={'manifest'} />
            <link color={'#5bbad5'} href={'/favicons/safari-pinned-tab.svg'} rel={'mask-icon'} />
            <meta content={'#da532c'} name={'msapplication-TileColor'} />
            <meta content={'/favicons/browserconfig.xml'} name={'msapplication-config'} />
            <meta content={'#ffffff'} name={'theme-color'} />
        </>
    )
}
// !!! note that in the path we dont need 'public/favicons/*'

//https://dev.to/jcubic/favicon-for-next-js-and-typescript-9gk
//https://realfavicongenerator.net/
