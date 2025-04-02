//Destructuring 

const nums = [10, 20, 30];
//Option 1 - regular
// const num1 = nums[0];
// const num2 = nums[1];
// const num3 = nums[2];

//Option 2 - Destructuring
const [num1, num2, num3] = nums;

const obj = {
    name: 'Andrey',
    age: 31,
    isMarried: false
}

//Option 1 - regular
// const name = obj.name;
// const age = obj.age;

//Option 2 - Destructuring
const { name, age: a } = obj;



//Spread operator

const nums2 = [...nums];
const obj2 = { ...obj };

// Computed property name


//Dot notation
const name1 = obj.name
//Brackets notation
const name2 = obj["name"];

//Optional chaining

const Account = {
    fullName: "Andrey Ivanov",
    age: 31,
    address: {
        city: "Gevataim",
    }
}

// const streetSynonim = Account.address.street.streetSinonim; // return ERROR
const streetSynonim1 = Account?.address?.street?.streetSinonim; // without error

// console.log(streetSynonim1);
// console.log(Account["fullName"]);

