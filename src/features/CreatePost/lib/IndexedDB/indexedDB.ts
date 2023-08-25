import {openDB, DBSchema, IDBPDatabase} from 'idb'
import {LibraryPictureType} from '../../model/types/createPostSchema'

export interface UserDB extends DBSchema {
    draftImages: {
        key: number
        value: {
            drafts: LibraryPictureType[]
        }
    }
}

let dbPromise: Promise<IDBPDatabase<UserDB>> | null = null

if (typeof window !== 'undefined') {
    dbPromise = openDB<UserDB>('userDatabase', 1, {
        upgrade(db) {
            db.createObjectStore('draftImages', {keyPath: 'key', autoIncrement: true})
        },
    })
}

async function addToDraft(data: LibraryPictureType[]) {
    if (!dbPromise) return

    const db = await dbPromise
    const tx = db.transaction('draftImages', 'readwrite')
    const store = tx.objectStore('draftImages')
    await store.add({drafts: data})
    await tx.done
}

async function getAllDrafts() {
    if (!dbPromise) return []

    const db = await dbPromise
    const tx = db.transaction('draftImages', 'readonly')
    const store = tx.objectStore('draftImages')
    return store.getAll()
}

export {addToDraft, getAllDrafts}

//
//
//
//
//
//

// import { addUser } from '../features/user/indexedDB';
//
// function UserComponent() {
//     const handleAddUser = () => {
//         const userData = { name: 'Alice', age: 25 };
//         addUser(userData);
//     };
//
//     return (
//         <div>
//             <button onClick={handleAddUser}>Add User</button>
//     </div>
// );
// }
//
// export default UserComponent;

// import { useEffect, useState } from 'react';
// import { getAllUsers } from '../features/user/indexedDB';
//
// function UserListComponent() {
//     const [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         async function fetchUsers() {
//             const usersData = await getAllUsers();
//             setUsers(usersData);
//         }
//
//         fetchUsers();
//     }, []);
//
//     return (
//         <div>
//             <h2>User List</h2>
//     <ul>
//     {users.map((user, index) => (
//             <li key={index}>{`${user.name}, ${user.age}`}</li>
// ))}
//     </ul>
//     </div>
// );
// }
//
// export default UserListComponent;
