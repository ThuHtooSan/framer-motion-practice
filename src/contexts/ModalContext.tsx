import { createContext, useState } from 'react';
import {
  ModalContextType,
  ModalContextProviderProps,
} from './ModalContext.types';

const ModalContext = createContext({} as ModalContextType);

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
