// import './HomeBanner.css';

import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1632037901353-3122ea5681c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 to-white/25 bg-gradient-to-r"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Your Destination

                            <strong className="block font-extrabold text-rose-700">
                                For Electronic Toys!
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Unleash kids boundless imagination, fostering joy and growth at ToyTopia!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                to='/allToys'
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </Link>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
};

export default HomeBanner;