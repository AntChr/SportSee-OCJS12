import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../style/performance.scss'

function PerformanceChart({data}) {
  const formatKind = (kind) => {
    const kindMap = {
      1: 'Intensité',
      2: 'Vitesse',
      3: 'Force',
      4: 'Endurance',
      5: 'Energie',
      6: 'Cardio',
    };
    return kindMap[kind];
  };
 
  return (
    <div className='perfomance__chart__container'>
       <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={85} data={data}>
          <PolarGrid  radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tickFormatter={formatKind} fill='white'/>
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false}/>
          <Radar name="value" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart