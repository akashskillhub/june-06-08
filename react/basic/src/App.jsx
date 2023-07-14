import Myjsx from "./01_jsx/Myjsx"
import Practice from "./01_jsx/Practice"
import Myprops from "./02_props/Myprops"
import Mystate from "./03_state/Mystate"
import Myevent from "./04_event/Myevent"
import Counter from "./05_practice/Counter"
import Demo from "./05_practice/Demo"

const App = () => {
  const arr = ["ross", "joe", "rachel"]
  return <>
    {/* <Demo fnames={arr} /> */}
    <Counter />
  </>
}
export default App