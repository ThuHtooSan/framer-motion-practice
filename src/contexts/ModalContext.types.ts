export type ModalContextProviderProps = {
  children: React.ReactNode;
};

export type ModalContextType = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
