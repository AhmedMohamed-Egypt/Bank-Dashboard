const initialState={
    cardType:'',
    cardAccount:'',
    cardCurrency:'',
    accountBalance:''
}

export default function CollectCardsData (state=initialState,action){
    switch(action.type){
        case 'collectData':{
            
            return {...state}
        }
        default:{
            return {...state}
        }
    }
}

export function getData(dataForm){
  return {type:'collectData',payload:dataForm}
}

