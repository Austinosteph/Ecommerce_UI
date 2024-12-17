import { useParams } from 'react-router-dom';
import { items } from './Accessories';
import { FaPlus } from 'react-icons/fa6';

const AccessoriesID = () => {
	const { accessoriesID } = useParams<{ accessoriesID: string }>();
	const item = items.find((item) => item.id.toString() === accessoriesID);

	return (
		<div className="flex ml-48 space-x-20 bg-gray-50 pt-10">
			<div className="w-[402.6px] h-[350.86px]">
				<img
					src={item?.image}
					className="w-full h-full rounded-lg object-cover"
				/>
			</div>
			<div className=" h-screen w-[544px] ">
				<div className="mb-7">
					<h3 className="font-bold text-[32px]">Carrots from Tomissy Farm</h3>
				</div>
				<p className="text-[16px] w-[500px] mb-7">
					Carrots from Tomissy Farm are one of the best on the market. Tomisso
					and his family are giving a full love to his Bio products. Tomisso’s
					carrots are growing on the fields naturally.
				</p>
				<div className="grid grid-cols-2 grid-rows-4 gap-2 mb-4">
					<p>
						<span className="opacity-50 pr-2">SKU:</span>76645
					</p>
					<p>
						<span className="opacity-50 pr-2">Freshness:</span>1 days old
					</p>

					<p>
						<span className="opacity-50 pr-2">Category:</span>Vegetables
					</p>
					<p>
						<span className="opacity-50 pr-2">Buy by:</span>pcs, kgs, box, pack
					</p>
					<p>
						<span className="opacity-50 pr-2">Stock:</span>In Stock
					</p>
					<p>
						<span className="opacity-50 pr-2">Delivery:</span>in 2 days
					</p>
					<p>
						<span className="opacity-50 pr-2">Farm:</span>Grocery Tarm Fields
					</p>
					<p>
						<span className="opacity-50 pr-2">Delivery area:</span>Czech
						republic
					</p>
				</div>
				<div className="flex w-[480px] bg-white border border-white justify-between p-2 items-center">
					<p className="text-[#6A983C] text-[26px] font-semibold p-2">
						36.23 USD
					</p>
					<select className="outline-none bg-gray-100 w-20 h-10 rounded-md">
						<option>PCs</option>
						<option value={1}>1 Pc</option>
						<option value={2}>2 Pcs</option>
						<option value={3}>3 Pcs</option>
						<option value={4}>4 Pcs</option>
					</select>

					<button
						type="submit"
						className="flex items-center bg-black text-white p-2 rounded-lg h-10"
					>
						<FaPlus />
						<span className="pl-2">Add to cart</span>
					</button>
				</div>
				<div className="pt-8 pb-6 flex font-semibold md:text-xl space-x-8">
					<button className="w-full text-justify hover:border-b-[2.5px] pb-4 border-[#6A983C]">
						Description
					</button>
					<button className="w-full text-justify hover:border-b-[2.5px] pb-4 border-[#6A983C]">
						Review
					</button>
					<button className="w-full text-justify hover:border-b-[2.5px] pb-4 border-[#6A983C]">
						Question
					</button>
				</div>
				<div className="space-y-2">
					<h1 className="font-medium text-lg">Origins</h1>
					<p className="py-4 text-[16px]">
						We work hard to ensure that the fruit and vegetables we sell are
						fresh and high in quality. If we don't grow them ourselves, we
						source them from carefully chosen suppliers, preferring to buy
						locally whenever possible.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AccessoriesID;
