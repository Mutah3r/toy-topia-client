import { Link } from "react-router-dom";

const NewCollection = () => {
    return (
        <section data-aos="fade-up">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                        <div className="max-w-md mx-auto text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Arrivals</h2>

                                <p className="mt-4 text-gray-500">
                                    Toys are more than just entertainment objects; they are conduits to imagination and creativity. They ignite curiosity, facilitate storytelling, and promote growth in children. Embracing the magic of toys enhances childhood experiences and cultivates joy, dreams, and self-discovery.
                                </p>
                            </header>

                            <Link
                                to='allToys'
                                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-rose-600 border-rose-600 rounded hover:shadow focus:outline-none "
                            >
                                Shop All
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <a href="#" className="block group">
                                    <img
                                        src="https://i.ibb.co/wWjbxxV/RC-Drone.jpg"
                                        alt=""
                                        className="object-cover w-full rounded aspect-square"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            RC Drone
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">$89.99</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="block group">
                                    <img
                                        src="https://i.ibb.co/F6KC3fs/CLASSIC-BATTLESHIP-MOVIE-EDITION.jpg"
                                        alt=""
                                        className="object-cover w-full rounded aspect-square"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Battleship Electronic Game
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">$19.99</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCollection;