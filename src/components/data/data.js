const coffee = [
    {
        id: '1',
        name: 'Yirgacheffe',
        country: 'Ethiopia',
        price: '16.99$',
        picture: 'coffee-1.png',
        description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '2',
        name: 'STARBUCKS blonde espresso',
        country: 'Kenya',
        price: '6.99$',
        picture: 'coffee-2.jpg',
        description: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '3',
        name: 'STARBUCKS roast espresso',
        country: 'Columbia',
        price: '12.99$',
        picture: 'coffee-3.jpg',
        description: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '4',
        name: 'LAVAZZA qualita ORO',
        country: 'Brazil',
        price: '13.99$',
        picture: 'coffee-4.jpg',
        description: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '5',
        name: 'TAYLORS hot lava java',
        country: 'Brazil',
        price: '11.99$',
        picture: 'coffee-5.webp',
        description: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '6',
        name: 'Lilla e rose',
        country: 'Brazil',
        price: '9.99$',
        picture: 'coffee-6.jpg',
        description: '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]

export function getData() {
    return coffee ? coffee : false;
}

export function getDataById(id) {
    const data = coffee.find((item) => item.id === String(id));
    return data ? data : false;
}