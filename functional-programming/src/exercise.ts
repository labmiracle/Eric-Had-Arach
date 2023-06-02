const users = [
    { 
        firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" 
    },
    { 
        firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident"
    },
    { 
        firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor"
    },
    { 
        firstName: "Michael", lastName: "Herman", role: "Lead Instructor"
    },
    { 
        firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident"
    },
    { 
        firstName: "Wes", lastName: "Reid", role: "Instructor"
    },
    { 
        firstName: "Zach", lastName: "Klabunde", role: "Instructor"
    },
];

// Mapealo a un arreglo de strings: firstName-lastName: role
const arrayOfStrings = users.map(elem => `${elem.firstName}-${elem.lastName}: ${elem.role}`);

// Filtra aquellos usuarios con role de Full Stack Resident
const fullStackResidentUsers = users.filter(elem => elem.role === "Full Stack Resident");

// Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo con los objetos usuarios que tienen dicho role
const roles = users.reduce(((obj, elem: { firstName: string, lastName: string, role: string }) => {
    if (obj.hasOwnProperty(elem.role)) {
        obj[elem.role].push(elem);
    }
    else {
        obj[elem.role] = [elem];
    }
    return obj;
}), {});

// Genera una función de búsqueda de un usuario por firstName con find
function findUser(users: { firstName: string, lastName: string, role: string }[], firstName: string) {
    return users.find(elem => elem.firstName === firstName);
}