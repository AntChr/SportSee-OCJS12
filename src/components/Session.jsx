import { LineChart, Line, XAxis, YAxis, Rectangle, Tooltip, ResponsiveContainer} from 'recharts';
import '../style/sessionchart.scss'

function Session({data}) {
  const formatDay = (day) => {
    const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
    return daysOfWeek[day - 1];
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
  const CustomCursor = ({ points }) => {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.2}
        x={points[1].x}
        width={1000}
        height={700}
      />
    );
  };

  return (
      <ResponsiveContainer className="average-sessions" width="100%" height="100%">
        <LineChart  width={500} height={300} data={data}  
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
          <XAxis dataKey="day" tickLine={false} tickFormatter={formatDay} axisLine={false} stroke='#FFF'/>
          <YAxis hide={true} padding={{ top: 80, bottom: 40 }}/>
          <Tooltip content={<CustomTooltip />}  cursor={<CustomCursor />} wrapperStyle={{ outline: 'none' }}/>
          <Line dot={false} type="natural" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} activeDot={{ r: 4, }} legendType="none" />
        </LineChart>
    </ResponsiveContainer>
    
  )
}

export default Session