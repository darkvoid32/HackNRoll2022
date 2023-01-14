import { NextPage } from 'next';
import DayCard from './dayCard';

interface Props {
  dates: Date[];
}

const TimeLine: NextPage<Props> = (props) => {
  const dayCards = (dates: Date[]) => {
    let content = []
    for (let i = 0; i < dates.length; i++) {
      content.push(<DayCard key={i} date={dates.at(i)}></DayCard>);
    }
    return content;
  }

  return (
    <div>
      <p>Timeline</p>
      <p>Days: {props.dates.length}</p>
      <div className="grid grid-cols-4 gap-4">
        {dayCards(props.dates)}
      </div>
    </div>
  );
};

export default TimeLine;