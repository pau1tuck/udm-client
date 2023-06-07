export const Navbar: React.FC = () => {
    return (
        <div className="mr-4 flex justify-end p-4 font-display text-base">
            <button
                type="button"
                className="mr-2 inline-block px-4 py-2 text-gray-200 hover:text-white"
            >
                Log In
            </button>
            <button
                type="button"
                className="inline-block rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
            >
                Sign Up
            </button>
        </div>
    );
};
