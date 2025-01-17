import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sharedlayout from './pages/Sharedlayout';
import Products from './pages/Products';
import Accessories from './pages/Accessories';
import AccessoriesID from './pages/AccessoriesID';
import Billing from './pages/Billing';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface item {
	id: number;
	image: string;
	price?: string;
	quantity: number;
}

interface cart {
	state: item[];
	setState: Dispatch<SetStateAction<item[]>>;
}

export const cartContext = createContext<cart>({
	state: [],
	setState: () => {},
});

function App() {
	const [state, setState] = useState<item[]>([]);

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
					</Route>
					<Route path="billing" element={<Billing />} />
				</Routes>
			</BrowserRouter>
		</cartContext.Provider>
	);
}

export default App;
