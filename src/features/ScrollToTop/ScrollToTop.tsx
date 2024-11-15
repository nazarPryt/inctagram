import {useEffect, useState} from 'react'

import {useScreenDetector} from '@/shared/hooks/useScreenDetector'

import {ScrollToTopStyled} from './ScrollToTop.styled'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const {isMobile} = useScreenDetector()

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        })
    }

    return (
        <>
            {!isMobile && (
                <ScrollToTopStyled $isVisible={isVisible} onClick={scrollToTop}>
                    <div className={'chevron'} />
                    <div className={'chevron'} />
                    <div className={'chevron'} />
                </ScrollToTopStyled>
            )}
        </>
    )
}
