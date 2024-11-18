// import React, { ReactNode } from 'react';

import './styles.scss';

// import dogWide from '../../assets/gato1.jpg';
import { Pet } from '../../views/Home';

interface PetCardProps {
    pet: Pet;
}

export function PetCard({ pet }: PetCardProps) {
    return (
        <div className="card">
            <img src={pet.img} alt="MDN" className="item-1" />
            <p className="petName">{pet.name}</p>

            <p className="petDescription">{pet.description}</p>
        </div>
    );
}
