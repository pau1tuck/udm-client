/* eslint-disable tailwindcss/no-custom-classname */
// Page: user/login
const Page: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-darkGray rounded p-8 text-gray-200 shadow-md">
                <h2 className="mb-4 text-2xl font-bold">Login</h2>
                <div className="mb-4">
                    <label className="mb-2 block text-gray-400" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="w-full rounded border border-gray-300 px-3 py-2 text-black"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="mb-2 block text-gray-400"
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input
                        className="w-full rounded border border-gray-300 px-3 py-2 text-black"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-7 mt-8 flex items-center justify-center">
                    <button
                        type="button"
                        className="hover:bg-secondary-dark rounded bg-secondary px-4 py-2 text-white"
                    >
                        Log In
                    </button>
                    <button
                        type="button"
                        className="hover:bg-primary-dark ml-2 rounded bg-primary px-4 py-2 text-white"
                    >
                        Sign Up
                    </button>
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
