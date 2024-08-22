'use client'
import React from 'react';

const ExportCSV = ({ data, fileName }:any) => {
  const downloadCSV = () => {
    // Convert the data array into a CSV string

    console.log(data);

    const csvString = [
      ["Team Name", "Member 1 Name", "Member 1 Email", "Member 2 Name", "Member 2 Email", "Member 3 Name", "Member 3 Email", "Member 4 Name", "Member 4 Email"], // Specify your headers here
      ...data.map((item:any) => [item.teamName, item.member1.name, item.member1.email, item.member2.name, item.member2.email, item.member3.name, item.member3.email, item.member4.name, item.member4.email]) // Map your data fields accordingly
    ]
    .map(row => row.join(","))
    .join("\n")


    // Create a Blob from the CSV string
    const blob = new Blob([csvString], { type: 'text/csv' });

    // Generate a download link and initiate the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'download.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return <button onClick={downloadCSV} className='bg-[#101720] px-2 py-1 rounded-[4px]' >Download</button>;
};


export default ExportCSV;