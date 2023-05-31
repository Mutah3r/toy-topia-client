import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;