import {LogOutModal} from 'features/Auth/LogOut/ui/LogOutModal/LogOutModal'
import {CreatePost} from 'features/CreatePost/CreatePost'
import FavoritesIcon from 'shared/assets/icons/favorites.svg'
import HomeIcon from 'shared/assets/icons/home.svg'
import MessengerIcon from 'shared/assets/icons/messenger.svg'
import MyProfileIcon from 'shared/assets/icons/myProfile.svg'
import SearchIcon from 'shared/assets/icons/search.svg'
import StatisticsIcon from 'shared/assets/icons/statistics.svg'
import {PATH} from 'shared/constants/PATH'
import {useTranslation} from 'shared/hooks/useTranslation'
import {AsideWrapper} from 'widgets/Aside/Aside.styled'
import {NavLink} from 'widgets/Aside/ui/NavLink/NavLink'

export const Aside = () => {
    const {t} = useTranslation()

    return (
        <AsideWrapper>
            <nav>
                <NavLink href={PATH.HOME} icon={<HomeIcon />} name={t.aside.home} />
                <CreatePost />
                <NavLink href={PATH.MY_PROFILE} icon={<MyProfileIcon />} name={t.aside.myProfile} />
                <NavLink href={PATH.MESSENGER} icon={<MessengerIcon />} name={t.aside.messenger} />
                <NavLink href={PATH.SEARCH} icon={<SearchIcon />} name={t.aside.search} />
                <NavLink href={PATH.STATISTICS} icon={<StatisticsIcon />} name={t.aside.statistics} />
                <NavLink href={PATH.FAVORITES} icon={<FavoritesIcon />} name={t.aside.favorites} />
                <LogOutModal />
            </nav>
        </AsideWrapper>
    )
}
