export const PATH = {
    CREATE_NEW_PASSWORD: '/auth/create-new-password',
    EXPIRED_LINK: '/auth/email-resending',
    FAVORITES: '/profile/favorites',
    FORGOT_PASSWORD: '/auth/forgot-password',
    // Aside
    HOME: '/profile',
    LOG_OUT: '/auth/logout',
    // Auth
    LOGIN: '/auth/login',
    MESSENGER: '/profile/messenger',
    MY_PROFILE: '/profile/my-profile',
    PRIVACY_POLICY: '/auth/privacy-policy',

    PROFILE_SETTINGS: '/profile/profile-settings',
    REGISTRATION: '/auth/registration',
    REGISTRATION_CONFIRMED: '/auth/registrationConfirmed',
    SEARCH: '/profile/search',
    STATISTICS: '/profile/statistics',
    TERMS_OF_SERVICE: '/auth/terms-of-service',
    UPDATE_TOKENS: '/auth/update-tokens',
    USER_PROFILE: '/profile/user-profile',
    VIEW_POST: '/profile/view-post',
} as const
