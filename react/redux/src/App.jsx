import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { depositMoney, reset, widrawMoney } from './redux/actions/account'
// import { depositMoney, reset, widrawMoney } from './redux/store'

const App = () => {
  const { amount } = useSelector(state => state.bank)
  const callAction = useDispatch()
  const [amt, setAmt] = useState(10)
  return <>
    <input type="number" value={amt} onChange={e => setAmt(+e.target.value)} />
    <h1>{amount}</h1>
    <button onClick={e => callAction(depositMoney(amt))}>deposit</button>
    <button onClick={e => callAction(widrawMoney(amt))}>widraw</button>
    <button onClick={e => callAction(reset())}> Reset</button>

  </>
}

export default App
