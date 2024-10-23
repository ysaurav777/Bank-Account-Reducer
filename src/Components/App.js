import React, { useReducer } from 'react'
import './App.css'
import Balance1 from './Balance'
import Loan1 from './Loan'
import Openacc from './Openacc'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import Reqloan from './Reqloan'
import Closeacc from './Closeacc'

const initialvalue={
  Balance:0,
  Loan:0,
  status:'Noac',
};

function reducer(state,action) {
  switch(action.type) {
    case 'Noac':
      return {...state,status:'ok'}
    case 'ok':
        return {...state,status:'ok'}
    case 'addup':
      return {...state,Balance:state.Balance+150}
    case 'withd':
      return {...state,Balance:state.Balance-50}
    case 'reloan':
      return {...state,Loan:1000,Balance:state.Balance+1000,status:'reloan'}
    case 'payloan':
      return {...state,Loan:0,Balance:state.Balance-1000,status:'payloan'}
    case 'close':
      return {...state,status:"Noac"}
  }
}

const App = () => {
  const [{Balance,Loan,status},dispatch]=useReducer(reducer,initialvalue);

  return (
    <div className='app'>
      <h1>useReducer Bank Account</h1>
      <Balance1 Balance={Balance}/>
      <Loan1 Loan={Loan}/>
      <Openacc status={status} dispatch={dispatch}/>
      <Deposit status={status} dispatch={dispatch}/>
      <Withdraw status={status} dispatch={dispatch} Balance={Balance}/>
      <Reqloan status={status} dispatch={dispatch} Balance={Balance}/>
      <Closeacc status={status} dispatch={dispatch} Balance={Balance} Loan={Loan}/>
    </div>
  )
}

export default App