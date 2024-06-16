import { createContext, useContext, useState } from 'react';
import IProduct from 'types/IProduct';

type IModalContext = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openModal: () => void;
    closeModal: () => void;
    productData: IProduct;
    setProductData: React.Dispatch<React.SetStateAction<IProduct>>;
};

const defaultProductData: IProduct = {
    productName: '',
    descriptionShort: '',
    photo: '',
    price: 0
};

const defaultValue: IModalContext = {
    open: false,
    setOpen: () => null,
    openModal: () => null,
    closeModal: () => null,
    productData: defaultProductData,
    setProductData: () => null
};

const ModalContext = createContext<IModalContext>(defaultValue);

function ModalContextProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [productData, setProductData] = useState<IProduct>(defaultProductData);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <ModalContext.Provider
            value={{ open, setOpen, openModal, closeModal, productData, setProductData }}
        >
            {children}
        </ModalContext.Provider>
    );
}

function useModalContext() {
    return useContext(ModalContext);
}

export { ModalContext, ModalContextProvider, useModalContext };