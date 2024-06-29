import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =()=> {
    const onlineStatus = useOnlineStatus()
    const [loginBtn,setLoginBtn] = useState("LOGIN")
    return (
        <div className="flex justify-between items-center p-2 m-5
        shadow-lg bg-zinc-100 rounded-lg mb-8">
            <div className="">
            <img className="w-32 rounded-full" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="">  
            <ul className="flex items-center"> 
                <li className="px-4"><Link to ="/">HOME</Link></li>  
                <li className="px-4"><Link to ="/about">ABOUT</Link></li>
                <li className="px-4"><Link to ="/contact">CONTACT</Link></li>
                <li className="px-4"><Link to ="/glosery">GLOSERY</Link></li>
                <li className="px-4">CART</li>
                <button className="rounded-md transition bg-amber-400 hover:bg-black hover:text-white py-2 px-4" onClick={()=>{
                   console.log('Clicked')
                   loginBtn==="LOGIN" 
                   ?setLoginBtn("LOGOUT")
                   :setLoginBtn("LOGIN")
                }}>{loginBtn}</button>
                    
            </ul>
            </div>

            <div style={{marginRight:"1%"}}>
                <h1>{onlineStatus?"🟢":"🔴"}</h1> 
            </div>
            </div>
    )
}

export default Header;
                    
