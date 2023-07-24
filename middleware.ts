export {default} from 'next-auth/middleware'
import {PATH} from 'shared/constants/PATH'

export const config = {matcher: [PATH.HOME, PATH.MY_PROFILE]}
