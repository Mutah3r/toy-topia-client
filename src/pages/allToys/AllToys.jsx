import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
    useEffect(() => {
        document.title = 'ToyTopia | All Toys'
    }, []);

    const [toyData, setToyData] = useState([]);
    const [displayedToys, setDisplayedToys] = useState([]);
    const [showMore, setShowMore] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        fetch('https://toy-topia-server-assignment.onrender.com/')
            .then(res => res.json())
            .then(data => {
                setToyData(data)
                setDisplayedToys(data)
            })
    }, []);

    const handleSearchBtn = () => {
        if (searchText != "") {
            fetch(`https://toy-topia-server-assignment.onrender.com/toySearchByText/${searchText}`)
                .then(res => res.json())
                .then(data => {
                    setDisplayedToys(data);
                });
            
        }
        else{
            setDisplayedToys(toyData);
        }

        setShowMore(true);
        setLimit(20);
    }

    return (
        <div className="max-w-screen-xl mx-auto my-10 px-4">
            <h1 className=' mb-5 text-red-700 text-center text-4xl font-bold'>All Toy Information</h1>
            <div className="flex gap-4 items-center justify-center py-5">
                <label
                    htmlFor="searchText"
                    className="-w-[200px] md:w-1/2 lg-w-1/2 relative block overflow-hidden border-b border-rose-500 bg-transparent pt-3 focus-within:border-rose-600"
                >
                    <input
                        onChange={(e) => { setSearchText(e.target.value) }}
                        type="text"
                        id="searchText"
                        placeholder="Search"
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                        className="text-rose-900 absolute start-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    >
                        Search
                    </span>
                </label>
                <button
                    onClick={handleSearchBtn}
                    className="rounded bg-rose-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto focus:ring-0"
                >
                    Search
                </button>

            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="text-left">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                Seller
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                Toy Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                Sub-category
                            </th>
                            <th className="text-center whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                Price
                            </th>
                            <th className="text-center whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                Rating
                            </th>
                            <th className="text-center whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                Available Quantity
                            </th>
                            <th className="text-center whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                View Details
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody key={crypto.randomUUID()} className="divide-y divide-gray-200">
                        {
                            displayedToys.slice(0, limit).map(toy => {
                                return (
                                    <tr key={crypto.randomUUID()}>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            {toy.sellerName ? toy.sellerName : "-"}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{toy.title}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{toy.category}</td>
                                        <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">{toy.price}</td>
                                        <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">{toy.rating}</td>
                                        <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">{toy.quantity ? toy.quantity : "-"}</td>
                                        <td className="text-center whitespace-nowrap px-4 py-2">
                                            <Link to={`/toys/${toy._id}`}>
                                                <button

                                                    className="w-full rounded bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto focus:ring-0"
                                                >
                                                    Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
                <div className="text-center my-4">
                    <button
                        onClick={() => {
                            if (showMore) {
                                // setDisplayedToys(toyData);
                                setLimit(100000000);
                                setShowMore(false);
                            }
                            else {
                                // setDisplayedToys(toyData.slice(0, 20));
                                setLimit(20);
                                setShowMore(true);
                            }
                        }}
                        className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring-0"
                        href="/download"
                    >
                        <span
                            className="absolute inset-0 border border-rose-600 group-active:border-rose-500"
                        ></span>
                        <span
                            className="block border border-rose-600 bg-rose-600 px-12 py-3 transition-transform active:border-rose-500 active:bg-rose-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                        >
                            {showMore ? "Show More" : "Show Less"}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllToys;