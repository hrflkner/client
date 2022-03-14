/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export function queryDataBase() {
    const [contacts, setContacts] = useState([]);
    const contactsCollectionRef = collection(db, 'contact-list');

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(contactsCollectionRef);
            setContacts(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        getUsers();
    }, []);

    return contacts;
}
