function MarqueeChild(props)
{
    let bgcolor={};
    if(props.name == "notebook")
    {
        bgcolor={color:"black"};
    }
    return(
        <div className="flex items-center justify-center px-5 mx-2 rounded-lg shadow-lg shadow-[#79797913]" style={{backgroundColor:props.color}}>
            <img src={props.image} className={props.className} />
            <p className={props.name?"ml-3 text-sm":""} style={bgcolor}>{props.name}</p>
        </div>
    );
}
export default MarqueeChild;