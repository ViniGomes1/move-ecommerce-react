import EventCard from '../EventCard/EventCard';
import { eventsList } from '../../data/events';
import './EventGrid.css';

function EventGrid() {
  return (
    <div className="event-grid-page">
      <div className="event-grid-title">
        <h1>PRÓXIMOS EVENTOS</h1>
        <p>Junte-se a nossa comunidade MOVE em eventos únicos e transformadores</p>
      </div>
      <div className="event-grid-list">
        {eventsList.map((event) => (
          <EventCard
            key={event.id}
            data={event.data}
            endereco={event.endereco}
            hora={event.hora}
            imagem={event.imagem}
            tipoEvento={event.tipoEvento}
            descricao={event.descricao}
          />
        ))}
      </div>
    </div>
  );
}

export default EventGrid;
