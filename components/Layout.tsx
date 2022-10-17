import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => (
	<div>
		<Navbar />
		{children}
		<Footer />
	</div>
);

export default Layout;
