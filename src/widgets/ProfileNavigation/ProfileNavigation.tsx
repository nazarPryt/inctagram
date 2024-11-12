import {PATH} from '@/_app/AppSettings'
import {useScreenDetector} from '@/shared/hooks/useScreenDetector'
import {matchesPathname} from '@/shared/utils/MatchesPathname'
import {AddIcon, DateIcon, PaymentIcon, ProfileIcon} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {ProfileNavigationStyled} from './ProfileNavigation.styled'

const ProfileNavigationsTabs = [
    {href: `./${PATH.GENERAL_INFORMATION}`, icon: <ProfileIcon />, title: 'General Information'},
    {href: `./${PATH.DEVICES}`, icon: <DateIcon />, title: 'Devices'},
    {href: `./${PATH.ACCOUNT_MANAGEMENT}`, icon: <AddIcon />, title: 'Account Management'},
    {href: `./${PATH.MY_PAYMENTS}`, icon: <PaymentIcon />, title: 'My Payments'},
] as const

export const ProfileNavigation = () => {
    const {pathname} = useRouter()
    const {isMobile} = useScreenDetector()

    return (
        <ProfileNavigationStyled>
            {ProfileNavigationsTabs.map(nav => {
                return (
                    <Link
                        className={matchesPathname(nav.href, pathname) ? 'active' : ''}
                        href={nav.href}
                        key={nav.title}
                    >
                        {!isMobile && nav.title}
                        {isMobile && nav.icon}
                    </Link>
                )
            })}
        </ProfileNavigationStyled>
    )
}
