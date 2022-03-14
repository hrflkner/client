/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const contactCollectionRef = collection(db, 'contact-list');

export const createContact = async () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [dateAdded, setDateAdded] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [origin, setOrigin] = useState('');

    await addDoc(contactCollectionRef, {
        Name: name,
        Company: company,
        'Date Added': dateAdded,
        'Phone Number': phoneNumber,
        Email: email,
        Origin: origin,
    });
};
