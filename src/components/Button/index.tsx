import './styles.scss';

interface ButtonProps {
    children: string;
}

export function Button({ children }: ButtonProps) {
    return <button className="botao">{children}</button>;
}
