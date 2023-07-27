import React from 'react'
import {LogOut} from 'features/LogOut/LogOut'
import {AsideWrapper} from 'widgets/Aside/Aside.styled'
import {NavLink} from 'widgets/Aside/ui/NavLink/NavLink'
import HomeIcon from '../../shared/assets/icons/home.svg'
import MyProfileIcon from '../../shared/assets/icons/myProfile.svg'
import MessengerIcon from '../../shared/assets/icons/messenger.svg'
import StatisticsIcon from '../../shared/assets/icons/statistics.svg'
import SearchIcon from '../../shared/assets/icons/search.svg'
import FavoritesIcon from '../../shared/assets/icons/favorites.svg'
import {CreatePost} from '../../features/CreatePost/CreatePost'
import {PATH} from 'shared/constants/PATH'

export const Aside = () => {
    return (
        <AsideWrapper>
            <nav>
                <NavLink href={PATH.HOME} name={'Home'} icon={<HomeIcon />} />
                <CreatePost />
                <NavLink href={PATH.MY_PROFILE} name={'My Profile'} icon={<MyProfileIcon />} />
                <NavLink href={PATH.MESSENGER} name={'Messenger'} icon={<MessengerIcon />} />
                <NavLink href={PATH.SEARCH} name={'Search'} icon={<SearchIcon />} />
                <NavLink href={PATH.STATISTICS} name={'Statistics'} icon={<StatisticsIcon />} />
                <NavLink href={PATH.FAVORITES} name={'Favorites'} icon={<FavoritesIcon />} />
                <LogOut />
            </nav>
        </AsideWrapper>
    )
}
