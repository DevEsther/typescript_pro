// @ts-nocheck

"use strict";
type User = {
    type: 'user';
    name: string;
    age: number;
  };
  
  type Admin = {
    type: 'admin';
    role: string;
    permissions: string[];
  };
  
  function filterPersons<T extends 'user' | 'admin'>(
    persons: (User | Admin)[],
    personType: T,
    criteria: T extends 'user' ? Omit<Partial<User>, 'type'> : Omit<Partial<Admin>, 'type'>
  ): T extends 'user' ? User[] : Admin[] {
    return persons.filter(person => {
      if (person.type !== personType) return false;
      
     
      return Object.entries(criteria).every(([key, value]) => (person as any)[key] === value);
    }) as any;
  }
  

  const persons: (User | Admin)[] = [
    { type: 'user', name: 'Alice', age: 25 },
    { type: 'user', name: 'Bob', age: 30 },
    { type: 'admin', role: 'superadmin', permissions: ['read', 'write'] },
  ];
  

  const filteredUsers = filterPersons(persons, 'user', { name: 'Alice' });
  console.log(filteredUsers); 

  const filteredAdmins = filterPersons(persons, 'admin', { role: 'superadmin' });
  console.log(filteredAdmins); 
  