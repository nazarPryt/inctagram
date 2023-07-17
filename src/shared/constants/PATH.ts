export const PATH = {
    // Auth
    LOGIN: '/auth/login',
    LOG_OUT: '/auth/logout',
    REGISTRATION: '/auth/registration',
    FORGOT_PASSWORD: '/auth/forgot-password',
    EXPIRED_LINK: '/auth/email-resending',
    REGISTRATION_CONFIRMED: '/auth/registrationConfirmed',
    CREATE_NEW_PASSWORD: '/create-new-password/:token',
    UPDATE_TOKENS: '/auth/update-tokens',

    // Aside
    HOME: '/profile',
    MY_PROFILE: '/profile/my-profile',
    USER_PROFILE: '/profile/user-profile',
    PROFILE_SETTINGS: '/profile/profile-settings',
    MESSENGER: '/profile/messenger',
    SEARCH: '/profile/search',
    FAVORITES: '/profile/favorites',
    STATISTICS: '/profile/statistics',
} as const
