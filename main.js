// Завдання 1

const select = document.querySelector("#select");

const input1 = document.querySelector("#input1");

const input2 = document.querySelector("#input2");

const input3 = document.querySelector("#input3");

let id = 0;

const account = {
  balance: 0,
  transactions: [],

    createTransaction(amount, type) {
        id += 1;
        return {amount: amount, type: type, id: id}
    },
    
    deposit(amount) {
        this.balance += amount;
        let transaction = this.createTransaction(amount, "deposit");
        this.transactions.push({ ...transaction })
        
        return console.log(`Транзакція пройшла успішно. До рахунку додано ${amount}. Рахунок становить: ${this.balance}`);
  },

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            return console.log("На рахунку не достатньо грошей");;
        }

        let transaction = this.createTransaction(amount, "withdraw");
        this.transactions.push({ ...transaction })
        
        return console.log(`Транзакція пройшла успішно. З рахунку знято ${amount}. Рахунок становить: ${this.balance}`);
  },

    getBalance() {
        return console.log(`Ваш баланс становить ${this.balance}`);
  },

    getTransactionDetails(id) {
        for (const transactionToFind of this.transactions) {
                if (id === transactionToFind["id"]) {
                return console.log(`Транзакція по айді ${id}:`,transactionToFind);
            }
        }
        
        return "Транзакцію не знайдено";
    },

    getTransactionTotal(type) {
        let transactionByType = [];
        
        for (const transactionToFind of this.transactions) {
            if (transactionToFind["type"] === type) {
                transactionByType.push(transactionToFind);
            }
        }

        return console.log(`Усі транзакції за типом ${select.value}:`, transactionByType);
  },
};


const {transactions, deposit, withdraw, getBalance, getTransactionDetails, getTransactionTotal, createTransaction} = account

account.getBalance();


// Завдання 2

const user = {
    name: "joe",
    hobby: "drawing",
    premium: true
}

user.mood = "happy";

user.hobby = "skydiving";

user["premium"] = false

const { name: userName, hobby: userHobby, premium: isUserPremium, mood: userMood } = user;

// =============================================

const employeesTasks = {
    joe: 2,
    maksim: 10,
    billy: -4
}

const { joe: joeTasks, maksim: maksimTasks, billy: billyTasks } = employeesTasks;

// =============================================

const employeesSalary = {
    joe: 2500,
    maksim: 100,
    billy: 600
}

const { joe: joeSalary, maksim: maksimSalary, billy: billySalary } = employeesSalary;

// =============================================

const objects = [
    { name: "bob", a: 4 },
    { price: 4000, name: "oleg", login: "8148138" },
    { b: 8, data: null }
]

const [obj1, obj2, obj3] = objects;

const { name: obj1Name, a } = obj1;

const { price: obj2Price, name: obj2Name, login: obj2Login } = obj2;

const { b, data } = obj3;

// =============================================

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const [product1, product2, product3, product4] = products;

const { name: product1Name, price: product1Price, quantity: product1Quantity } = product1;

const { name: product2Name, price: product2Price, quantity: product2Quantity } = product2;

const { name: product3Name, price: product3Price, quantity: product3Quantity } = product3;

