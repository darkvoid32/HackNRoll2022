import { useRouter } from 'next/router'

import SampleData from "../api/plans.json";

const Plan = () => {
  const router = useRouter()
  const { pid } = router.query

  var id = parseInt(pid as string, 10);

  const plan = SampleData.Plans.at(id);

  return (
    <main>
      <div>
        <p>{JSON.stringify(plan)}</p>
      </div>
    </main >
  )
}

export default Plan