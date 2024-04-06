import {useEffect, useRef} from 'react'

//https://designtechworld.medium.com/create-a-custom-debounce-hook-in-react-114f3f245260

export const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number): T => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        // Cleanup the previous timeout on re-render
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const debouncedCallback = (...args: Parameters<T>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }

    return debouncedCallback as T
}
