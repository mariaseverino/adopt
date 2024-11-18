import './styles.scss';

export function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-info">
                    <h3>Sobre Nós</h3>
                    <p>
                        Somos uma organização dedicada à adoção responsável de
                        pets. Nosso objetivo é encontrar lares amorosos para
                        animais em situação de rua ou abandono.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Links Úteis</h3>
                    <ul>
                        <li>
                            <a href="/adote">Adote um Pet</a>
                        </li>
                        <li>
                            <a href="/voluntarios">Seja um Voluntário</a>
                        </li>
                        <li>
                            <a href="/doacoes">Faça uma Doação</a>
                        </li>
                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Conecte-se Conosco</h3>
                    <ul>
                        <li>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                className="social-icon facebook"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="social-icon instagram"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                className="social-icon twitter"
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    &copy; 2024 Todos os direitos reservados | Adoção de Pets |
                    Desenvolvido com amor.
                </p>
            </div>
        </footer>
    );
}
