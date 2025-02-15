function Login() {
    return (
        <div className="xyzLogin flex items-center ">
               <button className="ml-auto mr-[15px]">
                    <img src="/search.svg"/>
                </button>
            <img src="/profile.png" className="w-[35px] h-[35px] block mr-[15px]" alt="" />
            <div>
                <p className="text-black font-semibold ">Ahmed Mohamed</p>
                <p className="text-grey200 text-size-14">ahmedatyabas@gmail.com</p>
            </div>
        </div>
    )
}

export default Login
