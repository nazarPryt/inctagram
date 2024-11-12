import {appSettings} from '@/_app/AppSettings'
import {Favicon} from '@/_app/Favicon'

export const Metadata = () => {
    return (
        <>
            <meta charSet={'utf-8'} />
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
            <meta content={appSettings.env.DOMAIN_URL} property={'og:url'} />
            <meta content={appSettings.env.OG_IMAGE_URL} property={'og:image'} />
            <meta content={'750'} property={'og:image:width'} />
            <meta content={'372'} property={'og:image:height'} />
            <meta content={'Seriously!! just drop me a line :)'} property={'og:image:alt'} />
            <Favicon />
        </>
    )
}
