import {emailRFCRegex} from '@/shared/regex/regex'

import {LocaleType} from './en'

export const ru: LocaleType = {
    aside: {
        create: 'Создать',
        favorites: 'Избранное',
        home: 'Главная',
        logout: 'Выйти',
        messenger: 'Мессенджер',
        myProfile: 'Мой профиль',
        search: 'Поиск',
        statistics: 'Статистика',
    },
    auth: {
        confirmPassword: 'Подтверждение пароля',
        email: 'Почта',
        forgotPassword: {
            btnFirst: 'Отправить ссылку',
            btnSec: 'Отправить ссылку еще раз',
            description: 'Введите адрес электронной почты, и мы вышлем вам дальнейшие инструкции',
            instruction:
                'Ссылка отправлена по электронной почте. Если вы не получили ссылку для отправки по электронной почте еще раз',
            link: 'Назад к логинизации',
            title: 'Забыли пароль',
        },
        modal: {
            btn: 'Ок',
            description: 'Мы отправили ссылку для подтверждения вашего адреса электронной почты на адрес ',
            title: 'Письмо отправлено',
        },
        newPassword: {
            btn: 'Создать новый пароль',
            description: 'Ваш пароль должен быть от 6 до 20 символов',
            error: {
                passwordConfirm: 'Пароль должен совпадать с новым паролем',
            },
            modal: 'Ваш пароль бил успешно изменен',
            title: 'Создать новый пароль',
        },
        newPasswordInput: 'Новый пароль',
        password: 'Пароль',
        signIn: {
            button: 'Войти',
            description: 'У вас нет аккаунта?',
            error: {
                password: 'Вы ввели неверный пароль или адрес электронной почты. Пожалуйста, попробуйте еще раз',
            },
            linkFirst: 'Забыли пароль',
            linkSecond: 'Зарегистрироваться',
            title: 'Войти',
        },
        signUp: {
            and: 'и',
            badLink: {
                btn: 'Отправить ссылку повторно',
                description:
                    'Похоже, срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз',
                title: 'Ссылка для подтверждения электронной почты недействительна',
            },
            btn: 'Зарегистрироваться',
            description: 'У вас уже есть аккаунт?',
            error: {
                username: 'Пользователь с этим логином уже зарегистрирован',
            },
            expiredLink: {
                btn: 'Повторно отправить ссылку для подтверждения',
                description:
                    'Похоже, срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз',
                title: 'Срок действия ссылки для подтверждения электронной почты истек',
            },
            link: 'Войти',
            merge: {
                btnFirst: 'Да, объединить',
                btnSec: 'Нет',
                description:
                    'Пользователь с электронной почтой Epam@epam.com уже находится в системе. Можем ли мы объединить эти аккаунты?',
                title: 'Объединение учетных записей',
            },
            privacy: 'Политика конфиденциальности',

            success: {
                btn: 'Войти',
                description: 'Ваше сообщение было подтверждено',
                title: 'Поздравляем!',
            },

            termsOfService: 'Условия использования',
            title: 'Зарегистрироваться',
            userAgree: 'Я принимаю',
        },
        username: 'Имя пользователя',
    },
    common: {
        currentLanguage: 'ru',
        test: 'Тест',
    },
    create: {
        addLocation: 'Добавить места',
        createPost: {
            error: {
                type: 'Ошибка',
            },
            success: {
                message: 'Ваш пост был добавлен',
            },
        },
        describe: 'Добавить описание к фото',
        editorButtons: {
            next: 'Далее',
            publish: 'Опубликовать',
        },
        errorAddPhotoToLibrary: 'Количество фотографий не должно превышать десяти',
        modalTitle: 'Создать пост',
        savePhoto: {
            error: {
                type: 'Ошибка',
            },
            success: {
                message: 'Ваше фото было добавлено',
            },
        },
        saveToDraftModal: {
            buttons: {
                discard: 'Удалить',
                save: 'Сохранить в черновик',
            },
            text: 'Вы действительно хотите закрыть?',
            textNext: 'Если вы закроете, все будет удалено.',
            title: 'Закрыть',
        },
        selectButton: 'Выбрать фото',
        selectDraft: 'Открыть черновик',
        selectResize: 'Оригинал',
        steps: {
            addPhoto: 'Добавить фото',
            cropping: 'Обезка фото',
            describe: 'Описание фото',
            filters: 'Фильтра для фото',
        },
    },
    errors: {
        emailExists: 'Пользователь с такой электронной почтой уже существует',
        emailNotFound: 'Пользователь с такими электронным адресом не существует',
        emailRFCRegex: 'Превышена максимальная длина email',
        emailWasntFound: (email: string) => `Пользователь с этим адресом электронной почты ${email} не найден`,
        imageFormatError: 'Файл должен иметь формат jpg или png.',
        imageSizeError: 'Файл должен быть не больше 10 мб.',
        imageUploadError: 'Ошибка загрузки файла.',
        loginFailed: 'Ошибка входа',
        loginIncorrectData: ' Почта или пароль некорректны. Пожалуйста, попробуйте еще раз',
        loginIncorrectPassword: `Неправильный пароль. Попробуйте ещё раз`,
        maxFieldLength: (max: number) => `Максимальное количество символов - ${max}`,
        maxFirstname: (max: number) => `Максимальная длинна имени не должна превышать  ${max} символов`,
        maxLastname: (max: number) => `Максимальная длина фамилии не должна превышать  ${max} символов`,
        maxLengthPost: 'Максимальное количество символов для поста равно 500',
        maxPassword: (max: number) => `Пароль должен быть не более ${max} символов`,
        maxUsername: (max: number) => `Максимальная длина имени пользователя не должна превышать  ${max} символов`,
        minPassword: (min: number) => `Пароль должен должен быть длиной не менее ${min} символов`,
        minUsername: (min: number) => `Длина имени пользователя должна быть не менее ${min} символов`,
        noResponse: 'Сервер не отвечает',
        nonemptyConfirm: 'Повторно введите пароль',
        nonemptyEmail: 'Введите адрес электронной почты',
        nonemptyFirstname: 'Введите имя',
        nonemptyLastname: 'Введите фамилию',
        nonemptyPassword: 'Введите пароль',
        nonemptyUsername: 'Введите имя пользователя',
        passwordsMustMatch: 'Пароли должны совпадать',
        regexAboutMe: 'Поле должно содержать 0-9, a-z, A-Z, . _ -',
        regexEmail: 'Электронная почта должна соответствовать типу example@example.com',
        regexFirstname: 'Имя должно содержать а-я, А-Я',
        regexLastname: 'Фамилия должна содержать а-я, А-Я',
        regexPasswordMustContain:
            'Пароль должен содержать следующие символы 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / :' +
            ' ; < = > ? @ [ \\ ] ^ _` { | } ~',
        regexUsername:
            'Username может содержать только латинские буквы a-z, A-Z, цифры 0-9, дефис (-) и нижнее подчеркивание (_)',
        requestFailed: 'Ошибка при выполнении запроса',
        requiredTerms: 'Нужно подтвердить согласие с правилами сервиса и политикой безопасности',
        // under13: (elem: ReactElement) => `Возраст пользователя должен быть старше 13 лет. ${elem} `,
        tellUsSomethingAboutYou: 'Поле не должно быть пустым',
        tryAgain: 'Что-то пошло не так, попробуйте еще раз!!',
        under13: 'Возраст пользователя должен быть старше 13 лет.',
        usernameExists: 'Пользователь с таким именем уже существует',
        whereAreYouLive: 'Укажите в каком городе вы живете',
    },

    generalInfo: {
        addModal: {
            saveBtn: 'Сохранить',
            selectBtn: 'Выбрать из компьютера',
            title: 'Добавить фото профиля',
        },
        addProfilePhoto: 'Добавить фото профиля',
        changeProfilePhoto: 'Изменить фото профиля',
        inputs: {
            aboutMe: 'Обо мне',
            city: 'Город',
            dateOfBirth: 'Дата рождения',
            firstname: 'Имя',
            lastname: 'Фамилия',
            username: 'Имя пользователя',
        },
        logoutModal: {
            description: 'Вы действительно хотите выйти из своей учетной записи?',
            no: 'Нет',
            title: 'Выйти',
            yes: 'Да',
        },
        saveChanges: 'Сохранить изменения',
        tabs: {
            accountManagement: 'Управление аккаунтом',
            devices: 'Устройства',
            generalInfo: 'Общая информация',
            myPayments: 'Мои платежи',
        },
    },
    header: {
        notification: {
            empty: {
                p: 'У тебя нету уведомлений',
                subTitle: 'Пусто',
                title: 'Ой',
            },
            new: 'Новое',
            newNotification: 'Новое уведомление!',
            notifications: 'Уведомелния',
            oldNotification: 'Уже прочтено',
        },
    },
    home: {
        addComm: 'Добавить комментарий...',
        minutesAgo: 'Минут назад',
        options: {
            copyLink: 'Копировать ссылку',
            follow: 'Подписаться',
            report: 'Пожаловаться',
            unfollow: 'Отписаться',
        },
        publish: 'Опубликовать',
        viewComm: 'Просмотреть все комментарии ',
    },
    messenger: {
        empty: {
            chat: 'Выберите чат, чтобы начать общение',
            noMessages: 'Начните вводить свое сообщение здесь',
            p: 'У вас еще не было разговоров',
            title: 'Список чатов пуст',
        },
    },
    myPost: {
        modal: {
            btn1: 'Да',
            btn2: 'Нет',
            description: 'Вы уверены, что хотите удалить эту запись?',
            title: 'Удалить запись',
        },
    },
    profile: {
        followers: 'Подписчики',
        following: 'Подписки',
        publications: 'Публикации',
        settingsBtn: 'Настройки профиля',
    },
}
