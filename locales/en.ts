export const en = {
    //auth

    aside: {
        create: 'Create',
        favorites: 'Favorites',
        home: 'Home',
        logout: 'Log Out',
        messenger: 'Messenger',
        myProfile: 'My Profile',
        search: 'Search',
        statistics: 'Statistics',
    },
    auth: {
        confirmPassword: 'Confirm password',
        email: 'Email',
        forgotPassword: {
            btnFirst: 'Send link',
            btnSec: 'Send Link Again',
            description: 'Enter your email address and we will send you further instructions',
            instruction: 'The link has been sent by email. If you don’t receive an email send link again',
            link: 'Back to Sign in',
            title: 'Forgot password',
        },
        modal: {
            btn: 'Ok',
            description: 'We have sent a link to confirm your email to ',
            title: 'Email sent',
        },
        newPassword: {
            btn: 'Create new password',
            description: 'Your password must be between 6 and 20 characters',
            error: {
                passwordConfirm: 'The password must match the new password',
            },
            modal: 'Your password was successfully changed',
            title: 'Create new password',
        },

        newPasswordInput: 'New password',
        password: 'Password',
        signIn: {
            button: 'Sign in',
            description: "Don't have an account?",
            error: {
                password: 'The password or email you entered is incorrect. Please try again',
            },
            linkFirst: 'Forgot password',
            linkSecond: 'Sign up',
            title: 'Sign in',
        },
        signUp: {
            and: 'and ',
            badLink: {
                btn: 'Resend link',
                description: 'Looks like the verification link has expired. Not to worry, we can send the link again',
                title: 'Email verification link invalid',
            },
            btn: 'Sign up',
            description: 'Do you have an account?',
            error: {
                username: 'User with this username is already registered',
            },
            expiredLink: {
                btn: 'Resend verification link',
                description: 'Looks like the verification link has expired. Not to worry, we can send the link again',
                title: 'Email verification link expired',
            },
            link: 'Sign In',
            merge: {
                btnFirst: 'Yes, merge',
                btnSec: 'No',
                description:
                    'The user with email Epam@epam.com is already in the system. Could we merge this accounts?',
                title: 'Merge accounts',
            },
            privacy: 'Privacy policy',

            success: {
                btn: 'Sing In',
                description: 'Your email has been confirmed',
                title: 'Congratulations!',
            },
            termsOfService: 'Terms of service',
            title: 'Sign up',
            userAgree: 'I agree to the ',
        },
        username: 'Username',
    },
    create: {
        addLocation: 'Add location',
        createPost: {
            error: {
                type: 'Error',
            },
            success: {
                message: 'Your post was successfully uploaded',
            },
        },
        describe: 'Add publication descriptions',
        editorButtons: {
            next: 'Next',
            publish: 'Publish',
        },
        errorAddPhotoToLibrary: "Count of photo don't be more than ten",
        modalTitle: 'Create post',
        savePhoto: {
            error: {
                type: 'Error',
            },
            success: {
                message: 'Your Picture was successfully uploaded',
            },
        },
        saveToDraftModal: {
            buttons: {
                discard: 'Discard',
                save: 'Save draft',
            },
            text: 'Do you really want to close the creation of a publication?',
            textNext: 'If you close everything will be deleted.',
            title: 'Close',
        },
        selectButton: 'Select from computer',
        selectDraft: 'Open Draft',
        selectResize: 'Original',
        steps: {
            addPhoto: 'Add Photo',
            cropping: 'Cropping',
            describe: 'Describe',
            filters: 'Filters',
        },
    },
    generalInfo: {
        addModal: {
            saveBtn: 'Save',
            selectBtn: 'Select from Computer',
            title: 'Add a Profile Photo',
        },
        addProfilePhoto: 'Add a Profile Photo',
        inputs: {
            aboutMe: 'About me',
            city: 'City',
            dateOfBirth: 'Date of birthday',
            firstname: 'First Name',
            lastname: 'Last Name',
            username: 'Username',
        },
        logoutModal: {
            description: 'Are you really want to log out of your account ',
            no: 'No',
            title: 'Log Out',
            yes: 'Yes',
        },
        saveChanges: 'Save Changes',
        tabs: {
            accountManagement: 'Account Management',
            devices: 'Devices',
            generalInfo: 'General information',
            myPayments: 'My payments',
        },
    },
    header: {
        notification: {
            new: 'New',
            newNotification: 'New notification!',
            notifications: 'Notifications',
        },
    },
    home: {
        addComm: 'Add a Comment...',
        minutesAgo: 'Minutes ago',
        options: {
            copyLink: 'Copy Link',
            follow: 'Follow',
            report: 'Report',
            unfollow: 'Unfollow',
        },
        publish: 'Publish',
        viewComm: 'View All Comments ',
    },
    myPost: {
        modal: {
            btn1: 'Yes',
            btn2: 'No',
            description: 'Are you sure you want to delete this post?',
            title: 'Delete Post',
        },
    },
    profile: {
        followers: 'Followers',
        following: 'Following',
        publications: 'Publications',
        settingsBtn: 'Profile Settings',
    },
}

export type LocaleType = typeof en
