import { FunctionComponent } from "react";
// import "./Vectorized.css";

export type VectorizedType = {
  className?: string;
};

const Vectorized: FunctionComponent<VectorizedType> = ({ className = "" }) => {
  return (
	<div className={`vectorized ${className}`}>
	  <div className="vectorized-child" />
	  <h1 className="fourth-edition">Fourth Edition</h1>
	  <i className="jadavpur-university-e-cell">JADAVPUR UNIVERSITY E-CELL</i>
	  <div className="vector-group">
		<img className="frame-inner" alt="" src="/vector-42.svg" />
		<img className="vector-icon" alt="" src="/vector-41.svg" />
		<img className="frame-child1" alt="" src="/vector-39.svg" />
		<img className="frame-child2" alt="" src="/vector-34.svg" />
		<img className="frame-child3" alt="" src="/vector-33.svg" />
		<img className="frame-child4" alt="" src="/vector-27.svg" />
		<img
		  className="frame-child5"
		  loading="lazy"
		  alt=""
		  src="/vector-4.svg"
		/>
		<img
		  className="frame-child6"
		  loading="lazy"
		  alt=""
		  src="/vector-17.svg"
		/>
		<img
		  className="frame-child7"
		  loading="lazy"
		  alt=""
		  src="/vector-18.svg"
		/>
		<img
		  className="frame-child8"
		  loading="lazy"
		  alt=""
		  src="/vector-19.svg"
		/>
		<img
		  className="frame-child9"
		  loading="lazy"
		  alt=""
		  src="/vector-20.svg"
		/>
		<img
		  className="frame-child10"
		  loading="lazy"
		  alt=""
		  src="/vector-25.svg"
		/>
		<img
		  className="frame-child11"
		  loading="lazy"
		  alt=""
		  src="/vector-32.svg"
		/>
		<img className="frame-child12" alt="" src="/vector-53.svg" />
		<img
		  className="frame-child13"
		  loading="lazy"
		  alt=""
		  src="/vector-54.svg"
		/>
		<img className="frame-child14" alt="" src="/vector-55.svg" />
		<img className="frame-child15" alt="" src="/vector-56.svg" />
		<img className="frame-child16" alt="" src="/vector-57.svg" />
		<img className="frame-child17" alt="" src="/vector-44.svg" />
		<img className="frame-child18" alt="" src="/vector-36.svg" />
		<div className="foot">
		  <img className="foot-child" alt="" src="/vector-38.svg" />
		  <img className="foot-item" alt="" src="/vector-31.svg" />
		  <img className="foot-inner" alt="" src="/vector-30.svg" />
		  <img className="foot-child1" alt="" src="/vector-37.svg" />
		  <img className="foot-child2" alt="" src="/vector-13.svg" />
		  <img
			className="foot-child3"
			loading="lazy"
			alt=""
			src="/vector-7.svg"
		  />
		  <img className="foot-child4" alt="" src="/vector-45.svg" />
		</div>
		<img className="frame-child19" alt="" src="/vector-52.svg" />
		<img className="frame-child20" alt="" src="/vector-51.svg" />
		<img className="frame-child21" alt="" src="/vector-50.svg" />
		<img className="frame-child22" alt="" src="/vector-48.svg" />
		<div className="vector-container">
		  <img className="frame-child23" alt="" src="/vector-40.svg" />
		  <div className="frame-div">
			<img
			  className="frame-child24"
			  loading="lazy"
			  alt=""
			  src="/vector-1.svg"
			/>
			<img className="frame-child25" alt="" src="/vector-2.svg" />
		  </div>
		  <img
			className="frame-child26"
			loading="lazy"
			alt=""
			src="/vector-16.svg"
		  />
		  <div className="vector-parent1">
			<img className="frame-child27" alt="" src="/vector-21.svg" />
			<img
			  className="frame-child28"
			  loading="lazy"
			  alt=""
			  src="/vector-22.svg"
			/>
		  </div>
		  <img
			className="frame-child29"
			loading="lazy"
			alt=""
			src="/vector-23.svg"
		  />
		  <img
			className="frame-child30"
			loading="lazy"
			alt=""
			src="/vector-24.svg"
		  />
		  <img className="frame-child31" alt="" src="/vector-47.svg" />
		  <img className="frame-child32" alt="" src="/vector-46.svg" />
		</div>
		<div className="vector-parent2">
		  <img className="frame-child33" alt="" src="/vector-14.svg" />
		  <img
			className="frame-child34"
			loading="lazy"
			alt=""
			src="/vector-29.svg"
		  />
		  <img
			className="frame-child35"
			loading="lazy"
			alt=""
			src="/vector-28.svg"
		  />
		</div>
		<div className="vector-parent3">
		  <img className="frame-child36" alt="" src="/vector-49.svg" />
		  <img
			className="frame-child37"
			loading="lazy"
			alt=""
			src="/vector-26.svg"
		  />
		</div>
		<div className="ellipse-div" />
		<div className="frame-child38" />
		<div className="frame-child39" />
	  </div>
	</div>
  );
};

export default Vectorized;