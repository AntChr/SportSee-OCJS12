import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import '../style/target.scss'

function TargetChart({data}) {
  const score = data;
  const dataArray = [{ name: 'score', value: score }]
  return (
    <div className="target__container">
      <h3 className="target__container__title">Score</h3>
			<ResponsiveContainer width="100%" height="70%">
				<RadialBarChart
					innerRadius="0%"
					outerRadius="0%"
					data={dataArray}
					startAngle={90}
					endAngle={450}
				>
					<RadialBar
						data={[{ value: 1 }]}
						dataKey="value"
						barSize={170}
						fill="#FFF"
						isAnimationActive={false}
					/>
					<RadialBar
						dataKey="value"
						barSize={10}
						cornerRadius={100}
						fill="#FF0000"
					/>
				</RadialBarChart>
			</ResponsiveContainer>
			<div className="target__label center">
				<p className="percent">
					{data && data * 100}%
				</p>
				<p>de votre</p>
				<p>objectif</p>
			</div>
    </div>
  )
}

export default TargetChart