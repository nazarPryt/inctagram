import {pluralizeEn} from '../src/common/helpers/createPluralize'
import {LocaleType} from './ru'

export const en: LocaleType = {
    homePage: {
        test: 'Lorem Ipsum is simply dummy text of the printing',
        getCount(count: number) {
            const str = pluralizeEn(count)
            switch (str) {
                case 'one':
                    return `${count} item`
                case 'other':
                    return `${count} items`
            }
        },
    },
    charactersPage: {
        title: 'Character page',
    },
    characterPage: {
        getDescription(name: string, species: string) {
            return `The character ${name} belongs to the variety ${species}`
        },
        description: 'The character <1>name</1> belongs to the variety <2>species</2>',
    },
    locationsPage: {
        title: 'Location page',
    },
}
