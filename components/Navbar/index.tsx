import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	// const [class1, setClass1] = useState(" ");
	// const [class2, setClass2] = useState(" ");

	// let abri = "";
	// let nav = "";

	// const open_menu = () => {
	// 	setIsOpen(!isOpen);
	// 	if (isOpen) {
	// 		setClass1(" open");
	// 		setClass2(" flex hidden");
	// 	}

	// 	// setOpen(false);
	// };

	return (
		// Navbar
		<nav className="relative container bg-branco mx-auto p-6 border-b border-b-laranja">
			{/* flex container */}
			<div className="flex items-center justify-between">
				{/* logo */}
				<div className="pt-2">
					<Link href="/">
						<a>
							<Image
								src="/k_logo_b.png"
								alt="logo da kalua films"
								width={200}
								height={50}
							/>
						</a>
					</Link>
				</div>
				{/* menu items */}
				<div className="hidden md:flex space-x-12">
					<a href="" className="text-laranja hover:text-laranja-claro">
						Home
					</a>
					<a href="" className="text-laranja hover:text-laranja-claro">
						Portfolio
					</a>
					<a href="" className="text-laranja hover:text-laranja-claro">
						Blog
					</a>
					<a href="" className="text-laranja hover:text-laranja-claro">
						Contato
					</a>
				</div>
				{/* humburger item */}
				<button
					id="menu-btn"
					className={`block hamburger md:hidden focus:outline-none ${
						isOpen ? "open" : ""
					}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<span className="hamburger-top"></span>
					<span className="hamburger-middle"></span>
					<span className="hamburger-bottom"></span>
				</button>
			</div>
			{/* mobile menu */}
			<div className="md:hidden">
				<div
					id="menu"
					className={`absolute flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-branco sw:w-auto sw:self-center left-6 right-6 drop-shadow-md ${
						isOpen ? " flex" : " hidden"
					}`}
				>
					<a href="" className="text-laranja hover:text-laranja-claro">
						Home
					</a>
					<a href="" className="text-laranja hover:text-laranja-claro">
						Portfolio
					</a>
					<a href="" className="text-laranja hover:text-laranja-claro">
						Blog
					</a>
					<a href="" className="text-laranja hover:text-laranja-claro">
						Contato
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
