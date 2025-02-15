import { createContext, useContext, useReducer } from "react";

const BalanceContext = createContext();

const initialState = {
    balance : 5000,
    defaultCurrency:'$'
}
function reducer(snState,action){
    switch (action.type){
        case '':{
            return {...snState}
        }
        default:{
            throw new Error('Action not known')
        }
    }
}

function BalanceContxtProvider({ children }) {
    const [{balance,defaultCurrency},dispatch] = useReducer(reducer,initialState)
  return <BalanceContext.Provider  value={{balance,defaultCurrency}}>{children}</BalanceContext.Provider>;
}

function UseBalance(){
    const context = useContext(BalanceContext)

    if(context === undefined){
        throw new Error('Context used outside')
    }else{
        return context
    }
}

export {BalanceContxtProvider,UseBalance}


