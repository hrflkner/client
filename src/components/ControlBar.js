import AddContact from './AddContact/OpenAddContactForm';

function ControlBar() {
    return (
        <>
            <section className="control-bar">
                <AddContact />
                <section className="display-date">
                    <label className="display-checkbox">
                        <input type="checkbox" name="date" />
                        <span className="custom-checkbox"></span>
                        <span>Display Date Added</span>
                    </label>
                </section>
                <section className="column-labels">
                    <ul>
                        <li>Name</li>
                        <li>Company</li>
                        <li>Date</li>
                        <li>Phone</li>
                        <li>Email</li>
                        <li>Origin</li>
                    </ul>
                </section>
            </section>
        </>
    );
}

export default ControlBar;
