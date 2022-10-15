import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-laranja border-t">
			{/* <!-- Flex Container --> */}
			<div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
				{/* <!-- Logo and social links container --> */}
				<div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
					<div className="mx-auto my-6 text-center text-white md:hidden">
						Copyright &copy; 2022, Todos os direitos reservados
					</div>
					{/* <!-- Logo --> */}
					<div>
						<Image
							src="/k_logo.png"
							className="h-8"
							alt="logo da kalua films"
							width={300}
							height={100}
						/>
					</div>
					{/* <!-- Social Links Container --> */}
					<div className="flex justify-center space-x-4">
						{/* <!-- Link 1 --> */}
						<a
							href="https://www.facebook.com/kaluafilms"
							target="_blank"
							rel="noreferrer"
							className="text-2xl text-branco"
						>
							<FaFacebook />
						</a>
						{/* <!-- Link 2 --> */}
						<a
							href="https://www.instagram.com/kaluafilms"
							target="_blank"
							rel="noreferrer"
							className="text-2xl text-branco"
						>
							<FaInstagram />
						</a>
						{/* <!-- Link 3 --> * /}
						<a href="#">
							<img src="img/icon-twitter.svg" alt="" className="h-8" />
						</a>
						{/* <!-- Link 4 --> * /}
						<a href="#">
							<img src="img/icon-pinterest.svg" alt="" className="h-8" />
						</a>
						{/* <!-- Link 5 --> * /}
						<a href="#">
							<img src="img/icon-instagram.svg" alt="" className="h-8" />
						</a> */}
					</div>
				</div>
				{/* <!-- List Container --> */}
				<div className="flex justify-around space-x-32">
					<div className="flex flex-col space-y-3 text-white">
						<a href="#" className="hover:text-brightRed">
							Home
						</a>
						<a href="#" className="hover:text-brightRed">
							Portfolio
						</a>
						<a href="#" className="hover:text-brightRed">
							Blog
						</a>
						<a href="#" className="hover:text-brightRed">
							Contato
						</a>
					</div>
					<div className="flex flex-col space-y-3 text-white">
						<a href="#" className="hover:text-brightRed">
							Carreira
						</a>
						<a href="#" className="hover:text-brightRed">
							FAQ
						</a>
						<a href="#" className="hover:text-brightRed">
							Privacy Policy
						</a>
						<a
							href="https://kriolstock.com"
							target="_blank"
							rel="noreferrer"
							className="hover:text-brightRed"
						>
							KriolStock
						</a>
					</div>
				</div>

				{/* <!-- Input Container --> */}
				<div className="flex flex-col justify-between">
					<form>
						<div className="flex space-x-3">
							<input
								type="text"
								className="flex-1 px-4 rounded-full focus:outline-none border-2"
								placeholder="pesquisas..."
							/>
							<button className="px-6 py-2 text-laranja rounded-full bg-branco hover:bg-laranja  hover:text-branco hover:border hover:border-branco focus:outline-none">
								pesquiar
							</button>
						</div>
					</form>
					<div className="hidden text-white md:block">
						Copyright &copy; 2022, Todos os direitos reservados
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
