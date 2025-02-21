"use strict";
function filterPersons(persons, personType, criteria) {
    return persons.filter(person => {
        if (person.type !== personType)
            return false;
        return Object(criteria).every(([key, value]) => person[key] === value);
    });
}

const persons = [
    { type: 'user', name: 'Alice', age: 25 },
    { type: 'user', name: 'Bob', age: 30 },
    { type: 'admin', role: 'superadmin', permissions: ['read', 'write'] },
];

const filteredUsers = filterPersons(persons, 'user', { name: 'Alice' });
console.log(filteredUsers); 

const filteredAdmins = filterPersons(persons, 'admin', { role: 'superadmin' });
console.log(filteredAdmins); 
