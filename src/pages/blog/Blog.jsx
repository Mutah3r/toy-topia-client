import { useEffect } from "react";

const Blog = () => {
    useEffect(() => {
        document.title = 'ToyTopia | Blog'
    }, []);
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <h1 className=' mb-5 text-red-700 text-center text-4xl font-bold'>Blog</h1>
            <div className="flex flex-col gap-5">


                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="rounded-md peer-checked:rounded-b-none collapse-title bg-rose-500 text-primary-content peer-checked:bg-rose-600 peer-checked:text-secondary-content">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="rounded-b-md collapse-content bg-rose-300 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content peer-checked:p-5">
                        <p className="text-black">
                            Access tokens and refresh tokens are integral parts of authentication systems. An access token is a credential granted to a client upon successful authentication, used to access protected resources. It contains information about the client's identity and permissions. Refresh tokens are long-lived tokens that allow obtaining new access tokens without re-authentication once the current one expires.
                            <br />
                            <br />
                            To ensure security, access tokens are typically stored on the client-side using mechanisms like HTTP-only cookies or browser storage (e.g., local storage). This prevents unauthorized access and helps protect against cross-site scripting (XSS) attacks. Refresh tokens, however, should never be stored on the client-side due to their elevated privileges. They are securely stored on the server-side, usually within a database or token management system.
                            <br />
                            <br />
                            It's important to maintain a clear distinction between the handling and storage of access tokens and refresh tokens to ensure the overall security of the authentication process.
                        </p>
                    </div>
                </div>



                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="rounded-md peer-checked:rounded-b-none collapse-title bg-rose-500 text-primary-content peer-checked:bg-rose-600 peer-checked:text-secondary-content">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="rounded-b-md collapse-content bg-rose-300 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content peer-checked:p-5">
                        <p className="text-black">
                            SQL databases and NoSQL databases differ in their data models and query languages. SQL databases use structured query language for defining and manipulating data stored in tables with predefined schemas, making them suitable for complex transactions and relationships. NoSQL databases, on the other hand, offer a flexible schema design and use a variety of data models like key-value, document, columnar, or graph, providing scalability and high-performance for large-scale data processing. SQL databases are known for strong consistency and ACID compliance, while NoSQL databases prioritize scalability, availability, and eventual consistency. Each database type has its strengths, and the choice depends on specific requirements and use cases.
                        </p>
                    </div>
                </div>



                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="rounded-md peer-checked:rounded-b-none collapse-title bg-rose-500 text-primary-content peer-checked:bg-rose-600 peer-checked:text-secondary-content">
                        What is express js? What is Nest JS?
                    </div>
                    <div className="rounded-b-md collapse-content bg-rose-300 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content peer-checked:p-5">
                        <p className="text-black">
                            Express.js is a popular and lightweight web application framework for Node.js. It simplifies the development of web APIs and applications with its minimalistic and un-opinionated approach. On the other hand, NestJS is a progressive framework for building scalable server-side applications using TypeScript. It draws inspiration from Angular and provides a structured and extensible development experience. Express.js is known for its flexibility, while NestJS offers a more opinionated and modular architecture. Both frameworks have their strengths, catering to different development preferences and requirements.
                        </p>
                    </div>
                </div>



                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="rounded-md peer-checked:rounded-b-none collapse-title bg-rose-500 text-primary-content peer-checked:bg-rose-600 peer-checked:text-secondary-content">
                        What is MongoDB aggregate and how does it work?
                    </div>
                    <div className="rounded-b-md collapse-content bg-rose-300 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content peer-checked:p-5">
                        <p className="text-black">
                            The MongoDB aggregate is a versatile feature that enables advanced data analysis and transformation within the MongoDB database. It operates through a flexible pipeline of stages, where each stage performs specific operations on the data. These stages can include grouping, filtering, sorting, joining, and aggregating data, allowing for complex data manipulations. The aggregate framework optimizes query performance by utilizing indexes and executing operations on the database server, making it efficient for handling large datasets. It serves as a valuable tool for performing sophisticated data summarization, analytics, and reporting tasks within MongoDB.
                        </p>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Blog;