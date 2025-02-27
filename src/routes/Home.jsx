import { useSelector } from "react-redux"

import Layout from "../ui-components/Layout"
import Overlay from "../ui-components/Overlay"
import FormMainCard from "../ui-components/FormMainCard"
import { useState } from "react"
import ExchangeRate from "../components/ExchangeRate"
import { UseBalance } from "../context/BalanceContext"
function Home() {
    const {id,account,status,balance,initialLoading,editLoading} = useSelector((store)=>store.mainCard)
    const {defaultCurrency} = UseBalance()
    const [open,setOpen] = useState(false)
    
    
    return (
        <Layout>
            {open&&<Overlay onClick={()=>setOpen(false)}>
               <FormMainCard setOpen={setOpen} onClick={()=>setOpen(false)} className={'cntrElement'}/>
            </Overlay>}
            <div className="flex  ">
                <div className="mainCard bg-lightviolet rounded-[10px] w-[620px] p-[20px] ">
                 <div className="flex items-center justify-between mb-[20px]">
                    <p className="text-black font-pop font-semibold">Main Card</p>
                    <button onClick={()=>setOpen(true)} className="text-violet100 font-pop text-size-18">Change</button>
                 </div>
                 <div className="flex items-center justify-between">
                   {initialLoading || editLoading?<p>Loading</p>: <div className="min-w-[250px] pr-[15px]">
                        <div className="py-[10px] flex items-center border-b-[1px] border-grey100 border-solid">
                            <p className="text-violet font-semibold font-pop w-[100px]">ID</p> <p className="text-black font-pop text-size-18 font-semibold">{id}</p>
                            </div>
                        <div className="py-[10px] flex items-center border-b-[1px] border-grey100 border-solid"><p className="text-violet font-semibold font-pop w-[100px]">Account</p> <p className="text-black font-pop text-size-18 font-semibold">{account}</p></div>
                        <div className="py-[10px] flex items-center border-b-[1px] border-grey100 border-solid"><p className="text-violet font-semibold font-pop w-[100px]">Status</p><p className="text-black font-pop text-size-18 font-semibold">{status}</p></div>
                        <div className="py-[10px] flex items-center border-b-[1px] border-grey100 border-solid"><p className="text-violet font-semibold font-pop w-[100px]">Balance</p><p className="text-black font-pop text-size-18 font-semibold">{defaultCurrency} {balance}</p></div>
                    </div>}
                    <div className="bg-grey900 credit-card rounded-[10px] pl-[20px] w-[280px] pr-[25px] pt-[15px] pb-[15px]">
                        <span className="credit-card__lineone"></span>
                        <span className="credit-card__linetwo"></span>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-white69 text-size-14 font-pop">Credit Card</p>
                        <p className="text-white69 text-size-14 font-pop ml-auto">XYZ Bank</p>
                      </div>
                      <div className="flex items-center mb-2">
                        <img src="/wirless.png" alt="" />
                        <img src="/wifi.png" alt="" />
                      </div>
                      <div>
                        <p className="text-white69 text-size-14 font-pop">123303024566758</p>
                      </div>
                      <div>
                        <p className="text-white69 text-size-14 font-pop mb-2">0234</p>
                      </div>
                      <div className="pl-[25px] mb-2">
                        <p className="text-white69 text-[8px] font-pop">Valid Thru <span>00/00</span></p>
                      </div>

                      <div>
                     <p className="text-white69 text-size-14 font-pop">NAME USERNAME</p>
                      </div>
                    </div>
                 </div>
                </div>
                <ExchangeRate/>
            </div>
        </Layout>
    )
}

export default Home
