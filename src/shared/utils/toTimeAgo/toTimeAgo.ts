import {formatDistance, subDays} from 'date-fns'

export const toTimeAgo = (time: string) => {
    return formatDistance(subDays(new Date(time), 0), new Date(), {addSuffix: true})
}
