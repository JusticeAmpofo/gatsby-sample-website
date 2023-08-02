import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalIsOpen(true);
        setModalContent(content);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalContent(null);
    };

    return (
        <GlobalContext.Provider
            value={{
                modalIsOpen,
                modalContent,
                openModal,
                closeModal,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
