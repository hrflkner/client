import { useState } from 'react';
import AddContactForm from './AddContactForm';

function OpenAddContactForm() {
    const [popupState, setPopupState] = useState(false);

    return (
        <>
            <button
                className="add-contact"
                onClick={() => setPopupState(!popupState)}
            >
                <span className="add-contact-desktop">
                    + DoubleClick to Add Contacts!
                </span>
                <span className="add-contact-mobile">+ Doubletap to add!</span>
            </button>
            {popupState && <AddContactForm popupState={popupState} />}
        </>
    );
}

export default OpenAddContactForm;
