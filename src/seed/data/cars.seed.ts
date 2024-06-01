
// import { Car } from '../../cars/interfaces/car.interfaces';
import { v4 as uuidv4 } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuidv4(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuidv4(),
        brand: 'Honda Civic',
        model: 'Corolla'
    },
    {
        id: uuidv4(),
        brand: 'Porshe',
        model: 'Caiman'
    },
]