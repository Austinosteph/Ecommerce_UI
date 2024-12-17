import { NavLink } from 'react-router-dom';
interface SideNavItem {
	label: string;
	path: string;
	icon: string;
}
const Navs: SideNavItem[] = [
	{
		label: 'New In',
		path: '/',
		icon: '⚡',
	},
	{
		label: 'Clothing',
		path: '/',
		icon: '👚',
	},
	{
		label: 'Shoes',
		path: '/',
		icon: '👞',
	},
	{
		label: 'Accessories',
		path: '/accessories',
		icon: '👜',
	},
	{
		label: 'Activewear ',
		path: '/',
		icon: '🤸‍♂️',
	},
	{
		label: 'Gifts & Living',
		path: '/',
		icon: '🎁',
	},
	{
		label: 'New',
		path: '/',
		icon: '💎',
	},
];

const SideNav = () => {
	return (
		<aside className="w-[181.96px] flex flex-col items-center px-16 h-screen fixed left-0 bg-gray-50 top-20">
			<h1 className="font-semibold text-[25px] pb-10 pt-5">Explore</h1>
			<div className="space-y-6 pb-[90px]">
				{Navs.map((Nav, index) => (
					<div key={index}>
						<NavLink to={Nav.path}>
							<div className="flex gap-4">
								<span>{Nav.icon}</span>
								<p className="text-nowrap">{Nav.label}</p>
							</div>
						</NavLink>
					</div>
				))}
			</div>

			<NavLink to={'/'}>
				<span className="flex gap-2 items-center text-nowrap pb-4">
					🗨<p className="font-medium text-sm">Help Center</p>
				</span>
			</NavLink>
		</aside>
	);
};
export default SideNav;
