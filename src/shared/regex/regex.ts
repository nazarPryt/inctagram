export const passwordRegex =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~])[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]+$/
export const userNameRegex = /^[a-zA-Z0-9_-]+$/
export const firstNameRegex = /[A-Za-zА-Яа-я]/
export const lastNameRegex = /[A-Za-zА-Яа-я]/
export const aboutMeRegex = /[0-9A-Za-zА-Яа-я\s\S]|/
export const tagsRegex = /(<\d+>[^<>]*<\/\d+>)/
export const openCloseTagRegex = /<(\d+)>([^<>]*)<\/(\d+)>/
export const emailRFCRegex =
    /^(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?/

// emailRFCRegex - This regular expression checks that:

// 1. The local part (before the '@' symbol) does not exceed 64 characters.
// 2. The domain part (after the '@' symbol) does not exceed 255 characters.
// 3. The total length of the email does not exceed 320 characters.

//todo make tests on all regex
