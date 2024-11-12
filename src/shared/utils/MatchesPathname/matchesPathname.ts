export const normalizePath = (val: string) => val.replace(/^\.?\//, '').replace(/\/$/, '') // Remove leading "./" and trailing "/"

export const matchesPathname = (asPath: string, pathname: string) => {
    if (asPath === pathname) {
        return true
    }

    const baseAsPath = normalizePath(asPath.split('?')[0] as string)
    const basePathname = normalizePath(pathname.split('?')[0] as string)

    if (baseAsPath === basePathname) {
        return true
    }

    // Check if baseAsPath is a segment within basePathname or vice versa
    if (basePathname.includes(baseAsPath) || baseAsPath.includes(basePathname)) {
        return true
    }

    const basePathRegex = new RegExp(
        `^${basePathname
            .replace(/(\[[a-zA-Z0-9-]+\])+/g, '[a-zA-Z0-9-]+') // Match dynamic segments
            .replace(/\[\[\.\.\.[a-zA-Z0-9-]+\]\]/g, '?.*') // Match optional catch-all
            .replace(/\[\.\.\.[a-zA-Z0-9-]+\]/g, '.*')}$` // Match catch-all
    )

    return basePathRegex.test(baseAsPath)
}

//https://gist.github.com/tomfa/f925366cd036bb0d4af5bbd8397c84ae
