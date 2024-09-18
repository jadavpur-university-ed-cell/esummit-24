import Image from "next/image";
import { FunctionComponent } from "react";
import { Spotlight } from "../../ui/Spotlight";

const Hero: FunctionComponent = () => {
	return (
		<>
			<section id="hero" className="bg-[#040411]">
				<div className="h-[80vh] lg:h-screen bg-[#040411] relative overflow-x-clip bg-grid-white/[0.03]">
					<div className="absolute h-full w-full hero-content">
						<Image alt="hero" src="/hero-section-vector.svg" fill />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
