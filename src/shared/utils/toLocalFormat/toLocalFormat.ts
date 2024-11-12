export const toLocalFormat = (value: string) => {
    return new Date(value).toLocaleDateString('ru-RU')
}
