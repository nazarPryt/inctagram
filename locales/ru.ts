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
    //auth
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
    generalInfo: {
        addModal: {
            saveBtn: 'Сохранить',
            selectBtn: 'Выбрать из компьютера',
            title: 'Добавить фото профиля',
        },
        addProfilePhoto: 'Добавить фото профиля',
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
            new: 'Новое',
            newNotification: 'Новое уведомление!',
            notifications: 'Уведомелния',
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
