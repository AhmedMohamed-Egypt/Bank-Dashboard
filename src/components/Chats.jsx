function Chats() {
    return (
        <div className="bg-lightviolet rounded-lg w-[450px] ml-[15px] mt-[20px] py-[25px] px-[20px]">
            <div className="flex items-center justify-between">
                <p className="font-pop font-semibold">Chats</p>
                <a href="#" className="font-pop text-size-18 font-semibold text-violet100">See More</a>
            </div>
            <div className="mt-3">
                <div className="flex items-center border-b-[1px] pb-[15px] border-grey200">
                    <img  src="/chats-1.png" alt="" className="mr-2 w-[60px]" />
                    <div >
                        <p className="font-pop font-semibold">Mitvhin</p>
                        <p className="font-pop text-grey100 text-sm">chatsusxssccncmmcxbkjcmcxjbckjkjkbcxkjbkjvkj</p>
                        <div className="flex items-center justify-between mt-1">
                            <span className="font-semibold text-size-14">...</span>
                            <p>12:00</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[10px] flex items-center border-b-[1px] pb-[15px] border-grey200">
                    <img  src="/chat-2.png" alt="" className="mr-2 w-[60px]" />
                    <div >
                        <p className="font-pop font-semibold">Sagar Roshan</p>
                        <p className="font-pop text-grey100 text-sm">chatsusxssccncmmcxbkjcmcxjbckjkjkbcxkjbkjvkj</p>
                        <div className="flex items-center justify-between mt-1">
                            <span className="font-semibold text-size-14">...</span>
                            <p>12:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats
