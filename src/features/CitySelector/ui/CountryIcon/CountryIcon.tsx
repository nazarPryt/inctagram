import {log} from 'node:util'

import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'

import {CountryType} from '../../api'
import {CountryIconStyled} from './CountryIcon.styled'

export const CountryIcon = ({country}: {country: CountryType}) => {
    if (country.flag) {
        return (
            <CountryIconStyled>
                <Image
                    alt={`${country.name} flag icon`}
                    height={10}
                    onError={error => console.log(error)}
                    quality={20}
                    src={country.flag}
                    width={10}
                />
            </CountryIconStyled>
        )
    }

    return null
}
