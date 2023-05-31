import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch('https://toy-topia-server-assignment.onrender.com/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                // console.log(data);
            });
    }, []);

    useEffect(() => {
        fetch('https://toy-topia-server-assignment.onrender.com/')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);

    return (
        <section className='max-w-screen-xl mx-auto'>
            <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <h1 className=' mb-5 text-red-700 text-center text-4xl font-bold'>Browse All Toys</h1>
                <Tabs>
                    <TabList>
                        {
                            categories.map(category => <Tab key={crypto.randomUUID()}>{category}</Tab>)
                        }
                    </TabList>

                    {
                        categories.map(category => {
                            return (
                                <TabPanel key={crypto.randomUUID()}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                        {
                                            toys.map(toy => {
                                                if (toy.category === category) {
                                                    return (
                                                        <Link key={crypto.randomUUID()} to={`/toys/${toy._id}`} className="group relative block overflow-hidden">
                                                            <button
                                                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                                            >
                                                                <span className="sr-only">Wishlist</span>

                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="1.5"
                                                                    stroke="currentColor"
                                                                    className="h-4 w-4"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                                    />
                                                                </svg>
                                                            </button>

                                                            <img
                                                                src={toy.image}
                                                                alt=""
                                                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                                            />

                                                            <div className="relative border border-gray-100 bg-white p-6">
                                                                <span
                                                                    className="whitespace-nowrap  bg-stone-300 px-3 py-1.5 text-xs font-medium rounded-md"
                                                                >
                                                                    Rating: {toy.rating}
                                                                </span>

                                                                <h3 className="mt-4 text-lg font-medium text-gray-900">{toy.title}</h3>

                                                                <p className="mt-1.5 text-sm text-gray-700">${toy.price}</p>

                                                                <div className="mt-4">
                                                                    <button
                                                                        className="block w-full rounded text-white bg-red-600 p-4 text-sm font-medium transition hover:scale-105"
                                                                    >
                                                                        View Details
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </TabPanel>
                            )
                        })
                    }
                </Tabs>
            </div>
        </section>
    );
};

export default ShopByCategory;