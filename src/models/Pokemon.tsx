export interface Pokemon {
    id: number;
    name: string;
    types: Type[];
    sprites:{
        other:{
            'official-artwork': {
                front_default: string;
            }
        }
    }
}

interface Type {
    slot: number;
    type: {
        name: string;
    }
}