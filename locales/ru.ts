import {LocaleType} from './en'

export const ru: LocaleType = {
    //auth
    auth: {
        username: 'Имя пользователя',
        email: 'Почта',
        password: 'Пароль',
        confirmPassword: 'Подтверждение пароля',
        newPasswordInput: 'Новый пароль',
        signUp: {
            title: 'Зарегистрироваться',
            btn: 'Зарегистрироваться',
            description: 'У вас уже есть аккаунт?',
            link: 'Войти',
            privacy: 'Политика конфиденциальности',
            termsOfService: 'Условия использования',
            userAgree: 'Я принимаю',
            and: 'и',
            error: {
                username: 'Пользователь с этим логином уже зарегистрирован',
            },

            merge: {
                title: 'Объединение учетных записей',
                description:
                    'Пользователь с электронной почтой Epam@epam.com уже находится в системе. Можем ли мы объединить эти аккаунты?',
                btnFirst: 'Да, объединить',
                btnSec: 'Нет',
            },

            success: {
                title: 'Поздравляем!',
                description: 'Ваше сообщение было подтверждено',
                btn: 'Войти',
            },
            expiredLink: {
                title: 'Срок действия ссылки для подтверждения электронной почты истек',
                description:
                    'Похоже, срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз',
                btn: 'Повторно отправить ссылку для подтверждения',
            },
            badLink: {
                title: 'Ссылка для подтверждения электронной почты недействительна',
                description:
                    'Похоже, срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз',
                btn: 'Отправить ссылку повторно',
            },
        },
        signIn: {
            title: 'Войти',
            linkFirst: 'Забыли пароль',
            button: 'Войти',
            description: 'У вас нет аккаунта?',
            linkSecond: 'Зарегистрироваться',
            error: {
                password: 'Вы ввели неверный пароль или адрес электронной почты. Пожалуйста, попробуйте еще раз',
            },
        },
        forgotPassword: {
            title: 'Забыли пароль',
            description: 'Введите адрес электронной почты, и мы вышлем вам дальнейшие инструкции',
            instruction:
                'Ссылка отправлена по электронной почте. Если вы не получили ссылку для отправки по электронной почте еще раз',
            btnFirst: 'Отправить ссылку',
            btnSec: 'Отправить ссылку еще раз',
            link: 'Назад к логинизации',
        },
        newPassword: {
            title: 'Создать новый пароль',
            description: 'Ваш пароль должен быть от 6 до 20 символов',
            modal: 'Ваш пароль бил успешно изменен',
            btn: 'Создать новый пароль',
            error: {
                passwordConfirm: 'Пароль должен совпадать с новым паролем',
            },
        },
        modal: {
            title: 'Письмо отправлено',
            description: 'Мы отправили ссылку для подтверждения вашего адреса электронной почты на адрес ',
            btn: 'Ок',
        },
    },
    generalInfo: {
        tabs: {
            generalInfo: 'Общая информация',
            devices: 'Устройства',
            accountManagement: 'Управление аккаунтом',
            myPayments: 'Мои платежи',
        },
        inputs: {
            username: 'Имя пользователя',
            firstname: 'Имя',
            lastname: 'Фамилия',
            dateOfBirth: 'Дата рождения',
            city: 'Город',
            aboutMe: 'Обо мне',
        },
        saveChanges: 'Сохранить изменения',
        addProfilePhoto: 'Добавить фото профиля',
        addModal: {
            title: 'Добавить фото профиля',
            selectBtn: 'Выбрать из компьютера',
            saveBtn: 'Сохранить',
        },
        logoutModal: {
            title: 'Выйти',
            description: 'Вы действительно хотите выйти из своей учетной записи?',
            yes: 'Да',
            no: 'Нет',
        },
    },
    profile: {
        settingsBtn: 'Настройки профиля',
        following: 'Подписки',
        followers: 'Подписчики',
        publications: 'Публикации',
    },
    myPost: {
        modal: {
            title: 'Удалить запись',
            description: 'Вы уверены, что хотите удалить эту запись?',
            btn1: 'Да',
            btn2: 'Нет',
        },
    },
    aside: {
        home: 'Главная',
        create: 'Создать',
        myProfile: 'Мой профиль',
        messenger: 'Мессенджер',
        search: 'Поиск',
        favorites: 'Избранное',
        statistics: 'Статистика',
        logout: 'Выйти',
    },
    create: {
        selectButton: 'Выбрать фото',
        selectResize: 'Оригинал',
        steps: {
            addPhoto: 'Добавить фото',
            cropping: 'Обезка фото',
            filters: 'Фильтра для фото',
            describe: 'Описание фото',
        },
        editorButtons: {
            next: 'Далее',
            publish: 'Опубликовать',
        },
        describe: 'Добавить описание к фото',
        addLocation: 'Добавить места',
        savePhoto: {
            success: {
                message: 'Ваше фото было добавлено',
            },
            error: {
                type: 'Ошибка',
            },
        },
        createPost: {
            success: {
                message: 'Ваш пост был добавлен',
            },
            error: {
                type: 'Ошибка',
            },
        },
    },
    home: {
        minutesAgo: 'Минут назад',
        viewComm: 'Просмотреть все комментарии ',
        addComm: 'Добавить комментарий...',
        publish: 'Опубликовать',
        options: {
            report: 'Пожаловаться',
            unfollow: 'Отписаться',
            copyLink: 'Копировать ссылку',
            follow: 'Подписаться',
        },
    },
    header: {
        notification: {
            notifications: 'Уведомелния',
            new: 'Новое',
            newNotification: 'Новое уведомление!',
        },
    },
}
