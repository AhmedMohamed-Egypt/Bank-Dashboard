const mainCard = {
  id:'',
  account:'',
  status:'',
  balance:'',
  initialLoading:true,
  editLoading:true
}
export default function mainCardReducer(state=mainCard,action){
    switch (action.type){
      case 'loading':{
        return {...state,initialLoading:action.payload}
      }
      case 'fetchDataApi':{
        return {...state,...action.payload[0],editLoading:false}
      }
      case 'changeData':{ 
        return {...state,...action.payload}
      }
      case 'editLoading':{
        return {...state,editLoading:action.payload}
      }
      default :{
        return state
      }
    }
}
 export function fetchData(){
 
  return async function(dispatch,getState){
    dispatch({type:'loading',payload:true})
    const res = await fetch('http://localhost:8000/cards',{
      method:'GET',
      headers:{
        "Accept":"application/JSON",
        "Content-Type":"application/json"
      }
      
    })
    const data = await res.json()
    dispatch({type:'loading',payload:false})
    dispatch({type:'fetchDataApi',payload:data})
    
  }

}






export function getData(dataUser){
  
  return async function (dispatch,getState){
     dispatch({type:'editLoading',payload:true})
     const res = await fetch('http://localhost:8000/cards/23456',{
      method:'PUT',
      mode: "cors",
      body:JSON.stringify(dataUser),
      headers:{
        "Accept": "application/JSON",
        "Content-Type":"application/json",

      }
     })
     const data = await res.json();
      dispatch({type:'changeData',payload:data})
     
      dispatch({type:'editLoading',payload:false})
     
    
  }
}