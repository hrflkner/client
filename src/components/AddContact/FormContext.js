/* eslint-disable no-unused-vars */
import { useContext, useState, createContext } from 'react';

const FormDisplayContext = createContext();
const UpdateFormDisplay = createContext();

export function useFormDisplay() {
    return useContext(FormDisplayContext);
}
export function useUpdateFormDisplay() {
    return useContext(UpdateFormDisplay);
}

export function DisplayForm({ children }) {
    const [popupState, setPopupState] = useState(false);

    function UpdateFormDisplay() {
        setPopupState(!popupState);
    }

    return (
        <FormDisplayContext.Provider value={popupState}>
            <UpdateFormDisplay.Provider value={setPopupState}>
                {children}
            </UpdateFormDisplay.Provider>
        </FormDisplayContext.Provider>
    );
}
