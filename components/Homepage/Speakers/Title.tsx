import styles from "./Title.module.css"
const Title=()=>{
  return (<div className={styles.title}>
    <div className={styles.titlein}>
      <h2>
        Our Eminent Speakers
      </h2>
    </div>
    <div className="button">
      <h3>Show me All</h3>
    </div>
  </div>);
}
export default Title;