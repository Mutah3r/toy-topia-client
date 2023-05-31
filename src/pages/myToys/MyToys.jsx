import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
    useEffect(() => {
        document.title = 'ToyTopia | My Toys'
    }, []);

    const [myToys, setMyToys] = useState([]);
    const [ascendingToys, setAscendingToys] = useState([]);
    const [descendingToys, setDescendingToys] = useState([]);
    const { user } = useContext(AuthContext);
    const [isAscending, setIsAscending] = useState(false);
    const [isDescending, setIsDescending] = useState(false);

    useEffect(() => {
        fetch(`https://toy-topia-server-assignment.onrender.com/myToys/${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }, [user]);

    useEffect(() => {
        fetch(`https://toy-topia-server-assignment.onrender.com/myToys/ascending/${user.email}`)
            .then(res => res.json())
            .then(data => setAscendingToys(data));
    }, [user]);

    useEffect(() => {
        fetch(`https://toy-topia-server-assignment.onrender.com/myToys/descending/${user.email}`)
            .then(res => res.json())
            .then(data => setDescendingToys(data));
    }, [user]);

    const handleDeleteToy = toyId => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-topia-server-assignment.onrender.com/toys/${toyId}`,
                    {
                        method: 'DELETE'
                    }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Toy deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== toyId);
                            setMyToys(remaining);
                        }
                    })
            }
        })

    }

    return (
        <div className="max-w-screen-xl mx-auto py-12">
            <h1 className=' mb-5 text-red-700 text-center text-4xl font-bold'>My Toys</h1>
            <div className="text-right px-5">
                <span className="mr-2 mb-2">
                    Sort By Price:
                </span>
                <br />
                <span
                    className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm mt-2"
                >
                    <button
                        onClick={() => {
                            setMyToys(ascendingToys)
                            setIsAscending(true);
                            setIsDescending(false);
                        }}
                        className={`inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative ${isAscending ? "bg-stone-200 hover:bg-stone-200" : ""}`}
                    >
                        Ascending
                    </button>

                    <button
                        onClick={() => {
                            setMyToys(descendingToys)
                            setIsAscending(false);
                            setIsDescending(true);
                        }}
                        className={`inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative ${isDescending ? "bg-stone-200 hover:bg-stone-200" : ""}`}
                    >
                        Descending
                    </button>
                </span>
            </div>
            <div className="flex flex-col gap-6 p-4">
                <div key={crypto.randomUUID()} className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="text-left">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    Toy Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    Sub-Category
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
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                myToys.map(toy => {
                                    return (
                                        <tr key={crypto.randomUUID()}>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{toy.title}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{toy.category}</td>
                                            <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">{toy.price}</td>
                                            <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">{toy.rating}</td>
                                            <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">{toy.quantity ? toy.quantity : "-"}</td>
                                            <td className="text-center whitespace-nowrap px-4 py-2">

                                                <Link to={`/updateToys/${toy._id}`}>
                                                    <button
                                                        className="w-full rounded bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto focus:ring-0"
                                                    >
                                                        Update
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() => { handleDeleteToy(toy._id) }}
                                                    className="ml-2 w-full rounded bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto focus:ring-0"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;