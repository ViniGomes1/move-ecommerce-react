import EventCard from "../EventCard/EventCard"
import "./EventGrid.css"


const eventoInfosList = [
    {
        tipoEvento: "Corrida Social",
        endereco: "Avenida Atlântica, 110, Copacabana - Rio de Janeiro",
        data: "1 de Agosto",
        hora: "15:30 - HORÁRIO DE BRASÍLIA",
        imagem: "/Imagens/Card Event/corrida.jpg"
    },
    {
        tipoEvento: "Corrida",
        endereco: "Avenida Atlântica, 110, Copacabana - Rio de Janeiro",
        data: "1 de Agosto",
        hora: "15:30 - HORÁRIO DE BRASÍLIA",
        imagem: "/Imagens/Card Event/corrida.jpg"
    },
    {
        tipoEvento: "Corrida",
        endereco: "Avenida Atlântica, 110, Copacabana - Rio de Janeiro",
        data: "1 de Agosto",
        hora: "15:30 - HORÁRIO DE BRASÍLIA",
        imagem: "/Imagens/Card Event/corrida.jpg"
    },
    {
        tipoEvento: "Corrida",
        endereco: "Avenida Atlântica, 110, Copacabana - Rio de Janeiro",
        data: "1 de Agosto",
        hora: "15:30 - HORÁRIO DE BRASÍLIA",
        imagem: "/Imagens/Card Event/corrida.jpg"
    }
]

function EventGrid(){
    return(
        <div className="p-[20px]">
            <div className="mt-[30px] mb-[10px] flex items-center">
                <h1 className="text-[20px] text-[#15342d] font-bold tracking-[2.5px]">PRÓXIMOS EVENTOS</h1>
            </div>
            <div className="flex flex-row flex-wrap">
                {eventoInfosList.map((infos, index) => (
                    <EventCard data={infos.data} endereco={infos.endereco} hora={infos.hora} imagem={infos.imagem} tipoEvento={infos.tipoEvento}/>
                ))}
            </div>
        </div>
    )
}

export default EventGrid

