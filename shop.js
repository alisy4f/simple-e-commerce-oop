export default class Shop {
    shops = [];
    constructor(name, phone, mail) {
        this.name = name;
        this.phone = phone;
        this.mail = mail;
    }

    displayInfo() {
        console.log(`Shop Name: ${this.name}`);
        console.log(`Shop Phone: ${this.phone}`);
        console.log(`Shop Mail: ${this.mail}`);
    }
}