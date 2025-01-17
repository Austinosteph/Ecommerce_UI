import { useContext } from 'react';
import { cartContext } from '../App';

const Billing = () => {
	const { state } = useContext(cartContext);
	console.log(state);

	return (
		<div className="flex bg-gray-50 pt-10 space-x-7 justify-center">
			<div className="pb-10">
				<div className="pb-5">
					<h1 className="font-bold text-[24px]">Billing info</h1>
					<p className="text-[15px]">Please enter your billing info</p>
				</div>
				<div className="grid grid-cols-2 gap-4 justify-center pb-5">
					<div>
						<p className="font-semibold text-[15px]">First name</p>
						<input
							type="text"
							placeholder="First name"
							className="outline-none border-2 border-gray-300 p-2 rounded-xl w-[319px] bg-gray-50"
						/>
					</div>
					<div>
						<p className="font-semibold text-[15px]">Last name</p>
						<input
							type="text"
							placeholder="Last name"
							className=" outline-none border-2 border-gray-300 p-2 rounded-xl w-[319px] bg-gray-50"
						/>
					</div>
					<div>
						<p className="font-semibold text-[15px]">Email address</p>
						<input
							type="email"
							placeholder="Email adress"
							className="outline-none border-2 border-gray-300 p-2 rounded-xl w-[319px] bg-gray-50"
						/>
					</div>
					<div>
						<p className="font-semibold text-[15px]">Phone number</p>
						<input
							type="tel"
							placeholder="Phone number"
							className="outline-none border-2 border-gray-300 p-2 rounded-xl w-[319px] bg-gray-50"
						/>
					</div>
					<div>
						<p className="font-semibold text-[15px]">Adress</p>
						<input
							type="text"
							placeholder="Address"
							className="outline-none border-2 border-gray-300 p-2 rounded-xl w-[319px] bg-gray-50"
						/>
					</div>
					<div>
						<p className="font-semibold text-[15px]">Town / City</p>
						<input
							type="text"
							placeholder="Town or City"
							className="outline-none border-2 border-gray-300 p-2 rounded-xl w-[319px] bg-gray-50"
						/>
					</div>
					<div>
						<p className="font-semibold text-[15px]">State / Country</p>
						<input
							type="text"
							placeholder="State or Country"
							className="outline-none border-2 border-gray-300 p-2 rounded-xl w-[319px] bg-gray-50"
						/>
					</div>
					<div>
						<p className="font-semibold text-[15px]">ZIP / Postal code</p>
						<input
							type="text"
							placeholder="ZIP or Postal code"
							className="outline-none border-2 border-gray-300 p-2 rounded-xl w-[319px] bg-gray-50"
						/>
					</div>
					<div className="flex items-center space-x-2 outline-none border-2 border-gray-300 p-2 rounded-xl w-[270px] bg-gray-50">
						<input type="checkbox" className="w-5 h-5" />
						<p>Ship to a different address?</p>
					</div>
				</div>
				<div className="bg-white rounded-xl">
					<div className="pb-5">
						<h1 className="font-bold text-[22px]">Billing method</h1>
						<p className="text-[15px]">Please enter your billing method</p>
					</div>
					<div className="flex justify-between items-center  outline-none border-2 border-gray-300 p-2 mb-2 rounded-xl w-[640px] bg-gray-50">
						<div className="flex space-x-4 items-center">
							<input type="checkbox" className="w-5 h-5 rounded-full" />
							<p className="font-bold">FedEx</p>
						</div>
						<div className="flex space-x-4 items-center">
							<p className="font-bold text-[#6A983C]">+32 USD</p>
							<p className="font-bold">Additional price</p>
						</div>
						<div>
							<img src="/assets/g6.png" alt="" />
						</div>
					</div>
					<div className="flex justify-between items-center  outline-none border-2 border-gray-300 p-2 mb-2 rounded-xl w-[640px] bg-gray-50">
						<div className="flex space-x-4 items-center">
							<input type="checkbox" className="w-5 h-5 rounded-full" />
							<p className="font-bold">DHL</p>
						</div>
						<div className="flex space-x-4 items-center">
							<p className="font-bold text-[#6A983C]">+15 USD</p>
							<p className="font-bold">Additional price</p>
						</div>
						<div>
							<img src="/assets/Vector.png" />
						</div>
					</div>
				</div>
			</div>
			<div className="border border-gray-300 p-2 rounded-3xl">
				<div className="pb-5">
					<h1 className="font-bold text-[24px]">Order Summary</h1>
					<p className="font-medium text-[15px] opacity-40">
						Price can change depending on shipping method and taxes of your
						state.
					</p>
				</div>
				{state.map((states) => (
					<div key={states.id}>
						<div className="grid grid-cols-3 gap-4">
							<div className="h-24 w-[120px]">
								<img
									src={states.image}
									className="h-full w-full object-contain rounded-2xl"
								/>
							</div>

							<div className="space-y-3">
								<p className="font-semibold text-2xl">Human hair</p>

								<div>
									<p className="font-semibold text-base">
										<span className="opacity-35 text-lg">Farm:</span> Tharamist
										Farm
									</p>
								</div>
								<div>
									<p className="font-semibold text-base">
										<span className="opacity-35 text-lg">Freshness:</span> 1 day
										old
									</p>
								</div>
							</div>
							<div className="pt-16">
								<select className="outline-none bg-gray-200 w-32 h-11 border border-gray-300 text-gray-900 rounded-2xl focus:border-blue-500 p-2.5">
									<option value={1}>1 Pc</option>
									<option value={2}>2 Pcs</option>
									<option value={3}>3 Pcs</option>
									<option value={4}>4 Pcs</option>
								</select>
							</div>
						</div>
					</div>
				))}
				<div>
					<div className="justify-between flex m-2">
						<p className="font-semibold text-lg">Subtotal</p>
						<p className="font-semibold text-lg">... usd</p>
					</div>
					<div className="justify-between flex m-2">
						<p className="font-semibold text-lg">Tax</p>
						<p className="font-semibold text-lg">17% ...usd</p>
					</div>
					<div className="justify-between flex m-2">
						<p className="font-semibold text-lg">Shipping</p>
						<p className="font-semibold text-lg">0 usd</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Billing;
