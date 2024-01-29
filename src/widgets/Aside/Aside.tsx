import {LogOutModal} from '@/features/Auth/LogOut/ui/LogOutModal/LogOutModal'
import {CreatePost} from '@/features/CreatePost/CreatePost'
import {PATH} from '@/shared/constants/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {AsideWrapper} from '@/widgets/Aside/Aside.styled'
import {NavLink} from '@/widgets/Aside/ui/NavLink/NavLink'
import {EmailOutline, Favorites, ProfileIcon, SearchIcon, StatisticsIcon} from '@nazar-pryt/inctagram-ui-kit'

export const Aside = () => {
    const {t} = useTranslation()

    return (
        <AsideWrapper>
            <nav>
                <NavLink href={PATH.HOME} icon={<ProfileIcon />} name={t.aside.home} />
                <CreatePost />
                <NavLink href={PATH.MY_PROFILE} icon={<ProfileIcon />} name={t.aside.myProfile} />
                <NavLink href={PATH.MESSENGER} icon={<EmailOutline />} name={t.aside.messenger} />
                <NavLink href={PATH.SEARCH} icon={<SearchIcon />} name={t.aside.search} />
                <NavLink href={PATH.STATISTICS} icon={<StatisticsIcon />} name={t.aside.statistics} />
                <NavLink href={PATH.FAVORITES} icon={<Favorites />} name={t.aside.favorites} />
                <LogOutModal />
            </nav>
        </AsideWrapper>
    )
}
