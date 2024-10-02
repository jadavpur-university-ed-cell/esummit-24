import React from "react";
import { Timeline } from "../../ui/timeline";

function EventTimeline() {
  const data = [
    {
      title: "Day 1",
      content: (
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#fcbf49] text-5xl  ">Hack&lt;n&gt;Pitch</h3>
            <p className="text-[#eae2b7] text-3xl">
              Join Hack-n-Pitch: Innovate, Hack, and pitch your ideas overnight!
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#fcbf49] text-5xl  ">Corporate Clash</h3>
            <p className="text-[#eae2b7] text-3xl">
              Test your strategic skills in the ultimate analyst challenge.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Day 2",
      content: (
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#fcbf49] text-5xl  ">Inspira Talks</h3>
            <p className="text-[#eae2b7] text-3xl">
              Learn from top experts and ignite your entrepreneurial journey.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#fcbf49] text-5xl  ">Mock Stock</h3>
            <p className="text-[#eae2b7] text-3xl">
              Master trading skills in a risk-free, competitive stock
              simulation.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#fcbf49] text-5xl  ">Mock IPL Auction</h3>
            <p className="text-[#eae2b7] text-3xl">
              Build your dream IPL team in a strategic mock auction.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Day 3",
      content: (
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#fcbf49] text-5xl  ">Dizmart</h3>
            <p className="text-[#eae2b7] text-3xl">
              Design impactful labels at Dizmart, merging creativity, branding,
              and marketing.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#fcbf49] text-5xl  ">LaunchX</h3>
            <p className="text-[#eae2b7] text-3xl">
              Showcase, pitch, and launch your startup with expert backing.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full p-12">
      <Timeline data={data} />
    </div>
  );
}

export default EventTimeline;
