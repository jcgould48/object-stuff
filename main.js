function getFirstName(person) {
  return person.firstName; 
}

function getLastName(person) {
  return person.lastName
}

function getFullName(person) {
  return getFirstName(person)+" "+getLastName(person);
}

function setFirstName(person, name) {
  
  return person.firstName = name;
}

function setAge(person, age) {
  return person.age = age;
}

function giveBirthday(person) {
  if(person.age === NaN){
    let age = 1;
  person.push(age);
  return person.age;
  }
  else{return person.age = person.age + 1;
  }
}

function marry(person1, person2) {
  person1.married=true , person2.married = true,
  person1.spouseName= person2, person2.spouseName=spouse1; 
}

function divorce(person1, person2) {
  
  
  return person1.married=true , person2.married = true;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
} 