import {PATH} from '@/_app/AppSettings'
import {useScreenDetector} from '@/shared/hooks/useAdaptive'
import {AddIcon, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {ProfileNavigationStyled} from './ProfileNavigation.styled'

const re = [
    {href: `./${PATH.GENERAL_INFORMATION}`, icon: <AddIcon />, title: 'General Information'},
    {href: `./${PATH.DEVICES}`, icon: <AddIcon />, title: 'Devices'},
    {href: `./${PATH.ACCOUNT_MANAGEMENT}`, icon: <AddIcon />, title: 'Account Management'},
    {href: `./${PATH.MY_PAYMENTS}`, icon: <AddIcon />, title: 'My Payments'},
] as const

export const ProfileNavigation = () => {
    const {isMobile} = useScreenDetector()
    const active = true

    return (
        <ProfileNavigationStyled>
            {re.map(nav => {
                return (
                    <Link className={active ? 'active' : ''} href={nav.href} key={nav.title}>
                        {!isMobile && nav.title}
                        {isMobile && nav.icon}
                    </Link>
                )
            })}
        </ProfileNavigationStyled>
    )
}
