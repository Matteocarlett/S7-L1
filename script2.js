class Pet {
    constructor(petName, petOwner, species, breed) {
        this.petName = petName;
        this.petOwner = petOwner;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.petOwner === otherPet.petOwner;
    }
}

const petList = [];

function addPet() {
    const petName = document.getElementById('petName').value;
    const petOwner = document.getElementById('petOwner').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, petOwner, species, breed);
    petList.push(newPet);


    console.log(petList)
    displayPetList();
    clearForm();
}

function displayPetList() {
    const petListElement = document.getElementById('petList');
    petListElement.innerHTML = '';

    petList.forEach(pet => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.petOwner}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        petListElement.appendChild(listItem);
    });
}

function clearForm() {
    document.getElementById('petName').value = '';
    document.getElementById('petOwner').value = '';
    document.getElementById('species').value = '';
    document.getElementById('breed').value = '';
}
