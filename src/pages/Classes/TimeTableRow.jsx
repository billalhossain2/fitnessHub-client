const TimeTableRow = ({item}) => {
    const {time, exercise, instructor, exercise2, instructor2, exercise3, instructor3, exercise4, instructor4, exercise5, instructor5} = item || {};
  return (
    <tr>
      <td>{time}</td>
      <td>
        <div className="flex items-center gap-3 py-5 pl-8">
          <div>
            <div className="font-bold">{exercise}</div>
            <div className="text-sm opacity-50">{instructor}</div>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-center gap-3 py-5 pl-8">
          <div>
            <div className="font-bold">{exercise2}</div>
            <div className="text-sm opacity-50">{instructor2}</div>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-center gap-3 py-5 pl-8">
          <div>
            <div className="font-bold">{exercise3}</div>
            <div className="text-sm opacity-50">{instructor3}</div>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-center gap-3 py-5 pl-8">
          <div>
            <div className="font-bold">{exercise4}</div>
            <div className="text-sm opacity-50">{instructor4}</div>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-center gap-3 py-5 pl-8">
          <div>
            <div className="font-bold">{exercise5}</div>
            <div className="text-sm opacity-50">{instructor5}</div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TimeTableRow;
