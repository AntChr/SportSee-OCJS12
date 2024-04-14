import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import '../style/activitychart.scss'

function ActivityChart({data}) {
  const transformedData = data.map((entry, index) => ({
    ...entry,
    day: index + 1
  }));
  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const kilogramData = payload[0].payload.kilogram;
      const caloriesData = payload[0].payload.calories;
  
      return (
        <div className='tooltip__style'>
          <div>{kilogramData} kg</div>
          <div>{caloriesData} kcal</div>
        </div>
      );
    }
  
    return null;
  };
  
  return (
    <div className='chart__container'>
      <h3 className="chart__title">Activité quotidienne</h3>
        <BarChart width={835} height={320} data={transformedData} label="Activité quotidienne">
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} />
            <YAxis axisLine={false} tickLine={false} orientation="right"/>
            <Tooltip content={CustomTooltip}/>
            <Legend align="right" verticalAlign="top" iconSize={10} iconType="circle"  />
            <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]}/>
            <Bar dataKey="calories" name="Calories brûlées (kcal)" fill="#FF0000" barSize={10} radius={[10, 10, 0, 0]}/>
        </BarChart>
    </div>
  )
}

export default ActivityChart