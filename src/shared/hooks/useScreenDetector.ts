import {useEffect, useState} from 'react'

import {breakpoints} from '@/shared/styles/Breakpoints'

export const useScreenDetector = () => {
    const [device, setDevice] = useState({
        isDesktop: true,
        isMobile: false,
        isTablet: false,
    })

    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        const handleResize = () => {
            const width = window.innerWidth

            setDevice({
                isDesktop: width >= breakpoints.pc,
                isMobile: width < breakpoints.mobile,
                isTablet: width >= breakpoints.mobile && width < breakpoints.pc,
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return device
}
