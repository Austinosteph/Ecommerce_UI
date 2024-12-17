const Signup = () => {
	return (
		<div className="space-y-4 flex flex-col">
			<button
				type="submit"
				className="bg-black border border-gray-400 rounded-md p-2 w-[345px] h-[45px] text-white"
			>
				Sign up with Apple
			</button>
			<button
				type="submit"
				className="border border-black rounded-md p-2 w-[345px] h-[45px] text-black"
			>
				Sign up with Google
			</button>
		</div>
	);
};
export default Signup;
