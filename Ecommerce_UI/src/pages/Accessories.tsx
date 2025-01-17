import { model2, model4 } from '../component/Images';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
interface item {
	id: number;
	image: string;
	price: number;
	details: string;
	color: string;
	icon: JSX.Element;
}
export const items: item[] = [
	{
		id: 1,
		image: model2,
		price: 300000,
		details: 'Human hair',
		color: '#4696AD',
		icon: <FaRegHeart />,
	},
	{
		id: 2,
		image: model4,
		price: 300000,
		details: 'Human hair',
		color: '#01BEBC',
		icon: <FaRegHeart />,
	},
	{
		id: 3,
		image: model4,
		price: 300000,
		details: 'Human hair',
		color: '#01BEBC',
		icon: <FaRegHeart />,
	},
	{
		id: 4,
		image: model2,
		price: 0,
		details: 'Human hair',
		color: '#4696AD',
		icon: <FaRegHeart />,
	},
	{
		id: 5,
		image: model2,
		price: 300000,
		details: 'Human hair',
		color: '#4696AD',
		icon: <FaRegHeart />,
	},
	{
		id: 6,
		image: model4,
		price: 300000,
		details: 'Human hair',
		color: '#01BEBC',
		icon: <FaRegHeart />,
	},
	{
		id: 7,
		image: model2,
		price: 0,
		details: 'Human hair',
		color: '#4696AD',
		icon: <FaRegHeart />,
	},
	{
		id: 8,
		image: model2,
		price: 300000,
		details: 'Human hair',
		color: '#4696AD',
		icon: <FaRegHeart />,
	},
];

const Accessories = () => {
	return (
		<div className="grid grid-cols-4 gap-5 mr-3 ml-48 bg-gray-50 pt-6 pb-4">
			{items.map((item) => (
				<Link to={`/accessories/${item.id}`} key={item.id}>
					<div className="w-[251px] h-[280px] relative">
						<div className="absolute bg-white top-3 right-5 rounded-full w-10 h-10 flex items-center justify-center">
							{item.icon}
						</div>
						<img
							src={item.image}
							className="w-full h-full object-cover rounded-md"
						/>
						<div
							className="absolute -bottom-0 left-20 font-semibold bg-white px-2 rounded-t-lg text-[20px]"
							style={{ color: item.color }}
						>
							{item.price}
						</div>
					</div>
					<p className="font-medium text-[20px]">{item.details}</p>
				</Link>
			))}
		</div>
	);
};
export default Accessories;
