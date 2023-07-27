import {pluralizeEn} from '../src/common/helpers/createPluralize'
import {LocaleType} from './ru'

export const en: LocaleType = {
    //auth
    auth_email: 'Email',
    auth_password: 'Password',
    auth_confirm_password: 'Password confirmation',

    //auth_sign_up
    auth_sign_up_title: 'Sign Up',
    auth_sign_up_username: 'Username',
    auth_sign_up_username_error: 'User with this username is already registered',
    auth_sign_up_description: 'Do you have an account?',

    //auth_sign_in
    auth_sign_in_title: 'Sign In',
    auth_sign_in_password_error: 'The password or email you entered is incorrect. Please try again',
    auth_sign_in_description: 'Don’t have an account?',
    auth_sign_in_forgot_password: 'Forgot Password',
}
