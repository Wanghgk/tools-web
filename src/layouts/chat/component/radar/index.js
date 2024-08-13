import { Radar, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, ResponsiveContainer } from "recharts";


function CRadar({details}) {


  return (
    <div >
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={details}>
          <PolarGrid />
          <PolarAngleAxis dataKey="title" />
          <PolarRadiusAxis angle={30} domain={[0, 5]} />
          <Radar name="评分" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CRadar;