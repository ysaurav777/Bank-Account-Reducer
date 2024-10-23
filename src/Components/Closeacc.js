import React from 'react'

function Closeacc({status,dispatch,Balance,Loan}) {
  return (
    <>
        <button disabled={status==='Noac'|| Balance>0 || Loan>0?1:0}  onClick={()=>dispatch({type:'close'})}>Close Account</button>
    </>
  )
}

export default Closeacc