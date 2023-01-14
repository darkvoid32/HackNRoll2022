import { NextPage } from "next";

interface Props {
  name: string;
}

const DayCard: NextPage<Props> = (props) => {
  const { name } = props;

  return (
    <div className="flex justify-center h-32 bg-slate-200">{name}</div>
  )
};

export default DayCard;