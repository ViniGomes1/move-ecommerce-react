import "./Baseboard.css"
import logo from '../../assets/Logos/logo - move .svg';
import { Link } from 'react-router-dom';

function Baseboard() {
    return (
        <div>
            <hr id="baseboard"/>
            <div className="baseboard-container">
                
                <div className="baseboard-left-container">
                    <div className="baseboard-logo">
                        <img src={logo} alt="MOVE Co." />
                        <h2>MOVE Co.</h2>
                    </div>
                    <p>Desde 2014, a MOVE Co. surgiu como uma alternativa sustentável a aqueles que buscam uma experiência transformadora em esportes.</p>
                </div>
                <div className="baseboard-middle-container">
                    <p>LOJA</p>
                    <ul>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/shop?category=Shorts">Shorts</Link></li>
                        <li><Link to="/shop?category=Camisetas">Top</Link></li>
                        <li><Link to="/shop?category=Jaquetas">Jaquetas</Link></li>
                    </ul>
                </div>
                <div className="baseboard-rigt-container">
                    <p>AJUDA</p>
                    <ul>
                        <li><Link to="/about">Sobre nós</Link></li>
                        <li><Link to="/sac">SAC</Link></li>
                        <li><Link to="/transport">Transporte</Link></li>
                        <li><Link to="/payment">Pagamentos</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Baseboard