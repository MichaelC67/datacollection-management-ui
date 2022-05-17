import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Menu } from "../Menu";
import { SurveyList } from "../SurveyList";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/portail"
					element={
						<>
							<Header />
							<Menu />
							<Outlet />
							<Footer />
						</>
					}
				>
					<Route
						path="mes-enquetes"
						element={
							<>
								<SurveyList />
							</>
						}
					/>
					<Route path="mon-compte" element={<h1>mon compte</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};