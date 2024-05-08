import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className="w-full  flex items-center justify-center flex-col text-center relative overflow-hidden gap-6 ">
			
			<p className="text-[#90A3BF] text-2xl leading-normal">
			<p className="text-[#90A3BF] text-sm leading-normal">
			Boilerplate 🛠️   Ship 🚀   Repeat ♻️
			</p>
			Find the boilerplate that suits your needs   <br /> & launch your next startup faster 
			</p>
			<div className="flex items-center justify-center gap-6 mb-[50px]">
				<Button variant="default" className="flex flex-col h-15 w-[18rem] cursor-pointer" onClick={()=>document.getElementById('my_modal_1').showModal()}><p className="font-bold text-lg cursor-pointer">Submit your boilerplate</p> <p className="text-sm cursor-pointer">& become a millionaire 💰</p></Button>
				
			</div>

			
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
