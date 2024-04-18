import {emailRFCRegex} from '@/shared/regex/regex'

export const en = {
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
    common: {
        currentLanguage: 'en',
        test: 'Test',
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
    errors: {
        emailExists: 'User with this email is already registered',
        emailNotFound: "User with this email doesn't exist",
        emailRFCRegex: 'Maximum email length exceeded',
        emailWasntFound: (email: string) => `User with this email ${email} not founded`,
        imageFormatError: 'File must be jpeg or png type',
        imageSizeError: 'File must be less than 10 MB.',
        imageUploadError: 'Upload error.',
        loginFailed: 'Login Failed',
        loginIncorrectData: 'The email or password are incorrect. Try again please',
        loginIncorrectPassword: `The password is incorrect. Try again please`,
        maxFieldLength: (max: number) => `Maximum number of characters - ${max}`,
        maxFirstname: (max: number) => `The maximum length of the name must not exceed ${max} characters`,
        maxLastname: (max: number) => `The maximum length of the last name must not exceed ${max} characters`,
        maxLengthPost: 'Max number of characters 500',
        maxPassword: (max: number) => `Maximum number of characters ${max}`,
        maxUsername: (max: number) => `Maximum number of characters  ${max}`,
        minPassword: (min: number) => `Password must be at least ${min} characters`,
        minUsername: (min: number) => `Username must be at least ${min} characters`,
        noResponse: 'Server does not response',
        nonemptyConfirm: 'Confirm your password',
        nonemptyEmail: 'Email is required',
        nonemptyFirstname: 'Enter your name',
        nonemptyLastname: 'Enter your last name',
        nonemptyPassword: 'Enter your password',
        nonemptyUsername: 'Enter your Username',
        passwordsMustMatch: 'The passwords must match',
        regexAboutMe: 'Field must contain 0-9, a-z, A-Z, . _ -',
        regexEmail: 'The email must match the format example@example.com',
        regexFirstname: 'Firstname must contain a-z, A-Z',
        regexLastname: 'Lastname must contain a-z, A-Z',
        regexPasswordMustContain:
            'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^' +
            ' _` { | } ~',
        regexUsername: 'Username can contain only letters a-z, A-Z, numbers 0-9, dashes (-) and underscores (_)',
        requestFailed: 'Request Failed',
        requiredTerms: 'Terms and Privacy Policy must be true',
        tellUsSomethingAboutYou: 'The field must not be empty',
        tryAgain: 'Something went wrong, Try again please!!',
        under13: 'A user under 13 cannot create a profile.',
        usernameExists: 'User with this username is already registered',
        whereAreYouLive: 'Please indicate which city you live in',
    },
    generalInfo: {
        addModal: {
            saveBtn: 'Save',
            selectBtn: 'Select from Computer',
            title: 'Add a Profile Photo',
        },
        addProfilePhoto: 'Add a Profile Photo',
        changeProfilePhoto: 'Change Profile Photo',
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
            empty: {
                p: 'You dont have notifications',
                subTitle: 'No Notification',
                title: 'Woo',
            },
            new: 'New',
            newNotification: 'New notification!',
            notifications: 'Notifications',
            oldNotification: 'Already read',
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
    messenger: {
        empty: {
            chat: 'Select a chat to start messaging',
            noMessages: 'Start typing your message here',
            p: 'You didnt have conversation yet',
            title: 'Chat List is empty',
        },
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
    search: {
        empty: {p: 'No recent requests', title: 'Oops! This place looks empty!'},
    },
}

export type LocaleType = typeof en
