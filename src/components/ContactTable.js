import { queryDataBase } from './util/QueryDataBase';

function ContactTable() {
    // See: src/components/utils/QueryDataBase
    let contactEntries = queryDataBase();

    return (
        <>
            <section className="contacttable-container">
                {contactEntries.map((contact) => (
                    <section className="contact-grid row">
                        <section>{contact.Name}</section>
                        <section>{contact.Company}</section>
                        <section>{contact['Date Added']}</section>
                        <section>{contact['Phone Number']}</section>
                        <section>{contact.Email}</section>
                        <section>{contact.Origin}</section>
                    </section>
                ))}
            </section>
        </>
    );
}

export default ContactTable;
