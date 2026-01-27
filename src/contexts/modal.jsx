import React, {
  createContext,
  useContext,
  useState,
} from 'react';


const ModalContext = createContext({});

const ModalProvider = ({ children }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [modalTitle, setModalTitle] = useState('');

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <ModalContext.Provider
      value={{
        toggleModal,
        setModalData,
        modalData,
        isModalOpen,
        modalTitle,
        setModalTitle
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}


function useModal() {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error('useModal must be used within a ModalProvider');

  return context;
}

export { ModalProvider, useModal };