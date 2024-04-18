import {useState} from 'react'

import {z} from 'zod'

export const useQueryParams = <P extends Record<string, z.ZodType<any, any, any>>>(params: P) => {
    const client = typeof window !== 'undefined'
    const [query] = useState(() => new URLSearchParams(client ? window.location.search : ''))

    if (!client) {
        return
    }
    const res: {[K in keyof P]?: z.infer<P[K]>} = {}

    for (const key of Object.keys(params)) {
        const paramsKey = key as keyof P
        const schema = params[paramsKey]
        const r = schema.safeParse(query.get(paramsKey.toString()))

        if (r.success) {
            res[paramsKey] = r.data
        }
    }

    return res
}
