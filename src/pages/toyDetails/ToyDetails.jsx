import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';


const ToyDetails = () => {
    // const [starInfo, setStarInfo] = useState([0, 0, 5]); // full star, half star, blank star
    const [fullStar, setFullStar] = useState([]);
    const [halfStar, setHalfStar] = useState([]);
    const [blankStar, setBlankStar] = useState([1,1,1,1,1]);

    const [toyInfo, setToyInfo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://toy-topia-server-assignment.onrender.com/toys/${id}`)
            .then(res => res.json())
            .then(data => setToyInfo(data))
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                navigate('/error');
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        document.title = `ToyTopia | ${toyInfo?.title ? toyInfo.title : 'Details'}`
    }, [toyInfo]);

    useEffect(() => {
        const full = Math.floor(toyInfo.rating);
        const half = ((Math.ceil(toyInfo.rating)-toyInfo.rating).toFixed(2) <= 0.5 && (Math.ceil(toyInfo.rating)-toyInfo.rating).toFixed(2) != 0)? 1 : 0;
        const blank = 5 - full-half;
        // console.log({rating, full, half, blank});
        // setStarInfo(full, half, blank);
        let fullStarArray = [];
        for(let i=0; i<full; i++) fullStarArray.push(i);


        let halfStarArray = [];
        for(let i=0; i<half; i++) halfStarArray.push(i);
        
        let blankStarArray = [];
        for(let i=0; i<blank; i++) blankStarArray.push(i);

        setFullStar(fullStarArray);
        setHalfStar(halfStarArray);
        setBlankStar(blankStarArray);

        // console.log('full',fullStar, 'half',halfStar, 'blank',blankStar);
    }, [toyInfo]);

    // console.log(toyInfo);
    return (
        <div className="max-w-screen-xl mx-auto">

            <section>
                <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div>
                        <h1 className="text-2xl font-bold lg:text-3xl">{toyInfo.title}</h1>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                        <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <img
                                    src={toyInfo.image}
                                    className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                                />
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-0">
                            <div className="space-y-4 lg:pt-8">
                                <fieldset>
                                    <legend className="text-lg font-bold">Rating</legend>
                                    <div className="text-rose-700 flex items-center gap-[2px]">
                                        {
                                            // eslint-disable-next-line no-unused-vars
                                            fullStar.map(star => <BsStarFill key={crypto.randomUUID()} />)
                                        }
                                        {
                                            // eslint-disable-next-line no-unused-vars
                                            halfStar.map(star => <BsStarHalf key={crypto.randomUUID()} />)
                                        }
                                        {
                                            // eslint-disable-next-line no-unused-vars
                                            blankStar.map(star => <BsStar key={crypto.randomUUID()} />)
                                        }
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend className="text-lg font-bold">Seller Info</legend>
                                    <div className="rounded border bg-gray-100 p-2 mt-1">
                                        <h1 className="text-sm ml-2">Name: {toyInfo.sellerName ? toyInfo.sellerName : "ToyTopia"}</h1>
                                        <h1 className="text-sm mt-1 ml-2">Email: {toyInfo.sellerEmail ? toyInfo.sellerEmail : "toy@topia.com"}</h1>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="text-lg font-bold">Available Quantity</legend>
                                    <div className="rounded border bg-gray-100 p-2 mt-1">
                                        <h1 className="text-sm mt-1 ml-2">{toyInfo.quantity}</h1>
                                    </div>
                                </fieldset>


                                <div>
                                    <p className="text-xl font-bold">{toyInfo.price}</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                                >
                                    Add to cart
                                </button>

                                <button
                                    type="button"
                                    className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                                >
                                    Notify when on sale
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="prose max-w-none">
                                <h2 className="text-lg font-bold">Description</h2>
                                <p>
                                    {toyInfo.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToyDetails;