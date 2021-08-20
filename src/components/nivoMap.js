import React from 'react'
import { ResponsiveChoropleth } from "@nivo/geo";
import countries from '../components/countries.json';
const data = [
    {
        id: "AFG",
        value: 336354
      },
      {
        id: "AGO",
        value: 296583
      },
      {
        id: "ALB",
        value: 364571
      },
      {
        id: "ARE",
        value: 610382
      }
]

const MyResponsiveChoropleth = ({ data }) => (
    <ResponsiveChoropleth
      data={data}
      features={countries.features}
      colors="nivo"
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#444444",
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );


function nivoMap() {
    return (
        <div>
             <div style={{ height: "400px" }}>
        <MyResponsiveChoropleth data={data} />
      </div>
        </div>
    )
}

export default nivoMap
