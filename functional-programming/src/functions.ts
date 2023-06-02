const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    }
];

//----------------------------MAP----------------------------

// Obtener un arreglo de todos los nombres
const names = characters.map(elem => elem.name);

// Obtener un arreglo de todas las alturas
const heights = characters.map(elem => elem.height);

// Obtener un arreglo de objetos con las propiedades de nombre y altura
const namesAndHeights = characters.map(elem => {
    return {
        name: elem.name, 
        height: elem.height
    }
});


//----------------------------REDUCE----------------------------

// Obtener la masa total de todos los personajes
const totalMass = characters.reduce((accumulator, elem) => {
    return accumulator + Number(elem.mass);
}, 0);

// Obtener la altura total de todos los caracteres
const totalHeights = characters.reduce((accumulator, elem) => {
    return accumulator + Number(elem.height);
}, 0);

// Obtener el número total de caracteres en todos los nombres de los personajes
const totalCharactersNames = characters.reduce((accumulator, elem) => {
    return accumulator + elem.name.length;
}, 0);

// Obtener el número total de caracteres por color de ojos (pista: un mapa de color de ojos para contar)


//----------------------------FILTER----------------------------

// Obtener personajes con masa superior a 100
const charactersWithMassGreaterThan100 = characters.filter(elem => Number(elem.mass) > 100);

// Obtener personajes con una altura inferior a 200
const charactersWithHeightLessThan200 = characters.filter(elem => Number(elem.height) < 200);

// Obtener todos los personajes masculinos
const male = characters.filter(elem => elem.gender === "male");

// Obtener todos los personajes femeninos
const female = characters.filter(elem => elem.gender === "female");


//----------------------------SORT----------------------------

// Ordenar por nombre
const orderByName = characters.sort((a, b) => {
    let nameA = a.name;
    let nameB = b.name;
    if (nameA > nameB) {
        return 1;
    }
    else if (nameA < nameB) {
        return -1;
    }
    else {
        return 0;
    }
});

// Ordenar por masa
const orderByMass = characters.sort((a, b) => {
    let massA = Number(a.mass);
    let massB = Number(b.mass);
    if (massA > massB) {
        return 1;
    }
    else if (massA < massB) {
        return -1;
    }
    else {
        return 0;
    }
});

// Ordenar por altura
const orderByHeight = characters.sort((a, b) => {
    let heightA = Number(a.height);
    let heightB = Number(b.height);
    if (heightA > heightB) {
        return 1;
    }
    else if (heightA < heightB) {
        return -1;
    }
    else {
        return 0;
    }
});

// Ordenar por género
const orderByGender = characters.sort((a, b) => {
    let genderA = a.gender;
    let genderB = b.gender;
    if (genderA > genderB) {
        return 1;
    }
    else if (genderA < genderB) {
        return -1;
    }
    else {
        return 0;
    }
});



