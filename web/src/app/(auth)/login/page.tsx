// Page: user/login
const Page: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="p-8 bg-darkGray rounded shadow-md text-gray-200">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="w-full py-2 px-3 border border-gray-300 rounded text-black"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-400 mb-2"
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input
                        className="w-full py-2 px-3 border border-gray-300 rounded text-black"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex justify-center items-center mt-8 mb-7">
                    <button className="bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded">
                        Log In
                    </button>
                    <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded ml-2">
                        Sign Up
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full">
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
