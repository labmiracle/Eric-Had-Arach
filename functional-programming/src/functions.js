var characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male'
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male'
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female'
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male'
    }
];
//----------------------------MAP----------------------------
// Obtener un arreglo de todos los nombres
var names = characters.map(function (elem) { return elem.name; });
// Obtener un arreglo de todas las alturas
var heights = characters.map(function (elem) { return elem.height; });
// Obtener un arreglo de objetos con las propiedades de nombre y altura
var namesAndHeights = characters.map(function (elem) {
    return {
        name: elem.name,
        height: elem.height
    };
});
//----------------------------REDUCE----------------------------
// Obtener la masa total de todos los personajes
var totalMass = characters.reduce(function (accumulator, elem) {
    return accumulator + Number(elem.mass);
}, 0);
// Obtener la altura total de todos los caracteres
var totalHeights = characters.reduce(function (accumulator, elem) {
    return accumulator + Number(elem.height);
}, 0);
// Obtener el número total de caracteres en todos los nombres de los personajes
var totalCharactersNames = characters.reduce(function (accumulator, elem) {
    return accumulator + elem.name.length;
}, 0);
// Obtener el número total de caracteres por color de ojos (pista: un mapa de color de ojos para contar)
//----------------------------FILTER----------------------------
// Obtener personajes con masa superior a 100
var charactersWithMassGreaterThan100 = characters.filter(function (elem) { return Number(elem.mass) > 100; });
// Obtener personajes con una altura inferior a 200
var charactersWithHeightLessThan200 = characters.filter(function (elem) { return Number(elem.height) < 200; });
// Obtener todos los personajes masculinos
var male = characters.filter(function (elem) { return elem.gender === "male"; });
// Obtener todos los personajes femeninos
var female = characters.filter(function (elem) { return elem.gender === "female"; });
//----------------------------SORT----------------------------
// Ordenar por nombre
var orderByName = characters.sort(function (a, b) {
    var nameA = a.name;
    var nameB = b.name;
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
var orderByMass = characters.sort(function (a, b) {
    var massA = Number(a.mass);
    var massB = Number(b.mass);
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
var orderByHeight = characters.sort(function (a, b) {
    var heightA = Number(a.height);
    var heightB = Number(b.height);
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
var orderByGender = characters.sort(function (a, b) {
    var genderA = a.gender;
    var genderB = b.gender;
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
//----------------------------EVERY----------------------------
// ¿Todos los personajes tienen ojos azules?
var allBlueEyes = characters.every(function (elem) { return elem.eye_color === "blue"; });
// ¿Todos los personajes tienen una masa superior a 40?
var allMassGreaterThan40 = characters.every(function (elem) { return Number(elem.mass) > 40; });
// ¿Todos los caracteres son más bajos que 200?
var allHeightLessThan200 = characters.every(function (elem) { return Number(elem.height) < 200; });
// ¿Todos los personajes son hombres?
var allMen = characters.every(function (elem) { return elem.gender === "male"; });
