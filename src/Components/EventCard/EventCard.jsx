import "./EventCard.css"

function EventCard({tipoEvento, endereco, data, hora, imagem}){
    return(
        <div className="event-card-container m-[10px]">
            <div className="absolute z-2">
                <div className="pl-[20px] pt-[10px]">
                    <p className="text-[#ffffff] text-[20px] font-bold">{tipoEvento}</p>
                    <h4 className="mt-[10px] text-[#ffffff]">{endereco}</h4>
                    <h4 className="text-[15px]  mt-[25px] text-[#ffffff]">{data}</h4>
                    <h4 className="mt-[5px] text-[#ffffff]">{hora}</h4>
                </div>
            </div>
            <div className="z-1">
                <img className="object-cover object-[0px_-60px] opacity-50" src={imagem} />
            </div>
        </div>
    )
}

export default EventCard

