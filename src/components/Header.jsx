import { UseBalance } from "../context/BalanceContext"
import Login from "./Login"
import Notifications from "./Notifications"




function Header() {
    const {balance,defaultCurrency} = UseBalance()
    return (
        <div className="flex bg-grey shadow-shdaowHeader p-4 rounded-md relative">
          
            <div>
                
                <img src="/logo.svg" alt="" />
            </div>
            <div className="mx-auto flex items-center justify-center">
            <div className="absolute right-0 left-0 w-full mx-auto flex flex-col items-center">
            <p className="text-violet font-semibold text-size-20"> {`${defaultCurrency}`} {balance} </p>
            <p className=" text-grey200">Current Balance</p>
            </div>
             
            </div>
         
            <div className="flex items-center relative z-[99]">
                <Login/>
                <span className="mx-[50px] block w-[1px] h-[30px] bg-grey200"></span>
                <Notifications/>
            </div>
        </div>
    )
}

export default Header

