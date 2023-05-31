import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const UpdateToy = () => {
    useEffect(() => {
        document.title = 'ToyTopia | Update Toy'
    }, []);

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [toyInfo, setToyInfo] = useState(null);


    useEffect(() => {
        fetch(`https://toy-topia-server-assignment.onrender.com/toys/${id}`)
            .then(res => res.json())
            .then(data => setToyInfo(data))
    }, [id]);

    const handleUpdateToy = (event) => {
        event.preventDefault();

        // get form info
        const form = event.target;
        const title = form.name.value;
        const image = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.subCategory.value;
        const description = form.description.value;

        // get info of the user who is posting toy
        const sellerName = user.displayName ? user.displayName : null;
        const sellerEmail = user.email;

        const updatedToyInfo = { title, category, image, price, rating, quantity, sellerName, sellerEmail, description };

        // console.log(updatedToyInfo);
        fetch(`https://toy-topia-server-assignment.onrender.com/toys/${toyInfo._id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedToyInfo)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // alert('Toy updated successfully')
                    Swal.fire(
                        'Good job!',
                        'Toy updated successfully!',
                        'success'
                    )
                    setToyInfo(updatedToyInfo);
                }
            })


    }

    return (
        <div className="max-w-screen-xl mx-auto py-12">
            <h1 className='mb-5 text-red-700 text-center text-4xl font-bold'>Update Toy</h1>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            {toyInfo?.image &&
                                <img src={toyInfo.image} className='h-full rounded-lg' draggable={false} alt="" />
                            }
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleUpdateToy} className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        required
                                        className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        defaultValue={toyInfo?.title}
                                        type="text"
                                        id="name"
                                        name="name"
                                    />
                                </div>

                                {toyInfo?.category &&
                                    <div className='w-full'>
                                        <label className="sr-only" htmlFor="subCategory">Sub Category</label>
                                        <select required defaultValue={toyInfo.category} id="subCategory" name="subCategory" className="font-normal border border-gray-200 select w-full focus:outline-none focus:border-black focus:border-2">
                                            <option disabled>Select Sub-Category</option>
                                            <option value={'Robot Toys'}>Robot Toys</option>
                                            <option value={'RC (Remote Control) Toys'}>RC (Remote Control) Toys</option>
                                            <option value={'Interactive Plush Toys'}>Interactive Plush Toys</option>
                                            <option value={'Educational Electronic Toys'}>Educational Electronic Toys</option>
                                            <option value={'Electronic Building Sets'}>Electronic Building Sets</option>
                                            <option value={'Musical Electronic Toys'}>Musical Electronic Toys</option>
                                            <option value={'Handheld Electronic Games'}>Handheld Electronic Games</option>
                                            <option value={'Electronic Learning Tablets'}>Electronic Learning Tablets</option>
                                            <option value={'Electronic Pets'}>Electronic Pets</option>
                                            <option value={'Electronic Board Games'}>Electronic Board Games</option>
                                        </select>
                                    </div>

                                }

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="photo">Photo URL</label>
                                        <input
                                            required
                                            className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Photo URL"
                                            defaultValue={toyInfo?.image}
                                            type="text"
                                            id="photo"
                                            name="photo"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="price">Price</label>
                                        <input
                                            required
                                            className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Price"
                                            defaultValue={toyInfo?.price}
                                            type="number"
                                            step="0.01"
                                            id="price"
                                            name="price"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="rating">Rating</label>
                                        <input
                                            required
                                            className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Rating"
                                            defaultValue={toyInfo?.rating}
                                            type="number"
                                            step="0.01"
                                            id="rating"
                                            name="rating"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="quantity">Available Quantity</label>
                                        <input
                                            required
                                            className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Available Quantity"
                                            defaultValue={toyInfo?.quantity}
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                        />
                                    </div>
                                </div>



                                <div>
                                    <label className="sr-only" htmlFor="description">Description</label>

                                    <textarea
                                        required
                                        className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Description"
                                        defaultValue={toyInfo?.description}

                                        rows="8"
                                        id="description"
                                        name="description"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <input
                                        type="submit"
                                        className="cursor-pointer block w-full rounded-lg bg-rose-600 px-5 py-3 font-medium text-white"
                                        value="Update"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateToy;