export const en = {
    //auth

    auth: {
        username: 'Username',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm password',
        newPasswordInput: 'New password',

        signUp: {
            title: 'Sign up',
            btn: 'Sign up',
            description: 'Do you have an account?',
            privacy: 'Privacy policy',
            termsOfService: 'Terms of service',
            userAgree: 'I agree to the ',
            and: 'and ',
            link: 'Sign In',
            error: {
                username: 'User with this username is already registered',
            },

            merge: {
                title: 'Merge accounts',
                description:
                    'The user with email Epam@epam.com is already in the system. Could we merge this accounts?',
                btnFirst: 'Yes, merge',
                btnSec: 'No',
            },
            success: {
                title: 'Congratulations!',
                description: 'Your email has been confirmed',
                btn: 'Sing In',
            },
            expiredLink: {
                title: 'Email verification link expired',
                description: 'Looks like the verification link has expired. Not to worry, we can send the link again',
                btn: 'Resend verification link',
            },
            badLink: {
                title: 'Email verification link invalid',
                description: 'Looks like the verification link has expired. Not to worry, we can send the link again',
                btn: 'Resend link',
            },
        },
        signIn: {
            title: 'Sign in',
            linkFirst: 'Forgot password',
            button: 'Sign in',
            description: "Don't have an account?",
            linkSecond: 'Sign up',
            error: {
                password: 'The password or email you entered is incorrect. Please try again',
            },
        },
        forgotPassword: {
            title: 'Forgot password',
            description: 'Enter your email address and we will send you further instructions',
            instruction: 'The link has been sent by email. If you don’t receive an email send link again',
            btnFirst: 'Send link',
            btnSec: 'Send Link Again',
            link: 'Back to Sign in',
        },
        newPassword: {
            title: 'Create new password',
            description: 'Your password must be between 6 and 20 characters',
            modal: 'Your password was successfully changed',
            btn: 'Create new password',
            error: {
                passwordConfirm: 'The password must match the new password',
            },
        },
        modal: {
            title: 'Email sent',
            description: 'We have sent a link to confirm your email to ',
            btn: 'Ok',
        },
    },
    generalInfo: {
        tabs: {
            generalInfo: 'General information',
            devices: 'Devices',
            accountManagement: 'Account Management',
            myPayments: 'My payments',
        },
        inputs: {
            username: 'Username',
            firstname: 'First Name',
            lastname: 'Last Name',
            dateOfBirth: 'Date of birthday',
            city: 'City',
            aboutMe: 'About me',
        },
        saveChanges: 'Save Changes',
        addProfilePhoto: 'Add a Profile Photo',
        addModal: {
            title: 'Add a Profile Photo',
            selectBtn: 'Select from Computer',
            saveBtn: 'Save',
        },
        logoutModal: {
            title: 'Log Out',
            description: 'Are you really want to log out of your account ',
            yes: 'Yes',
            no: 'No',
        },
    },
    profile: {
        settingsBtn: 'Profile Settings',
        following: 'Following',
        followers: 'Followers',
        publications: 'Publications',
    },
    myPost: {
        modal: {
            title: 'Delete Post',
            description: 'Are you sure you want to delete this post?',
            btn1: 'Yes',
            btn2: 'No',
        },
    },
    aside: {
        home: 'Home',
        create: 'Create',
        myProfile: 'My Profile',
        messenger: 'Messenger',
        search: 'Search',
        favorites: 'Favorites',
        statistics: 'Statistics',
        logout: 'Log Out',
    },
    create: {
        modalTitle: 'Create post',
        selectButton: 'Select from computer',
        selectDraft: 'Open Draft',
        selectResize: 'Original',
        steps: {
            addPhoto: 'Add Photo',
            cropping: 'Cropping',
            filters: 'Filters',
            describe: 'Describe',
        },
        editorButtons: {
            next: 'Next',
            publish: 'Publish',
        },
        describe: 'Add publication descriptions',
        addLocation: 'Add location',
        savePhoto: {
            success: {
                message: 'Your Picture was successfully uploaded',
            },
            error: {
                type: 'Error',
            },
        },
        createPost: {
            success: {
                message: 'Your post was successfully uploaded',
            },
            error: {
                type: 'Error',
            },
        },
        saveToDraftModal: {
            title: 'Close',
            text: 'Do you really want to close the creation of a publication?',
            textNext: 'If you close everything will be deleted.',
            buttons: {
                discard: 'Discard',
                save: 'Save draft',
            },
        },
    },
    home: {
        minutesAgo: 'Minutes ago',
        viewComm: 'View All Comments ',
        addComm: 'Add a Comment...',
        publish: 'Publish',
        options: {
            report: 'Report',
            unfollow: 'Unfollow',
            copyLink: 'Copy Link',
            follow: 'Follow',
        },
    },
}

export type LocaleType = typeof en
