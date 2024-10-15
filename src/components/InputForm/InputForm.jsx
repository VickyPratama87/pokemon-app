import './InputForm.css';

const InputForm = ({ onChange, type, placeholder }) => {
	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				className="search"
				onChange={onChange}
			/>
		</>
	);
};

export default InputForm;
