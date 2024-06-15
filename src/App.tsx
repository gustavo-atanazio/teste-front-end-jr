import Header from 'components/Header';
import Banner from 'components/Banner';
import Categories from 'components/Categories';
import Footer from 'components/Footer';

function App() {
    return (
        <>
            <Header/>

            <main>
                <Banner/>
                <Categories/>
            </main>

            <Footer/>
        </>
    );
}

export default App;