import { useContext } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { PiBasket } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { cartContext } from '../App';

const Navbar = () => {
	const CartContext = useContext(cartContext);

	return (
		<nav className="flex justify-between px-10 py-5 items-center fixed z-10 left-0 right-0 bg-gray-50">
			{/* Logo Section */}
			<div className="flex w-[252px]">
				<img src="/assets/favicon.svg" alt="Store Logo" className="h-8" />
			</div>

			{/* Search Bar Section */}
			<div className="flex items-center gap-2 w-1/3 max-w-[500px]">
				<CiSearch className="w-6 h-6 text-gray-600" />
				<input
					type="text"
					placeholder="Search store"
					className="w-full h-10 rounded-md border border-gray-300 outline-none px-3"
				/>
			</div>

			{/* Navigation Links and Icons */}
			<div className="flex-1 flex gap-6 items-center justify-end font-medium text-[17px]">
				<p className="text-[17px] hover:text-blue-600 cursor-pointer">
					Products
				</p>
				<p className="text-[17px] hover:text-blue-600 cursor-pointer">Story</p>
				<p className="text-[17px] hover:text-blue-600 cursor-pointer">
					Manufacturing
				</p>
				<p className="text-[17px] hover:text-blue-600 cursor-pointer">
					Packaging
				</p>
				<div className="flex items-center">
					<NavLink to={'/billing'}>
						<PiBasket />
					</NavLink>
					<div className="font-medium text-base text-blue-500">
						{CartContext?.state.length}
					</div>

					<div className="text-lg font-bold text-blue-600"></div>
				</div>
				<IoPersonOutline className=" hover:text-blue-600 cursor-pointer" />
			</div>
		</nav>
	);
};

export default Navbar;
