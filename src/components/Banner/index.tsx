import './styles.scss';

import dogWide from '../../assets/dog.png'; // Pode ser a mesma imagem ou outra para a versão larga
import { Button } from '../Button';

export function Banner() {
    return (
        <div className="banner">
            <picture>
                <source srcSet={dogWide} media="(min-width: 600px)" />
                <source srcSet="mdn-logo-wide.png" media="(min-width: 600px)" />
                <img src="mdn-logo-narrow.png" alt="MDN" />
            </picture>
            <div className="content">
                <h2>
                    Encontre seu Novo Melhor{' '}
                    <span className="destaque">Amigo</span>!
                </h2>
                <p>
                    Milhares de animais esperam por um lar cheio de amor e
                    carinho.{' '}
                </p>
                <Button children="Encontre um pet" />
            </div>
        </div>
    );
}
