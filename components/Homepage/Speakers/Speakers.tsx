import React from "react";
import styles from "./Speakers.module.css";
import Speaker from "./Speaker";
import Title from "./Title";

const Speakers=()=> {
  const speakersList=[
    {name:"Speaker 1",designation:"xyz"},
    {name:"Speaker 2",designation:"xyz"},
    {name:"Speaker 3",designation:"xyz"},
    {name:"Speaker 4",designation:"xyz"},
    {name:"Speaker 5",designation:"xyz"},
    {name:"Speaker 6",designation:"xyz"},
    {name:"Speaker 7",designation:"xyz"},
    {name:"Speaker 8",designation:"xyz"},
  ];
  return (
    <div className={styles.grid}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      <Speaker speakerName={speakersList[0].name} speakerDesignation={speakersList[0].designation} />
      <Speaker speakerName={speakersList[1].name} speakerDesignation={speakersList[1].designation} />
      <Speaker speakerName={speakersList[2].name} speakerDesignation={speakersList[2].designation} />
      <Speaker speakerName={speakersList[3].name} speakerDesignation={speakersList[3].designation} />
      <Title />
      <Speaker speakerName={speakersList[4].name} speakerDesignation={speakersList[4].designation} />
      <Speaker speakerName={speakersList[5].name} speakerDesignation={speakersList[5].designation} />
      <Speaker speakerName={speakersList[6].name} speakerDesignation={speakersList[6].designation} />
      <Speaker speakerName={speakersList[7].name} speakerDesignation={speakersList[7].designation} />
    </div>
  );
};

export default Speakers;


