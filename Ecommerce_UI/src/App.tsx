import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sharedlayout from './pages/Sharedlayout';
import Products from './pages/Products';
import Accessories from './pages/Accessories';
import AccessoriesID from './pages/AccessoriesID';
import Billing from './pages/Billing';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
type cartid = {
	id: number;
	amount: number;
	quantity: number;
};
interface cart {
	state: cartid[];
	setState: Dispatch<SetStateAction<cartid[]>>;
}

export const cartContext = createContext<cart | undefined>(undefined);

function App() {
	const [state, setState] = useState<cartid[]>([
		{ id: 0, quantity: 0, amount: 0 },
	]);

	return (
		<cartContext.Provider value={{ state, setState }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Sharedlayout />}>
						<Route index element={<Products />} />
						<Route path="accessories" element={<Accessories />} />
						<Route
							path="accessories/:accessoriesID"
							element={<AccessoriesID />}
						/>
						<Route path="billing" element={<Billing />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</cartContext.Provider>
	);
}

export default App;
