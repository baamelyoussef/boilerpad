"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Benefits from "@/sections/Benefits";
import Core from "@/sections/Core";
import Header from "@/sections/Header";
import HowItWorks from "@/sections/HowItWorks";
import Pricing from "@/sections/Pricing";
import { SubmissionModal } from "@/sections/Submission";
import Testimonials from "@/sections/Testimonials";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
	return (
		<main>
			<div className="bg-gradient-to-b from-gray-900 to-gray-800 animate-gradient px-[55px] pb-[80px] text-white">
				<Navbar />
				<Header />
				
				<Core/>
			</div>
			<SubmissionModal/>
			<Footer />
		</main>
	);
}
