import React from 'react';

interface HeadingProps {
  name: string; 
  eventNumber: number;
}

const Heading: React.FC<HeadingProps> = ({ name, eventNumber }) => {
  const headingColor = eventNumber % 2 === 0 ? '#D62828' : '#FCBF49';
  const svgFillColor = eventNumber % 2 === 0 ? '#D62828' : '#FCBF49';

  return (
    <div className=" p-5 text-center">
      <h1 className="text-5xl font-semibold " style={{ color: headingColor }}>
        {name}
      </h1>
    </div>
    
  );
};

export default Heading;
