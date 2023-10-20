import { ReactElement } from "react"
import Theme from "./Theme"

const Navbar:React.FC = ():ReactElement => {
  return (
    <div>
      <h1>Navbar</h1>
      <Theme/>
    </div>
  )
}

export default Navbar