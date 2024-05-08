import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className="w-full h-[93vh] flex items-center justify-center flex-col text-center relative overflow-hidden gap-6 pt-[420px] ">
			
			<p className="text-[#90A3BF] text-2xl leading-normal">
			<p className="text-[#90A3BF] text-sm leading-normal">
			Boilerplate 🛠️   Ship 🚀   Repeat ♻️
			</p>
			Find the boilerplate that suits your needs   <br /> & launch your next startup faster 
			</p>
			<div className="flex items-center justify-center gap-6 mb-[50px]">
				<Button variant="default" className="flex flex-col h-15 w-[16rem]"><p className="font-bold text-lg">Submit your boilerplate</p> <p className="text-md">& become a millionaire 💰</p></Button>
				
			</div>

			<div className="min-h-[852px] w-[1200px] bg-slate-800 rounded-xl" />

			{/* <Image
				src="/images/Dashboard.png"
				alt="Dashboard"
				width={1200}
				height={852}
			/> */}
		</div>
	);
};

export default Header;
