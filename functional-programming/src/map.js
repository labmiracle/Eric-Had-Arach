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
console.log(heights);
console.log(namesAndHeights);
