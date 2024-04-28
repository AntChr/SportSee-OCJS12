import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../style/performance.scss'

function PerformanceChart({data}) {
 
  return (
    <div className='perfomance__chart__container'>
       <ResponsiveContainer width="100%" height="100%">
        <RadarChart  
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data.performances}
          startAngle={90}
          endAngle={-270}>
          <PolarGrid  radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tickFormatter={(value) => data.dataKind[value].name} fill='white'/>
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false}/>
          <Radar name="value" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart