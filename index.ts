//INTERFACE
interface Contact {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  tags?: string[];
}

//ARRAY
const Contacts: Contact[] = [
  { id: 1, 
    name: "Johan Larsson",
    email: "johan.larsson@gmail.com",
    phone: "070 070 70 70",
    tags: ["Father"]
  },

  { id: 2, 
    name: "John Larsson",
    email: "john.andersson@gmail.com",
    phone: "070 707 07 70",
    tags: ["Brother"]
  },

  { id: 3, 
    name: "Johanna Larsson",
    email: "johanna.larsson@gmail.com",
    phone: "070 777 70 70",
    tags: ["Mother"]
  }
]

//ADD CONTACT FUNCTION
function addContact(contact: Contact): void {
  Contacts.push(contact);
}

console.log("\n--- Adding new contact ---");
addContact({
  id: 4, 
  name: "Jimmy Larsson",
  email: "jimmy.larsson@gmail.com",
  phone: "070 707 70 70",
  tags: ["Uncle"]
});
console.log("Contact added!\n");

// LIST CONTACTS
function listContacts(): void {
  console.log("--- Contact List ---");
  console.log(Contacts);
  console.log("\n");
}

listContacts();

// SEARCH FOR NAME FUNCTION
function findByName(name: string): Contact[] { 
  return Contacts.filter(c => c.name === name);
}

console.log("--- Searching for contact ---");
const result = findByName("Johan Larsson");
console.log(result, "\n");

// REMOVE FUNCTION
function removeById(id: number): boolean {
  const index = Contacts.findIndex(c => c.id === id);

  if (index === -1) {
    console.log("Invalid Id!\n");
    return false;
  } else {
    Contacts.splice(index, 1);
    console.log("Contact removed!\n");
    return true;
  }
}

console.log("--- Removing contact by ID ---");
if (removeById(1)) {
  console.log("Updated contact list:");
  console.log(Contacts, "\n");
}
