import { NextPage } from "next"
import { ReactNode } from "react"
import { useDrop } from 'react-dnd'

type Props = {

}

const TimelineDrop: NextPage<Props> = (props) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "place",
    drop: () => { },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <div
      ref={drop}
    >
      <div>ASd</div>
    </div>
  )
}

export default TimelineDrop