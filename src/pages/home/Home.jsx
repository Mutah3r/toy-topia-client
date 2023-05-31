import { useEffect } from "react";
import Gallery from "../../components/gallery/Gallery";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import NewCollection from "../../components/newCollection/NewCollection";
import ShopByCategory from "../../components/shopByCategory/ShopByCategory";
import Subscribe from "../../components/subscribe/Subscribe";

const Home = () => {
    useEffect(()=>{
        document.title = 'ToyTopia | Home'
    },[]);
    return (
        <div>
            <HomeBanner />   
            <NewCollection />
            <ShopByCategory />
            <Gallery />      
            <Subscribe />
        </div>
    );
};

export default Home;