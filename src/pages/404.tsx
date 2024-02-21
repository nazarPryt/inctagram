import {Button} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styled from 'styled-components'

import notFoundImage from '../../public/pictures/404.png' //todo make alies import

export const NotFoundStyled = styled.div`
    position: relative;
    height: 100vh;

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
export default function NotFound() {
    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }

    return (
        <NotFoundStyled>
            <div className={'box'}>
                <h1>Page not Found</h1>
                <Button onClick={handleGoBack} variant={'text'}>
                    Go Back
                </Button>
                <Image alt={'not Found Image'} height={500} src={notFoundImage} width={500} />
            </div>
        </NotFoundStyled>
    )
}
