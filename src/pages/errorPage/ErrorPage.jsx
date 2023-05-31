import { Link } from "react-router-dom";
import errorImage from '../../assets/others/error.jpg'

const ErrorPage = () => {
    return (
        <div className="flex flex-col h-screen bg-white">
            <img
                src={errorImage}
                draggable={false}
                alt=""
                className="object-cover w-full h-64"
            />

            <div className="flex items-center justify-center flex-1">
                <div className="max-w-xl px-4 py-8 mx-auto text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Page not found!
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Try searching again, or return home to start from the beginning.
                    </p>

                    <Link
                        to='/'
                        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-rose-600 rounded hover:bg-rose-700 focus:outline-none focus:ring-0"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;