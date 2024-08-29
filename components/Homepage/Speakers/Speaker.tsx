import styles from "./Speaker.module.css";
interface Speakerprops {
	speakerName: string;
	speakerDesignation: string;
}

const Speaker: React.FC<Speakerprops> = ({
	speakerName,
	speakerDesignation,
}) => {
	return (
		<div className={styles.profile}>
			<div>
				<div className={styles.name}>
					<p>
						{speakerName}
						<br></br>
						{speakerDesignation}
					</p>
				</div>
				<button className={styles.btnStyle}>
					<svg
						width="26"
						height="27"
						viewBox="0 0 26 27"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M23.9584 26.9991C24.5102 27.0221 24.9761 26.5934 24.9991 26.0416L25.3738 17.0494C25.3968 16.4976 24.9681 16.0317 24.4163 16.0087C23.8645 15.9857 23.3985 16.4144 23.3755 16.9662L23.0425 24.9592L15.0494 24.6262C14.4976 24.6032 14.0317 25.0319 14.0087 25.5837C13.9857 26.1355 14.4144 26.6015 14.9662 26.6245L23.9584 26.9991ZM0.264069 1.67706L23.2641 26.6771L24.7359 25.3229L1.73593 0.322943L0.264069 1.67706Z"
							fill="black"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Speaker;
