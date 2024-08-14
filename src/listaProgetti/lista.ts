interface ListaProps {
    id: number;
    name: string;
    data_creazione: string;
}

export const listaProgetti: ListaProps[] = [
    { id: 1, name: 'new-BMR', data_creazione: '2024/06/01' },
    { id: 2, name: 'BMR-calculator', data_creazione: '2023/09/12' },
    { id: 3, name: 'portfolio', data_creazione: '2024/08/14' }
]