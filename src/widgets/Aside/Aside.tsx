import {PATH} from '@/_app/AppSettings/PATH'
import {LogOutModal} from '@/features/Auth/LogOut/ui/LogOutModal'
import {CreatePost} from '@/features/Post/CreatePost'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {EmailOutline, Favorites, NavLink, ProfileIcon, SearchIcon, StatisticsIcon} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

import {AsideWrapper} from './Aside.styled'

export const Aside = () => {
    const {t} = useTranslation()
    const {pathname} = useRouter()

    return (
        <AsideWrapper>
            <nav>
                <NavLink href={PATH.HOME} icon={<ProfileIcon />} name={t.aside.home} pathname={pathname} />
                <CreatePost />
                <NavLink
                    href={PATH.MY_PROFILE}
                    icon={<ProfileIcon />}
                    name={t.aside.myProfile}
                    pathname={
                        pathname === '/profile/my-profile/[[...postId]]'
                            ? pathname.replace(/\[\[.*?\]\]/, '').replace(/\/$/, '')
                            : ''
                    } //todo (hot fix) required fix this shit
                />
                <NavLink href={PATH.MESSENGER} icon={<EmailOutline />} name={t.aside.messenger} pathname={pathname} />
                <NavLink href={PATH.SEARCH} icon={<SearchIcon />} name={t.aside.search} pathname={pathname} />
                <NavLink
                    href={PATH.STATISTICS}
                    icon={<StatisticsIcon />}
                    name={t.aside.statistics}
                    pathname={pathname}
                />
                <NavLink href={PATH.FAVORITES} icon={<Favorites />} name={t.aside.favorites} pathname={pathname} />
                <LogOutModal />
            </nav>
        </AsideWrapper>
    )
}
