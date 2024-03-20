import {formatDistance} from 'date-fns/formatDistance'
import {enUS, ru} from 'date-fns/locale'
import {subDays} from 'date-fns/subDays'
import {useRouter} from 'next/router'

export const useFormatDistance = (str: string) => {
    const {locale} = useRouter()

    return formatDistance(subDays(new Date(str), 0), new Date(), {
        addSuffix: true,
        locale: locale === 'ru' ? ru : enUS,
    })
}
