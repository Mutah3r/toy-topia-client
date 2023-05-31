import { useContext, useEffect } from 'react';
import droneImage from '../../assets/others/rcDrone.jpg'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    useEffect(() => {
        document.title = 'ToyTopia | Add Toy'
    }, []);

    const { user } = useContext(AuthContext);
    const handleAddToy = event => {
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


        if (category === 'DEFAULT') {
            // alert("select a proper category");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Select a proper category!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return;
        }
        const toyInfo = { title, category, image, price, rating, quantity, sellerName, sellerEmail, description };

        // console.log(toyInfo);
        fetch('https://toy-topia-server-assignment.onrender.com/addToy',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(toyInfo)
            }
        )
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    // alert('Toy added successfully');
                    Swal.fire(
                        'Good job!',
                        'Toy added successfully ',
                        'success'
                    )
                    // form.reset();
                }
            })


    }
    return (
        <div className="max-w-screen-xl mx-auto py-12">
            <h1 className='mb-5 text-red-700 text-center text-4xl font-bold'>Add A Toy</h1>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <img src={droneImage} className='h-full rounded-lg' draggable={false} alt="" />
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleAddToy} className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        required
                                        className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        name="name"
                                    />
                                </div>

                                <div className='w-full'>
                                    <label className="sr-only" htmlFor="subCategory">Sub Category</label>
                                    <select required defaultValue={'DEFAULT'} id="subCategory" name="subCategory" className="font-normal border border-gray-200 select w-full focus:outline-none focus:border-black focus:border-2">
                                        <option disabled value="DEFAULT">Select Sub-Category</option>
                                        <option>Robot Toys</option>
                                        <option>RC (Remote Control) Toys</option>
                                        <option>Interactive Plush Toys</option>
                                        <option>Educational Electronic Toys</option>
                                        <option>Electronic Building Sets</option>
                                        <option>Musical Electronic Toys</option>
                                        <option>Handheld Electronic Games</option>
                                        <option>Electronic Learning Tablets</option>
                                        <option>Electronic Pets</option>
                                        <option>Electronic Board Games</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="photo">Photo URL</label>
                                        <input
                                            required
                                            className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Photo URL"
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
                                        rows="8"
                                        id="description"
                                        name="description"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <input
                                        type="submit"
                                        className="cursor-pointer block w-full rounded-lg bg-rose-600 px-5 py-3 font-medium text-white"
                                        value="Add"
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

export default AddToy;