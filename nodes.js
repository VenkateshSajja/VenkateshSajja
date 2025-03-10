class PhoneBook {
    constructor() {
        this.contacts = {};
    }

    addContact(fullName, phoneNumber) {
        this.contacts[fullName] = phoneNumber;
    }

    displayContacts() {
        console.log("PhoneBook Contacts:");
        for (let name in this.contacts) {
            console.log(`${name}: ${this.contacts[name]}`);
        }
    }
}
const myPhoneBook = new PhoneBook();
myPhoneBook.addContact("ContactJan 2025", "123-456-7890");
myPhoneBook.addContact("ContactFeb 2025", "987-654-3210");
myPhoneBook.displayContacts();
