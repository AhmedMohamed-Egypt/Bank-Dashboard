import { useReducer } from "react"
import { getData } from "../redux/MainCard"
import { useDispatch } from "react-redux"

const initialState = {
    id:'',
    account:'',
    status:'',
    balance:''
}
function reducer(snState,action){
    switch(action.type){
       case 'getId':{
        return {...snState,id:action.payload}
       }
       case 'getStatus':{
        return {...snState,status:action.payload}
       }
       case 'getAccount':{
        return {...snState,account:action.payload}
       }
       case 'getBalance':{
        return {...snState,balance:action.payload}
       }
       case 'emptyOut':{
        return {...initialState}
       }

       default:{
        throw new Error ('Action not known')
       }
    }
}



function FormMainCard({className,onClick,setOpen}) {
    const [{id,account,status,balance},dispatch] = useReducer(reducer,initialState)
    const dispatchRedux = useDispatch()
    function handleSaveChanges(e){
    e.preventDefault()
    const data = {
        id:id,
        account:account,
        status:status,
        balance:balance
    }
       dispatchRedux(getData(data))
       dispatch({type:'emptyOut'})
       setOpen(false)
    }
    return (
        <div className={className} onClick={(e)=>e.stopPropagation()}>
            <form action="" className="bg-[#fff] p-[20px]  w-[400px] rounded-[8px]">
                <div className="mb-3">
                    <label htmlFor="id" className="text-[#333333f2] block text-grey900  font-semibold mb-1">ID</label>
                    <input value={id} onChange={(e)=>dispatch({type:'getId',payload:e.target.value})} id="id" type="text" className="bg-[#f3f4f6] w-full px-[15px] py-[10px] rounded-[4px]" />
                </div>
                <div className="mb-3">
                    <label htmlFor="account" className="text-[#333333f2] font-semibold  mb-1 block">Account</label>
                    <input value={account} onChange={(e)=>dispatch({type:'getAccount',payload:e.target.value})}  id="account" type="text" className="bg-[#f3f4f6]  w-full px-[15px] py-[8px] rounded-[4px]" />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="text-[#333333f2] font-semibold  mb-1 block">Status</label>
                    <input value={status} id="status" onChange={(e)=>dispatch({type:'getStatus',payload:e.target.value})} type="text" className="bg-[#f3f4f6] w-full px-[15px] py-[8px] rounded-[4px]" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Balance" className="text-[#333333f2] font-semibold mb-1 block">Balance</label>
                    <input value={balance} onChange={(e)=>dispatch({type:'getBalance',payload:e.target.value})} id="Balance" type="text" className=" bg-[#f3f4f6] w-full px-[15px] py-[8px] rounded-[4px]" />
                </div>
                <div className="flex justify-center">
                    <button onClick={onClick} className="px-[25px] py-[10px] font-semibold rounded-md bg-red-500 text-white mr-[15px]">Cancel</button>
                    <button onClick={(e)=>handleSaveChanges(e)} className="px-[25px] py-[10px]  font-semibold rounded-md bg-violet text-white">Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default FormMainCard
