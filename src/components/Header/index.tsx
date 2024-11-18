import logotipo from '../../assets/Adote.png';
import logo from '../../assets/logo-amarela 1.png';
import './styles.scss';

export function Header() {
    return (
        <header>
            <div className="header-container">
                {/* <!-- Logo --> */}
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="MDN" className="item-1" />
                        <img src={logotipo} alt="Logo Adoção de Pets" />
                    </a>
                </div>

                {/* <!-- Menu de Navegação --> */}
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <a href="/">Início</a>
                        </li>
                        <li>
                            <a href="/adote">Adote um Pet</a>
                        </li>
                        <li>
                            <a href="/voluntarios">Seja um Voluntário</a>
                        </li>
                        <li>
                            <a href="/doacoes">Doações</a>
                        </li>
                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                    </ul>
                </nav>

                {/* <!-- Botão de Chamada para Ação --> */}
                <div className="cta-button">
                    <a href="/adote" className="btn-adote">
                        Adote Agora
                    </a>
                </div>
            </div>
        </header>
    );
}
