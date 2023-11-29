// charts related 
import {Cell, PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const renderLegend = (props) => {
  console.log("From render legend", props)
  const { payload } = props;

  return (
    <div className='flex justify-center gap-3'>
      {
        payload.map((entry, index) => (
          <div className='flex items-center gap-1' key={index}>
            
            <div style={{backgroundColor:`${COLORS[index]}`, width:'30px', height:'15px'}}></div>
            <p>{entry.name}</p>
          </div>
        ))
      }
    </div>
  );
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const PiechartComponent = ({subscirberVsMembers:data}) => {
  return (
    <div className='h-[200px] mt-10'>
      <ResponsiveContainer width="100%" height="100%">
    <PieChart width={300} height={400}>
      <Legend verticalAlign='top' iconType='square' payload={data} content={renderLegend}></Legend>
      <Tooltip></Tooltip>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        nameKey="name"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
  {/* <p className='text-center'><span className='font-bold me-1'>Figure:</span>News letter subscribers vs Paid members.</p> */}
    </div>
  )
}

export default PiechartComponent
