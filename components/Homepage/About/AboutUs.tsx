import { FunctionComponent, memo } from "react";
import "./AboutUs.css";

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = memo(({ className = "" }) => {
  return (
		
		<div className="container">
			
			<div className="image-column">
				{/* <img src="placeholder-image.jpg" alt="Placeholder Image"/> */}
			</div>
			<h2>About Us</h2>
			<div className="text-column">
				
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<button> <img className="vec" src="arrow-1.svg" alt="Arrow"/></button>
			</div>
		</div>
	
  );
});

export default AboutUs;