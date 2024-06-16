import Header from 'components/Header';
import Banner from 'components/Banner';
import Categories from 'components/Categories';
import Products from 'components/Products';
import Brands from 'components/Brands';
import Footer from 'components/Footer';
import Modal from 'components/Modal';
import { useModalContext } from 'context/Modal';

function App() {
    const { open } = useModalContext();

    return (
        <>
            <Header/>

            <main>
                <Banner/>
                <Categories/>
                <Products showPanel/>
                <Products showPanel={false}/>
                <Brands/>

                {open && <Modal/>}
            </main>

            <Footer/>
        </>
    );
}

export default App;