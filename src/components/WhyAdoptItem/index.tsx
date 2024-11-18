import pata from '../../assets/pata.png';
import './styles.scss';

export function WhyAdoptItem() {
    return (
        <div className="item">
            <img src={pata} />
            <p className="description">
                Milhares de pets aguardam uma segunda chance, e você pode ser a
                pessoa que muda o destino deles.
            </p>
        </div>
    );
}
