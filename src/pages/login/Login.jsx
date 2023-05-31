import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    useEffect(() => {
        document.title = 'ToyTopia | Login'
    }, []);

    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [logError, setLogError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogIn = event => {
        event.preventDefault();
        setLogError("");

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                // eslint-disable-next-line no-unused-vars
                const user = userCredential.user;
                // ...
                navigate(from, { replace: true });
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                // eslint-disable-next-line no-unused-vars
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setLogError("You have entered invalid email or password.")
            });
    }

    const handleGoogleLogin = () => {
        googleLogin()
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
                navigate(from, { replace: true });
                // eslint-disable-next-line no-unused-vars
            }).catch((error) => {
                // ...
            });
    }

    const handleGithubLogin = () => {
        githubLogin()
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
                navigate(from, { replace: true });
            // eslint-disable-next-line no-unused-vars
            }).catch((error) => {
                // ...
            });
    }



    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
            </div>

            <form onSubmit={handleLogIn} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        No account? <Link className="underline" to='/register'>Sign up</Link>
                    </p>

                    <button
                        type="submit"
                        className="block px-12 py-3 text-sm font-medium text-white transition bg-rose-600 border-rose-600 rounded hover:shadow focus:outline-none"
                    >
                        Sign in
                    </button>
                </div>
            </form>
            <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div className="divider">OR</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button onClick={handleGoogleLogin} className="block px-12 py-3 text-sm font-medium text-white transition bg-rose-700 border-rose-600 rounded hover:shadow focus:outline-none">Sign in with Google</button>
                    <button onClick={handleGithubLogin} className="block px-12 py-3 text-sm font-medium text-white transition bg-rose-700 border-rose-600 rounded hover:shadow focus:outline-none">Sign in with GitHub</button>
                </div>
            </div>

            <p className="text-center mt-4 text-rose-700 font-bold">{logError}</p>
        </div>
    );
};

export default Login;