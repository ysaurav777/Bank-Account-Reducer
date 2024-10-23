import React from 'react'

function Withdraw({status,dispatch,Balance}) {
  return (
    <>
        <button disabled={status==='Noac'||Balance<50 ?1:0} onClick={()=>dispatch({type:'withd'})}>Withdraw 50</button>
    </>
  )
}

export default Withdraw