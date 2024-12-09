import pet3 from '../../assets/cachorro1.jpg';
import pet4 from '../../assets/cachorro2.jpg';
import gato from '../../assets/gato.png';
import pet1 from '../../assets/gato1.jpg';
import pet2 from '../../assets/gato2.jpg';
import { Banner } from '../../components/Banner';
import { Button } from '../../components/Button';
import { PetCard } from '../../components/PetCard';
import { WhyAdoptItem } from '../../components/WhyAdoptItem';
import './styles.scss';

export interface Pet {
    name: string;
    img: string;
    description: string;
}

export function Home() {
    const pets: Pet[] = [
        {
            name: 'Taylor',
            img: pet1,
            description: 'Lorem ipsum dolor amet, consectetur adipiscing elit.',
        },
        {
            name: 'Alice',
            img: pet2,
            description: 'Lorem ipsum dolor amet, consectetur adipiscing elit.',
        },
        {
            name: 'Bob',
            img: pet3,
            description: 'Lorem ipsum dolor amet, consectetur adipiscing elit.',
        },
        {
            name: 'Chris',
            img: pet4,
            description: 'Lorem ipsum dolor amet, consectetur adipiscing elit.',
        },
    ];
    return (
        <>
            {/* <Banner /> */}
            <div className="cardSection">
                {pets.map((pet) => (
                    // <h1>ttt</h1>
                    <PetCard pet={pet} />
                ))}
            </div>
            <div className="itemsSection">
                <h2>Por que Adotar?</h2>
                <div className="items">
                    <WhyAdoptItem />
                    <WhyAdoptItem />
                    <WhyAdoptItem />
                </div>
            </div>
            {/* <section className="callToActionSection">
                <div className="wrapper">
                    <div className="content item-2 teste">
                        <p>
                            Escolha amor e responsabilidade! Encontre o seu novo
                            melhor amigo.
                        </p>
                        <div className="btn item-3 teste">
                            <Button children="Encontre um pet" />
                        </div>
                    </div>
                    <img src={gato} alt="MDN" className="item-1" />
                </div>
            </section> */}
        </>
    );
}
