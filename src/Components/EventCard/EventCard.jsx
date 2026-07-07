import "./EventCard.css"

function EventCard(){
    return(
        <div className="event-card-container">
            <div className="absolute z-2">
                <div className="pl-[20px] pt-[10px]">
                    <p className="text-[#ffffff] text-[20px] font-bold">Corrida Social</p>
                    <h4 className="mt-[10px] text-[#ffffff]">Avenida Atlântica, 110, Copacabana - Rio de Janeiro</h4>
                    <h4 className="text-[15px]  mt-[25px] text-[#ffffff]">1 de Agosto</h4>
                    <h4 className="mt-[5px] text-[#ffffff]">15:30 - HORÁRIO DE BRASÍLIA</h4>
                </div>
            </div>
            <div className="z-1">
                <img className="object-cover object-[0px_-60px] opacity-50" src="/Imagens/Card Event/corrida.jpg" />
            </div>
        </div>
    )
}

export default EventCard

