import React from 'react'

function Deposit({status,dispatch}) {
  return (
    <>
        <button disabled={status==='Noac'?1:0} onClick={()=>dispatch({type:'addup'})}>Deposit 150</button>
    </>
  )
}

export default Deposit