

const initialState = {
    dataOperations:[],
    loadOperationData:false,
    errorOperationData:null
}


export default function operationReducer(state = initialState,action){
    switch(action.type){
        case "loadOperation":{
         
            return {...state,loadOperationData:action.payload.status,dataOperations:action.payload.data}
        }
        case "fetchErrorLoadOp":{
            return {...state,errorOperationData:action.payload}
        }
        default:{
            return state
        }
    }
}

export function fetchOperation(){
    return async function(dispatch,getState){
        try{
            dispatch({type:'loadOperation',payload:{status:true,data:[]}})
        const data = await fetch('http://localhost:8000/tableOperations')
        
        if(!(data.ok)){
            throw new Error('Connection Error')
        }else {
            const res = await data.json()
          
            dispatch({type:'loadOperation',payload:{status:false,data:res}})
        }
        
        }catch (error){
            if (error.name === "TypeError") {
                error.message = "Connection error";
                 dispatch({ type: "fetchErrorLoadOp", payload:  error.message });
               }
               dispatch({ type: "fetchErrorLoadOp", payload:  error.message  });
        }
    }
}