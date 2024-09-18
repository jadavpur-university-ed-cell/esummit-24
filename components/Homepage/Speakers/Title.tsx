import styles from "./Title.module.css"
const Title=()=>{
  return (<div className={styles.title}>
    <div className={styles.title}>
      <h2 className="animated-title text-6xl text-[#fcbf49] font-bold  ">
        Our Eminent Speakers
      </h2>
    </div>
    <div className="speaker-button cursor-pointer">
      <h3 className="m-auto text-[#eae2b7]">Show me All</h3>
    </div>
  </div>);
}
export default Title;