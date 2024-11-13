import {useState} from 'react'

import {Notifications} from '@/entities/Notifications'
import {MobileLangSelect} from '@/features/LanguageSelect'
import {ThemeSwitcher} from '@/features/ThemeSwitcher'
import {useAuth} from '@/shared/hooks/useAuth'
import {AuthButtons} from '@/widgets/Header/ui/AuthButtons/AuthButtons'
import {DotsHorizontal, Popover} from '@nazar-pryt/inctagram-ui-kit'

import {MobileHeaderPopoverStyled} from './MobileHeaderPopover.styled'

type Props = {
    isPublic: boolean
}
export const MobileHeaderPopover = ({isPublic}: Props) => {
    const {isLoggedIn} = useAuth()
    const [open, setOpen] = useState(false)

    return (
        <Popover icon={<DotsHorizontal />} isOpen={open} onOpenChange={setOpen}>
            <MobileHeaderPopoverStyled>
                <ThemeSwitcher />
                {isLoggedIn && <Notifications />}
                <MobileLangSelect />

                {isPublic && <AuthButtons />}
            </MobileHeaderPopoverStyled>
        </Popover>
    )
}
