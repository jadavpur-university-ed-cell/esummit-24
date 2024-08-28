import { FunctionComponent } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={`frame-parent ${className}`}>
      <div className="top-content-parent">
        <textarea
          className="top-content"
          placeholder="Image"
          rows={14}
          cols={26}
        />
        <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
          <b className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac tortor dui. Vestibulum ex orci, dapibus condim entum tellus `}</b>
        </div>
      </div>
      <div className="bottom-content">
        <div className="navigation">
          <div className="navigation-child" />
          <img
            className="navigation-item"
            loading="lazy"
            alt=""
            src="/arrow-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;