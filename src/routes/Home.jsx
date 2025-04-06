import { useSelector } from "react-redux"

import Layout from "../ui-components/Layout"
import Overlay from "../ui-components/Overlay"
import FormMainCard from "../ui-components/FormMainCard"
import { useState } from "react"
import ExchangeRate from "../components/ExchangeRate"
import { UseBalance } from "../context/BalanceContext"
import Payment from "../components/Payment"
import IncomeExpense from "../components/IncomeExpense"
import TableOperations from "../components/TableOperations"
import Chats from "../components/Chats"

function Home() {
    const {id,account,status,balance,initialLoading,editLoading} = useSelector((store)=>store.mainCard)
    const {defaultCurrency} = UseBalance()
    const [open,setOpen] = useState(false)
    
    
    return (
        <Layout>
            {open&&<Overlay onClick={()=>setOpen(false)}>
               <FormMainCard setOpen={setOpen} onClick={()=>setOpen(false)} className={'cntrElement'}/>
            </Overlay>}
            <div className="flex  items-start">
                   <div>
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
                <IncomeExpense/>
                   </div>
           
                <div className="flex flex-wrap items-start">
                <ExchangeRate/>
                <Payment/>
                <div className="w-full  bg-grey100 mx-[30px] mt-[25px] p-[20px] rounded-[10px] overflow-hidden">
                  <div className="flex items-center justify-between">
                   <div>
                   <p className="mb-[10px] font-pop text-white font-medium">Download The <span className="text-violet">App</span></p>
                     <p className="text-grey300 font-pop">Download On</p>
                     <div className="flex flex-col items-start">
                      <div className="mt-[15px] inline-flex items-center bg-white py-[10px] px-[15px] rounded-xl">
                      <svg style={{'width':'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                      <p className="font-pop font-medium text-[12px] ml-[10px]">Apple Store</p>
                      </div>
                      <div className="mt-[15px] inline-flex items-center bg-white py-[10px] px-[15px] rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px" baseProfile="basic"><linearGradient id="AraffhWwwEqZfgFEBZFoqa" x1="18.102" x2="25.297" y1="3.244" y2="34.74" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#35ab4a"/><stop offset=".297" stopColor="#31a145"/><stop offset=".798" stopColor="#288739"/><stop offset="1" stopColor="#237a33"/></linearGradient><path fill="url(#AraffhWwwEqZfgFEBZFoqa)" d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"/><linearGradient id="AraffhWwwEqZfgFEBZFoqb" x1="19.158" x2="21.194" y1="23.862" y2="66.931" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f14e5d"/><stop offset=".499" stopColor="#ea3d4f"/><stop offset="1" stopColor="#e12138"/></linearGradient><path fill="url(#AraffhWwwEqZfgFEBZFoqb)" d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"/><linearGradient id="AraffhWwwEqZfgFEBZFoqc" x1="32.943" x2="36.541" y1="14.899" y2="43.612" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffd844"/><stop offset=".519" stopColor="#ffc63f"/><stop offset="1" stopColor="#ffb03a"/></linearGradient><path fill="url(#AraffhWwwEqZfgFEBZFoqc)" d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"/><linearGradient id="AraffhWwwEqZfgFEBZFoqd" x1="13.853" x2="15.572" y1="5.901" y2="42.811" gradientUnits="userSpaceOnUse"><stop offset=".003" stopColor="#0090e6"/><stop offset="1" stopColor="#0065a0"/></linearGradient><path fill="url(#AraffhWwwEqZfgFEBZFoqd)" d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"/></svg>

                      <p className="font-pop font-medium text-[12px] ml-[10px]">Google Play</p>
                      </div>
                     </div>
                   </div>
                   <div className="flex ">
                    <img src="/Qr-Code.png" alt="" />
                    <img src="/download-phone.png" alt="" className="translate-y-[20px]"/>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
          <div className="flex items-start">
            <TableOperations/>
            <Chats/>
          </div>

        </Layout>
    )
}

export default Home
