import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip,faCreditCard,faRightLeft,faLandmark,faAddressBook,faGear,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
    return (
        <div className="flex flex-col sidebar bg-grey relative">
            <NavLink to="/">
            <FontAwesomeIcon icon={faGrip}/>
             <span>Home</span>
            </NavLink>
            <NavLink to="/credit">
            <FontAwesomeIcon icon={faCreditCard}/>
            <span>Credit</span>
            </NavLink>

            <NavLink to="/transfer">
            <FontAwesomeIcon icon={faRightLeft} />
            <span>Transfer</span>
            </NavLink>
            <NavLink to="/loans">
            <FontAwesomeIcon icon={faLandmark}/>
            <span>Loans</span>
            </NavLink>
            <NavLink to="/contacts">
            <FontAwesomeIcon icon={faAddressBook}/>
            <span>Contacts</span>
            </NavLink>
            <div className="absolute bottom-[150px] flex flex-col w-full">
            <NavLink to="/setting">
            <FontAwesomeIcon icon={faGear} />
            <span>Setting</span>
            </NavLink>

            <NavLink to="/LogOut">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Log Out</span>
            </NavLink>
            </div>





            
        </div>
    )
}

export default Sidebar
