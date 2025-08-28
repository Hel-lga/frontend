function Account(iban, owner, balance) {
    this.iban = iban;
    this.owner = owner;
    this.balance;
    this.deposit = function (amount) {
        console.log("Пополнение счёта");
        balance = balance + amount;
    };
    this.withdraw = function (amount) {
        console.log("Cнятие денег");
        if (amount <= balance) {
            balance = balance - amount;
            console.log(`Ваш счет поплнен: ${balance}`);
        } else {
            console.log("Недостаточно денег на счете, попробуйте в следующий раз)")
        }
    };
    this.getBalance = function () {
        console.log(`Ваш баланс: ${balance}`)
    }
}

const account1 = new Account('DE45 456123', 'Jack', 12879);
const account2 = new Account('DE78 321789', 'Mark', 658142);
const account3 = new Account('DE69 524837', 'Klim', 456);
const account4 = new Account('DE62 525784', 'Mary', 6821);
const account5 = new Account('DE96 585452', 'Hilde', 45601);
const account6 = new Account('DE25 201360', 'Ann', 95);
const account7 = new Account('DE65 048753', 'Rick', 7512);
//console.log(account1

const accounts = [account1, account2, account3, account4, account5, account6, account7];
console.log(accounts);

