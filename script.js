class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        return this.age > otherUser.age;
    }
}

const user1 = new User("Matteo", "Carletti", 25, "Cecina");
const user2 = new User("Roberto", "Bianchi", 38, "Rimini");
/*
const user3 = new User("Elia", "Carletti", 27, "Cecina");
const user4 = new User("Gabriele", "Rossi", 50, "Milano")          //fatti per prova
const user5 = new User("Franco", "Melussi", 12, "Roma");
const user6 = new User("Gennaro", "Rubino", 67, "Napoli")*/

const olderUser = user1.compareAge(user2);
console.log('User1 è più grande di User2:', olderUser); 