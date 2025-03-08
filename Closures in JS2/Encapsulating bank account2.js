function createBankAccount(initialamount){
    let balance=initialamount;
    function deposit(amount){
        balance+=amount
        return balance
    }
    function withdraw(amount){
        balance-=amount
        return balance
    }
    function getBalance(){
        return balance
    }
    return {
        deposit:deposit,
        withdraw:withdraw,
        getBalance:getBalance
    }
}
let account=createBankAccount(100)
console.log(account.deposit(50))
console.log(account.withdraw(30));
console.log(account.getBalance())