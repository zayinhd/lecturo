const Button = ({ children }) => {
    return (
        <button className="m-4 py-2 px-8 border border-white rounded-full hover:bg-white hover:text-blue-600">
            {children}
        </button>
    );
};

export default Button;
