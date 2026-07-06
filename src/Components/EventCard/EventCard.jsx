import "./EventCard.css"

function EventCard(){
    return(
        <div className="event-card-container">
            <div className="text-event-card">
                <div>
                    <p>Corrida Social</p>
                    <h4>Avenida Atlântica, 110, Copacabana - Rio de Janeiro</h4>
                    <h4>1 de Agosto</h4>
                </div>
            </div>
            <div className="event-card-image">
                <img src="/Imagens/Card Event/corrida.jpg" />
            </div>
        </div>
    )
}

export default EventCard

