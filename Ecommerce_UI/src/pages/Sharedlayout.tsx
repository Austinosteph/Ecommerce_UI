import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import SideNav from '../component/SideNav';

const Sharedlayout = () => {
	return (
		<div className="bg-gray-50">
			<Navbar />

			<main className="flex gap-4 pt-28">
				<SideNav />
				<Outlet />
			</main>
		</div>
	);
};
export default Sharedlayout;
