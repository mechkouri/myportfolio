
const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-24 h-24 animate-spin  rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 flex justify-center items-center">
                <div className=" w-20 h-20 bg-[#210d3e] rounded-full border-2 border-blue-500 flex justify-center items-center">
                    <svg className="animate-pulse w-9 h-9 stroke-purple-400" viewBox="0 0 256 256">
                        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Loading