console.log('Welcome to Address Book');
const input = require('prompt-sync')();
class Contact{
    ContactBook(...parameters){
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNo = parameters[6];
        this.email = parameters[7];
    }
    get firstName(){return this._firstName}
    set firstName(firstName){
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(firstName)){
            this._firstName=firstName
        }
        else throw "Invalid value entered"
    }
    get lastName(){return this._lastName}
    set lastName(lastName){
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(lastName)){
            this._lastName=lastName
        }
        else throw "Invalid Value entered"
    }
    get address(){ return this._address}
    set address(address){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(address)) {
            this._address = address
        }
        else throw "Incorrect Address"
    }
    get city(){ return this._city}
    set city(city){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(city)) {
            this._city = city
        }
        else throw "Incorrect City"
    }
    get state(){ return this._state}
    set state(state){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(state))
            this._state = state
        else throw "Incorrect State"
    }
    get zip(){ return this._zip}
    set zip(zip){
        let pinRegex = RegExp("^[0-9]{3}\s{0,1}[0-9]{3}$")
        if(pinRegex.test(zip)){
            this._zip = zip
        }
        else throw "Incorrect Zip"
    }
    get phoneNo(){ return this._phoneNo}
    set phoneNo(phoneNo){
        let regex = RegExp('[0-9]{2}\\s[0-9]{10}')
        if(regex.test(phoneNo)) {
            this._phoneNo = phoneNo
        }
        else throw "Incorrect Phone Number"
    }
    get email(){ return this._email}
    set email(email){
        let regex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
        if(regex.test(email)) {
            this._email = email
        }
        else throw "Incorrect Email"
    }
    toString(){
        return "\n\nFirstName: " + this.firstName + "\nLastName: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city +
                "\nState: " + this.state + "\nZip: " + this.zip + "\nPhoneNO: " + this.phoneNo + "\nEmail: " + this.email;
    }
}
const readline = require('readline-sync');
let flag = true;
var addressBookList = []

while(flag == true){
    const option = Number(readline.question("Chosse Your option: \n1.For add new Contact. \n2.Edit Contact Using Name. \nAny Number To Exit" ))
    switch(option){
        case 1:
            addEntries(addressBookList);
            break;
        case 2:
            editEntries(addressBookList);
            break;
        default:
            flag = false;
    }
}
function addEntries(addressBookList){ 
    try {
        let readline = require('readline-sync');
        const sizeOfBookStr = readline.question('Enter Size Of Book: ');
        const sizeOfBook = Number(sizeOfBookStr)
        let i = 0;
        while(i<sizeOfBook){
            firstName = readline.question("Enter First Name: ");
            lastName = readline.question("Enter Last Name: ");
            address = readline.question("Enter Address: ");
            city = readline.question("Enter City: ");
            state = readline.question("Enter State: ");
            zip = readline.question("Enter Zip: ");
            phoneNum = readline.question("Enter Phone Number: ");
            email =readline.question("Enter Email Address: ");
            let addressBook = new AddressBook(firstName,lastName,address,city,state,zip,phoneNum,email);
            addressBookList.push(addressBook.toString());
            i++;
        }
        console.log(addressBookList.toString());
    } 
    catch (e) {
        console.error(e)
    }
}

function editEntries(addressBookList){
    
    const name = readline.question("Enter Name To Search: ")
    addressBookList.forEach(element => {
        try {
            if(element.firstName===name){
                element.firstName = readline.question("Edit First Name: ")
            }
            else{
                console.log("This name is not exist in the list");
            }
        } catch (e) {
            console.error(e)
        }
    
    });
    console.log(addressBookList.toString());
}
function deleteEntries(addressBookList){
    const name = readline.question("Enter Name you want To Delete: ")
    addressBookList.forEach(element =>{
        if (element.firstName===name){
            addressBookList.pop(element);
            console.log("Data SuccessFully Deleted");
        }
    });
    console.log(addressBookList.toString());
}