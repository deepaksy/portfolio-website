import { ReactElement } from "react"
import ThemeButton from "./ThemeButton"

const Navbar:React.FC = ():ReactElement => {
  return (
    <div>
      <h1>Navbar</h1>
      <ThemeButton/>
    </div>
  )
}

export default Navbar