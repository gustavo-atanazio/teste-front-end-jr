import ICategory from 'types/ICategory';

const categories: ICategory[] = [
    {
        name: 'Tecnologia',
        icon: '/img/dispositivos.svg',
        alt: 'Ícones de dispositivos',
        active: true
    },
    {
        name: 'Supermercado',
        icon: '/img/supermercado.svg',
        alt: 'Ícone de supermercado',
        active: false
    },
    {
        name: 'Bebidas',
        icon: '/img/garrafa.svg',
        alt: 'Ícone de garrafa',
        active: false
    },
    {
        name: 'Ferramentas',
        icon: '/img/ferramentas.svg',
        alt: 'ícones de ferramentas',
        active: false
    },
    {
        name: 'Saúde',
        icon: '/img/cuidados-de-saude.svg',
        alt: 'Ícone de coração',
        active: false
    },
    {
        name: 'Esportes e Fitness',
        icon: '/img/esteira.svg',
        alt: 'ícone de esteira',
        active: false
    },
    {
        name: 'Moda',
        icon: '/img/moda.svg',
        alt: 'Ícone de vestimentas',
        active: false
    }
];

export default categories;