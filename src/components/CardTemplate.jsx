function CardTemplate({className,cardType,cardAccount,cardCurrency,accountBalance,theme}) {
    return (
        <div className={`bg-grey900 credit-card rounded-[10px] pl-[20px] w-[300px] pr-[25px] pt-[15px] pb-[15px] ${className||''}`}>
                        <span className="credit-card__lineone"></span>
                        <span className="credit-card__linetwo"></span>
                      <div className="flex items-center justify-between">
                        <p className="text-white69 text-size-14 font-pop">{cardType}</p>
                        <p className="text-white69 text-size-14 font-pop ml-auto">XYZ Bank</p>
                      </div>
                      <div className="flex items-center ">
                        <img src="/wirless.png" alt="" />
                        <img src="/wifi.png" alt="" />
                      </div>
                      <div>
                        <p className="text-white69 text-size-14 font-pop">{cardAccount}</p>
                      </div>
                      <div>
                      <p className="text-white69 text-size-14 font-pop ">{accountBalance}</p>
                        <p className="text-white69 text-size-14 font-pop ">{cardCurrency}</p>
                      </div>
                      <div className="pl-[25px] ">
                        <p className="text-white69 text-[8px] font-pop">Valid Thru <span>00/00</span></p>
                      </div>

                      <div>
                     <p className="text-white69 text-size-14 font-pop">NAME USERNAME</p>
                      </div>
                      <span className={`absolute bottom-0 text-white rounded-lg right-0 inline-block py-[5px] px-[15px] ${theme}`}>{theme}</span>
                    </div>
    )
}

export default CardTemplate
