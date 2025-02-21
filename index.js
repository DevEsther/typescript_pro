console.log('Hello, TypeScript!');
"use strict";
function filterPersons(persons, personType, criteria) {
    return persons.filter(function (person) {
        if (person.type !== personType)
            return false;
      
        return Object.entries(criteria).every(function (_a) {
            var key = _a[0], value = _a[1];
            return person[key] === value;
        });
    });
}

var persons = [
    { type: 'user', name: 'Alice', age: 25 },
    { type: 'user', name: 'Bob', age: 30 },
    { type: 'admin', role: 'superadmin', permissions: ['read', 'write'] },
];

var filteredUsers = filterPersons(persons, 'user', { name: 'Alice' });
console.log(filteredUsers); 

var filteredAdmins = filterPersons(persons, 'admin', { role: 'superadmin' });
console.log(filteredAdmins);
