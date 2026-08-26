import "./EventCard.css"

function EventCard({ tipoEvento, endereco, data, hora, imagem, descricao }) {
    return (
        <article className="event-card-container">
            <div className="event-card-image-wrap">
                <img src={imagem} alt={tipoEvento} />
            </div>
            <div className="event-card-overlay">
                <p>{tipoEvento}</p>
                <h4>{endereco}</h4>
                <h4 className="event-card-date">{data}</h4>
                <h4 className="event-card-time">{hora}</h4>
                {descricao && <p className="event-card-desc">{descricao}</p>}
            </div>
        </article>
    )
}

export default EventCard
