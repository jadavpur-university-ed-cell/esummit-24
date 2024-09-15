import React from 'react';

interface HeadingProps {
  title: string;
  eventNumber: number;
}

const Heading: React.FC<HeadingProps> = ({ title, eventNumber }) => {
  const headingColor = eventNumber % 2 === 0 ? '#D62828' : '#FCBF49';

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.heading, color: headingColor }}>{title}</h1>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#101720',  // Black background
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
  }
};

export default Heading;
