import {
	banner1,
	banner2,
	model1,
	model2,
	model3,
	model4,
	model5,
	model6,
} from '../component/Images';

const Products = () => {
	return (
		<div className="grid grid-cols-2 gap-3 mr-3 ml-48 mb-3 bg-gray-50">
			<div className="flex flex-col space-y-3">
				<div className="w-[525px] h-[170px]">
					<img src={banner1} className="h-full w-full object-cover" />
				</div>
				<div className="w-[525px] h-[170px]">
					<img src={banner2} className="h-full w-full object-cover" />
				</div>
			</div>
			<div className="flex flex-row gap-3">
				<div className="w-[288px] h-[350px]">
					<img src={model1} className="h-full w-full object-cover rounded-md" />
				</div>
				<div className="w-[288px] h-[350px]">
					<img src={model2} className="h-full w-full object-cover rounded-md" />
				</div>
			</div>
			<div className="flex flex-row gap-3">
				<div className="w-[288px] h-[350px]">
					<img src={model3} className="h-full w-full object-cover rounded-md" />
				</div>
				<div className="w-[288px] h-[350px]">
					<img src={model4} className="h-full w-full object-cover rounded-md" />
				</div>
			</div>
			<div className="flex flex-col space-y-3">
				<div className="w-[525px] h-[170px]">
					<img src={model5} className="h-full w-full object-cover" />
				</div>
				<div className="w-[525px] h-[170px]">
					<img src={model6} className="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	);
};
export default Products;
