import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import avater from '../../../assets/others/avatar.svg'

// TODO: update mobile navbar links
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    }

    return (
        <>
            <header aria-label="Site Header" className="border-b border-gray-100 hidden lg:block">
                <div
                    className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
                >
                    <div className="flex items-center gap-4">
                        <button type="button" className="p-2 lg:hidden">
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        <Link to="/" className="flex text-red-700 text-2xl font-bold items-center gap-1">
                            <img className="h-12" src="/logo.png" alt="" />
                            ToyTopia
                        </Link>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-8">
                        <nav
                            aria-label="Site Nav"
                            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
                        >
                            <Link
                                to="/"
                                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                            >
                                Home
                            </Link>

                            <Link
                                to="/allToys"
                                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                            >
                                All Toys
                            </Link>

                            {user &&
                                <Link
                                    to="/myToys"
                                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                                >
                                    My Toys
                                </Link>
                            }

                            {user &&
                                <Link
                                    to="/addToy"
                                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                                >
                                    Add Toy
                                </Link>
                            }

                            <Link
                                to="/blog"
                                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                            >
                                Blog
                            </Link>
                            {!user &&
                                <Link
                                    to="/login"
                                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                                >
                                    Login
                                </Link>
                            }
                            {!user &&
                                <Link
                                    to="/register"
                                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                                >
                                    Sign Up
                                </Link>
                            }
                            {user &&
                                <span
                                    onClick={handleLogout}
                                    to="/register"
                                    className="cursor-pointer block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                                >
                                    Logout
                                </span>
                            }
                        </nav>

                        {user &&
                            <div className="flex items-center">
                                <div className="flex items-center border-x border-gray-100">
                                    <span className="border-e border-e-gray-100">
                                        <Link
                                            to="/"
                                            className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                                        >
                                            <div className={user?.displayName? "tooltip tooltip-left" : ""} data-tip={user?.displayName? user.displayName : ""}>
                                                {!user || !user.photoURL ?
                                                    <div className="p-1">
                                                    <img className="mask mask-squircle w-full h-full"
                                                        src={avater}
                                                    />
                                                </div>
                                                    :
                                                    <div className="p-1">
                                                        <img className="mask mask-squircle w-full h-full"
                                                            src={user.photoURL}
                                                        />
                                                    </div>

                                                }
                                            </div>

                                            <span className="sr-only"> Account </span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </header >


            <div className="navbar bg-base-100 lg:hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-xs font-bold uppercase tracking-wide text-gray-500 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className="block border-b-4 border-transparent bg-white hover:border-current hover:text-red-700">Home</Link></li>
                            <li><Link to='/allToys' className="block border-b-4 border-transparent bg-white hover:border-current hover:text-red-700">All Toys</Link></li>
                            {user &&
                                <>
                                    <li><Link to='/myToys' className="block border-b-4 border-transparent bg-white hover:border-current hover:text-red-700">My Toys</Link></li>
                                    <li><Link to='/addToy' className="block border-b-4 border-transparent bg-white hover:border-current hover:text-red-700">Add Toy</Link></li>
                                </>
                            }
                            <li><Link to="/blog" className="block border-b-4 border-transparent bg-white hover:border-current hover:text-red-700">Blog</Link></li>
                            {!user &&
                                <li><Link to="/login" className="block border-b-4 border-transparent bg-white hover:border-current hover:text-red-700">Login</Link></li>
                            }
                            {!user &&
                                <li><Link to="/register" className="block border-b-4 border-transparent bg-white hover:border-current hover:text-red-700">Sign Up</Link></li>
                            }
                            {user &&
                                <li><span onClick={handleLogout} className="block border-b-4 border-transparent bg-white hover:border-current hover:text-red-700">Logout</span></li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link className="btn btn-ghost normal-case text-red-700 text-2xl font-bold flex items-center gap-1">
                        <img className="h-12" src="/logo.png" alt="" />
                        ToyTopia
                    </Link>
                </div>
                <div className="navbar-end">
                {user &&
                            <div className="flex items-center">
                                <div className="flex items-center border-x border-gray-100">
                                    <span className="border-e border-e-gray-100">
                                        <Link
                                            to="/"
                                            className="grid h-12 w-12 place-content-center border-b-4 border-transparent hover:border-red-700"
                                        >
                                            <div className={user?.displayName? "tooltip tooltip-left" : ""} data-tip={user?.displayName? user.displayName : ""}>
                                                {!user || !user.photoURL ?
                                                    <div className="p-1">
                                                    <img className="mask mask-squircle w-full h-full"
                                                        src={avater}
                                                    />
                                                </div>
                                                    :
                                                    <div className="p-1">
                                                        <img className="mask mask-squircle w-full h-full"
                                                            src={user.photoURL}
                                                        />
                                                    </div>

                                                }
                                            </div>

                                            <span className="sr-only"> Account </span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        }
                </div>
            </div>
        </>


    );
};

export default Header;