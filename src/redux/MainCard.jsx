
const res =await fetch('http://localhost:8000/cards',{
  method:'GET',
  headers:{
    'Content-Type':'application/json'
  }
})
const data = await res.json()

const mainCard = data[0]

export default function mainCardReducer(state=mainCard,action){
    switch (action.type){
      case 'changeData':{
       const data = action.payload
        return {...state,id:data.id,account:data.account,status:data.status,balance:data.balance}
      }
      default :{
        return state
      }
    }
}


export function getData(data){
  return {type:'changeData',payload:data}
}