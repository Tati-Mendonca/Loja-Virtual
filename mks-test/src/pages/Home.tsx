import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const openCartSidebar = () => {
        setCount(count + 1);
    };

    return (
        <>
            {/* <Sidebar /> */}
            <Navbar openCartSidebar={count} />
            <ProductGrid openCartSidebar={openCartSidebar} />
            <Footer />
        </>
    );
};

export default Home;
