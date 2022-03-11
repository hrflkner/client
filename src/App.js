import Header from './components/Header';
import ControlBar from './components/ControlBar';
import ContactTable from './components/ContactTable';

import './css/globals.css';

function App() {
    return (
        <>
            <Header />

            <main>
                <ControlBar />
                <ContactTable />
            </main>
        </>
    );
}

export default App;
