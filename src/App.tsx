import Header from 'components/Header';
import Banner from 'components/Banner';
import Categories from 'components/Categories';
import Products from 'components/Products';
import Brands from 'components/Brands';
import Footer from 'components/Footer';

function App() {
    return (
        <>
            <Header/>

            <main>
                <Banner/>
                <Categories/>
                <Products showPanel/>
                <Products showPanel={false}/>
                <Brands/>
            </main>

            <Footer/>
        </>
    );
}

export default App;