
// import { Car } from '../../cars/interfaces/car.interfaces';
import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

export const BRAND_SEED: Brand[] = [
    {
        id: uuidv4(),
        name: 'Volvo',
        createdAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'Honda',
        createdAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'Jeep',
        createdAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'Chevrolet',
        createdAt: new Date().getTime()
    },
]