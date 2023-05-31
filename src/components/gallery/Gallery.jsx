import { Link } from 'react-router-dom';
import img1 from '../../assets/gallery/1.jpg';
import img2 from '../../assets/gallery/2.jpg';
import img3 from '../../assets/gallery/3.jpg';
import img4 from '../../assets/gallery/4.jpg';
import img5 from '../../assets/gallery/5.jpg';
import img6 from '../../assets/gallery/6.jpg';

const Gallery = () => {
    return (
        <section className='max-w-screen-xl mx-auto'>
            <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <h1 className=' mb-5 text-red-700 text-center text-4xl font-bold'>Gallery</h1>
                <div
                    className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
                >
                    <div
                        className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
                    >
                        <h2 className="text-3xl font-bold sm:text-4xl">Play, Imagine, Explore.</h2>

                        <p className="mt-4 text-gray-600">
                            At Play, Imagine, Explore toys, we believe in the power of play to inspire, educate, and ignite children`s imaginations. Our carefully curated collection of toys is designed to encourage exploration, creativity, and endless fun.
                        </p>

                        <Link
                            to='/allToys'
                            className="mt-2 block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
                        >
                            Browse All Toys
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <img className='rounded-xl' src={img1} alt="" />
                        <img className='rounded-xl' src={img2} alt="" />
                        <img className='rounded-xl' src={img3} alt="" />
                        <img className='rounded-xl' src={img4} alt="" />
                        <img className='rounded-xl' src={img5} alt="" />
                        <img className='rounded-xl' src={img6} alt="" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Gallery;