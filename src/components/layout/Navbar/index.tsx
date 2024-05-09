// @ts-nocheck
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
	{
		label: "Products",
		href: "/",
	},
	{
		label: "Benefit",
		href: "/",
	},
	{
		label: "How it Works",
		href: "/",
	},
	{
		label: "Pricing",
		href: "/#pricing",
	},
	{
		label: "Company",
		href: "/",
	},
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const supabaseClient = useSupabaseClient();

	const { user } = useUser();

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
	};

	return (
		<div className="py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl">
			<div className="relative flex items-center justify-between">
				<Link
					href="/"
					aria-label="Company"
					title="Company"
					className="inline-flex items-center">
					<span className="text-xl font-bold tracking-wide uppercase">
					<Image src="https://i.ibb.co/37F2y7M/Copie-de-I.png" alt="logo" width={50} height={50} />

					</span>
				</Link>
				{/* <ul className="hidden items-center gap-12 lg:flex">
					{links.map((link) => (
						<li key={link.label}>
							<Link
								href={link.href}
								aria-label={link.label}
								title={link.label}
								className="tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400">
								{link.label}
							</Link>
						</li>
					))}
				</ul> */}
				<div className="lg:flex items-center gap-4 hidden">
					{/* {!user ? (
						<>
							<Button variant="ghost">
								<Link href="/sign-in">Login</Link>
							</Button>
							<Button variant="default">
								<Link href="/">Get Demo</Link>
							</Button>
						</>
					) : (
						<>
							<Button variant="ghost">
								<Link href="/dashboard">Dashboard</Link>
							</Button>
							<Button variant="default" onClick={handleLogout}>
								Logout
							</Button>
						</>
					)} */}
					
					<Button variant="default" onClick={()=>document.getElementById('my_modal_1').showModal()}>
								<Link href="/">Submit Your Boilerplate</Link>
							</Button>


							
						
				</div>
				
			</div>
			
		</div>
	);
};

export default Navbar;
