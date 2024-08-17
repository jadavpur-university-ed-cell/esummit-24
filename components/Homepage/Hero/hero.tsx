import { FunctionComponent } from "react";
import Vectorized from "./Vectorized";
import "./Hero.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
	<div className={`hero ${className}`}>
	  <div className="hero-child" />
	  <div className="hero-item" />
	  <section className="vector-parent">
		<img
		  className="frame-child"
		  loading="lazy"
		  alt=""
		  src="vector-7.svg"
		/>
		<Vectorized />
	  </section>
	</div>
  );
};

export default Hero;