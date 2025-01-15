const Input = ({ type, name, value, onChange, placeholder }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="p-2 bg-transparent border border-white rounded  focus:outline-none text-white"
            placeholder={placeholder}
        />
    );
};

export default Input;
