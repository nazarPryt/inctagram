import {DBSchema, IDBPDatabase, openDB} from 'idb'

import {LibraryPictureType} from '../../model/types/createPostSchema'

export interface UserDB extends DBSchema {
    draftImages: {
        key: number
        value: {
            description: string
            drafts: LibraryPictureType[]
        }
    }
}

let dbPromise: Promise<IDBPDatabase<UserDB>> | null = null

if (typeof window !== 'undefined') {
    dbPromise = openDB<UserDB>('userDatabase', 1, {
        upgrade(db) {
            db.createObjectStore('draftImages', {autoIncrement: true, keyPath: 'key'})
        },
    })
}

const addToDraft = async (data: LibraryPictureType[], description: string) => {
    if (!dbPromise) {
        return
    }

    const db = await dbPromise
    const tx = db.transaction('draftImages', 'readwrite')
    const store = tx.objectStore('draftImages')

    await store.add({description, drafts: data})
    await tx.done
}

const clearIndexedDB = (objectStoreName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('userDatabase')

        request.onerror = function (event) {
            reject('Ошибка при открытии базы данных')
        }

        request.onsuccess = function (event) {
            const db = (event.target as IDBRequest).result

            if (db instanceof IDBDatabase) {
                const transaction = db.transaction(objectStoreName, 'readwrite')
                const objectStore = transaction.objectStore(objectStoreName)

                const clearRequest = objectStore.clear()

                clearRequest.onsuccess = function (event) {
                    resolve('Данные успешно очищены')
                }

                clearRequest.onerror = function (event) {
                    reject('Ошибка при очистке данных')
                }
            }
        }
    })
}

const getAllDrafts = async () => {
    if (!dbPromise) {
        return []
    }

    const db = await dbPromise
    const tx = db.transaction('draftImages', 'readonly')
    const store = tx.objectStore('draftImages')

    return store.getAll()
}

export {addToDraft, clearIndexedDB, getAllDrafts}
