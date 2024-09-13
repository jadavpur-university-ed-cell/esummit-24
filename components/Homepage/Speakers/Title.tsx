import styles from "./Title.module.css"
const Title=()=>{
  return (<div className={styles.title}>
    <div className={styles.title}>
      <h2 className="text-4xl text-[#fcbf49] font-normal font-[Poppins]">
        Our Eminent Speakers
      </h2>
    </div>
    <div className="speaker-button cursor-pointer">
      <h3 className="m-auto">Show me All</h3>
    </div>
  </div>);
}
export default Title;