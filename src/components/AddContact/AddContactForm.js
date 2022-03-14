import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const contactCollectionRef = collection(db, 'contact-list');

function AddContactForm() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [dateAdded, setDateAdded] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [origin, setOrigin] = useState('');

    const createContact = async () => {
        await addDoc(contactCollectionRef, {
            Name: name,
            Company: company,
            'Date Added': dateAdded,
            'Phone Number': phoneNumber,
            Email: email,
            Origin: origin,
        });
    };

    const [popupState, setPopupState] = useState(true);

    function handleSubmit() {
        createContact();
        setPopupState(!popupState);
    }

    return (
        <>
            {popupState ? (
                <div className="popup-container">
                    <section className="popup">
                        <button
                            className="close-form-btn"
                            onClick={() => setPopupState(!popupState)}
                        >
                            &#215;
                        </button>
                        <section className="popup-form">
                            <h2>Add your contacts here!</h2>
                            <form className="addcontact-form">
                                <section>
                                    <span>Name: </span>
                                    <input
                                        placeholder="Full Name..."
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                    />
                                </section>
                                <section>
                                    <span>Company: </span>
                                    <input
                                        placeholder="Company..."
                                        onChange={(event) => {
                                            setCompany(event.target.value);
                                        }}
                                    />
                                </section>
                                <section>
                                    <span>Date: </span>
                                    <input
                                        type="date"
                                        placeholder="Date we met..."
                                        onChange={(event) => {
                                            setDateAdded(event.target.value);
                                        }}
                                    />
                                </section>
                                <section>
                                    <span>Number: </span>
                                    <input
                                        placeholder="Phone number..."
                                        onChange={(event) => {
                                            setPhoneNumber(event.target.value);
                                        }}
                                    />
                                </section>
                                <section>
                                    <span>Email: </span>
                                    <input
                                        placeholder="Email address..."
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </section>
                                <section>
                                    <span>Meeting place: </span>
                                    <input
                                        placeholder="Where we met..."
                                        onChange={(event) => {
                                            setOrigin(event.target.value);
                                        }}
                                    />
                                </section>
                            </form>
                            <button
                                className="add-contact-btn"
                                onClick={handleSubmit}
                                type="submit"
                            >
                                Save Contact
                            </button>
                        </section>
                    </section>
                </div>
            ) : (
                ''
            )}
        </>
    );
}

export default AddContactForm;
