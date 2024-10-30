export default function Player({playerObject}){
    return(
        <div className="w-1/2 bg-red-200 h-6 items-center flex flex-row border-l border-r border-b border-black font-sans">
            <div className="h-full w-1/4 items-center flex border-r border-black">
                <p className="pl-4 w-full">
                    {playerObject.name}
                </p>
            </div>
            <div className="h-full w-1/4 items-center flex border-r border-black">
                <p className="pl-4 w-full">
                    {playerObject.position}
                </p>
            </div>
            <div className=" h-full w-1/4 items-center flex border-r border-black">
                <p className="pl-4 w-full ">
                    {playerObject.age}
                </p>
            </div>
            <div className="h-full w-1/4 items-center flex">
                <p className="pl-4 w-full">
                    {playerObject.college}
                </p>
            </div>
        </div>
    )
}