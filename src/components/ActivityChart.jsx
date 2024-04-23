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

  const RenderLegend = ({ payload }) => (
    <div className="activity-legend-container">
      <span className="activity-title">Activité quotidienne</span>
      <span className="flex-1"></span>
      {payload.map((entry, index) => (
        <div className="activity-legend" key={`activity-legend-${index}`}>
          <div
            className="legend-circle"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="activity-legend-title">{entry.value}</span>
        </div>
      ))}
    </div>
  )
  
  return (
      <ResponsiveContainer className="activity" width="100%" height="100%">
          <BarChart width={500} height={300} data={transformedData} barGap={10} barSize={7}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tickLine={false} />
              <YAxis
                hide={true}
                yAxisId="left"
                orientation="left"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
                tickMargin={10}
                tickCount={3}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
                tickMargin={10}
                tickCount={4}
                type="number"
                domain={[(dataMin) => dataMin - 1, (dataMax) => dataMax + 1]}
              />
              <Tooltip content={CustomTooltip}/>
              <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={50} content={<RenderLegend />}/>
              <Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]}/>
              <Bar  yAxisId="left" dataKey="calories" name="Calories brûlées (kcal)" fill="#FF0000" barSize={10} radius={[10, 10, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>

  )
}

export default ActivityChart