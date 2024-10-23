import React from 'react'

function Reqloan({status,dispatch,Balance}) {
    const enogh=Balance>=1000?0:1
  return (
    <>
        <button disabled={status==='Noac'||status==='reloan'?1:0} onClick={()=>dispatch({type:'reloan'})}>Request a Loan</button>
        <button disabled={status==='Noac'||status==='payloan'||enogh?1:0} onClick={()=>dispatch({type:'payloan'})}>Pay Loan</button>
    </>
  )
}

export default Reqloan