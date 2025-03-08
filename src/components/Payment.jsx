import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton,faWifi ,faTv,faCar,faPhone} from '@fortawesome/free-solid-svg-icons'
const icons = [{iconname:faMobileScreenButton,name:'Mobile'},{iconname:faWifi,name:"Internet"},{iconname:faTv,name:'TV'},{iconname:faPhone,name:'Fixed Phone'},{iconname:faCar,name:"Transport"},{iconname:"...",name:"Other"}]
function Payment() {
    return (
        <div>
            <h2 className="font-pop font-semibold mb-[15px]">Payments</h2>
            <div className='w-[200px] flex flex-wrap justify-between'>
                {icons.map((item,index)=>{
                  return (index===icons.length-1?
                  <a href="#" key={index} className="shadow-shadowIcon paymentIocn mb-[25px] ">
                   <span className='centerElement'>{item.iconname}</span>
                   <p className='font-semibold font-pop text-size-12 absolute bottom-[-25px] left-[0] right-0 mx-auto text-center'>{item.name}</p>
                    </a>
                 :
                  <a href="#" key={index} className="shadow-shadowIcon  paymentIocn mb-[30px] ">
                    <FontAwesomeIcon icon={item.iconname} className='centerElement' />
                    <p className='font-semibold font-pop text-size-12 absolute bottom-[-25px] left-[0] right-0 mx-auto text-center'>{item.name}</p>
                    </a>
                  )
                })}
            </div>
        </div>
    )
}

export default Payment
