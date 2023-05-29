// Data 
const users = [ 
    {
        login: 'knuth',
        firstName: 'Donald',
        lastName: 'Knuth',
        likes: ['C', 'Unix'],
    },
    {
        login: 'norvig',
        firstName: 'Peter',
        lastName: 'Norvig',
        likes: ['AI', 'Search', 'NASA', 'Mars'],
    },
    {
        login: 'mfowler',
        firstName: 'Martin',
        lastName: 'Fowler',
        likes: ['Design Patterns', 'Refactoring'],
    },
    {
        login: 'kent',
        firstName: 'Kent',
        lastName: 'Beck',
        likes: ['TDD', 'wikis', 'Design Patterns'],
    },
];
    
    // lookup() 
    export const lookup = (login: string, property: string): any => {
        let position = -1;
        let prop = false;
        
        for (let i = 0; i < users.length; i++) {
            if (login === users[i].login) {
                position = i;
                if (property in users[i]) {
                    prop = true;
                }
                break;
            }
        }
        if (position === -1) {
            throw new Error("Could not find user");
        }
        if (prop === false) {
            throw new Error("Could not find property");
        }
        return users[position][property];
    };


