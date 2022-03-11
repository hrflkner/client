import axios from 'axios';

function ContactTable() {
    const res = axios.get('http://localhost:5000/contactapi');

    return (
        <>
            <div className="contact-grid">
                <h1></h1>
            </div>
        </>
    );
}

export default ContactTable;
