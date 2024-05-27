function CardNrml(props)
{
    return(
        <div className="flex flex-col sm:flex-row items-center justify-start sm:justify-between m-5 sm:m-0 w-60 sm:w-max h-[24.5rem] sm:h-max bg-gradient-to-br from-[#1e1e1e] to-[#121212] sm:bg-none p-3 rounded-lg sm:p-0">
            <div className="flex items-center justify-center sm:w-60 sm:h-44 md:w-72 md:h-52 lg:w-80 lg:h-60 rounded-lg sm:mr-10">
                <img src={props.image} className="rounded-lg" alt=""/>
            </div>
            <div className="hidden sm:block sm:h-[17rem] md:h-[17rem] lg:h-80 w-1 bg-gradient-to-b from-blue-500 to-blue-700"></div>
            <div className="sm:w-60 sm:h-[17rem] md:w-72 md:h-[14.5rem] lg:w-80 lg:h-60 p-3 sm:p-2 md:p-4 sm:bg-gradient-to-br from-gray-900 to-slate-900 rounded-lg sm:ml-10 relative flex items-center justify-center">
                <div className="hidden sm:block bg-blue-600 h-1 w-10 absolute -left-10"></div>
                <div className="text-white sm:ml-5 flex flex-col justify-center">
                    <p className="mb-2"><span className="font-extrabold">Skills: </span>{props.skills}</p>
                    <p className="text-[0.95rem] md:text-base">{props.content}</p>
                    <div>
                        <a href={props.link} target="_blank" className="uppercase text-transparent text-xs font-bold bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" > 
                            Know more{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardNrml;