function ControlBar() {
    return (
        <>
            <section className="control-bar">
                <button className="add-contact">+</button>
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
                        <li>Date Added</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                        <li>Origin</li>
                    </ul>
                </section>
            </section>
        </>
    );
}

export default ControlBar;
