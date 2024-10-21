// 定义账户对象 account1
const account1 = {
    name: 'Alice',         // 姓名
    balance: 1000,          // 余额

    // 更新余额的方法
    updateBalance: function (...transactions) {
        transactions.forEach(amount => {
            this.balance += amount;  // 使用 this 动态绑定账户余额
        });
    },

    // 打印账户信息的方法
    displayInfo: function () {
        console.log(`Account holder: ${this.name}, Balance: $${this.balance}`);
    }
};

// 定义另一个账户对象 account2
const account2 = {
    name: 'Bob',      // 账户持有人姓名
    balance: 500      // 初始余额
};

// 使用 account1 的 updateBalance 方法为 account2 更新余额
account1.updateBalance.apply(account2, [100, -50, 300]);

// 显示 account2 的信息
account1.displayInfo.apply(account2);
// 输出: Account holder: Bob, Balance: $850