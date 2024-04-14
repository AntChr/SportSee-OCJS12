import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import '../style/sessionchart.scss'

function Session({data}) {
  const formatDay = (day) => {
    const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
    return daysOfWeek[day - 1]; // Utiliser le nombre comme index dans le tableau daysOfWeek
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const time = payload[0].payload.sessionLength;
  
      return (
        <div className='tooltip__session__style'>
          <div>{time} min</div>
        </div>
      );
    }
  
    return null;
  };
  return (
    <div className='session__chart__container'>
      <h3 className='session__chart__container__title'>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height={229}>
        <LineChart  width={260} height={229} data={data}>
          <XAxis dataKey="day" tickLine={false} tickFormatter={formatDay} axisLine={false} stroke='#FFF'/>
          <YAxis hide/>
          <Tooltip content={CustomTooltip}  cursor={false}/>
          <Line dot={false} type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} activeDot={{
                  stroke: '#FFF',
                  strokeWidth: 4,
                  r: 2,
                }} />
        </LineChart>
    </ResponsiveContainer>
    </div>
    
  )
}

export default Session