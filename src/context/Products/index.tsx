import { createContext, useContext, useEffect, useState } from 'react';
import IProduct from 'types/IProduct';

type IProductsContext = {
    products: IProduct[];
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
};

const defaultValue: IProductsContext = {
    products: [],
    setProducts: () => null
};

const ProductsContext = createContext<IProductsContext>(defaultValue);

function ProductsContextProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // URL está diferente devido ao proxy (arquivo vite.config.ts)
                const productsData = await fetch('/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
                    .then(res => res.json())
                    .then(({ products }: { products: IProduct[] }) => products)
                ;

                setProducts(productsData);
            } catch (error) {
                console.log('Erro ao receber dados dos produtos.');
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}

function useProductsContext() {
    return useContext(ProductsContext);
}

export { ProductsContext, ProductsContextProvider, useProductsContext };