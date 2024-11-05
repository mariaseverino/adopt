import './styles.scss';

import dogWide from '../../assets/dog.png'; // Pode ser a mesma imagem ou outra para a versão larga
import { Button } from '../Button';

export function Banner() {
    return (
        <div className="banner">
            <img src={dogWide} alt="MDN" className="item-1" />
            <div className="content item-2 teste">
                <h2>
                    Encontre seu Novo Melhor{' '}
                    <span className="destaque">Amigo</span>!
                </h2>
                <p>
                    Milhares de animais esperam por um lar cheio de amor e
                    carinho.{' '}
                </p>
            </div>
            <div className="btn item-3 teste">
                <Button children="Encontre um pet" />
            </div>
        </div>
    );
}
