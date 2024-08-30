const accountID = 8163
let accountEmail = "haresh@google.com"
var accountPassword = "12345"
accountCity = "Surat"
let accountState;

// accountID = 9; // Not allowed due to defined as const variable.

accountEmail = "hv@hv.com"
accountPassword = "123456789"
accountCity = "Ahmedabad"

console.log(accountID);

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])

// Prefer not to use var because of issue in block scope and functional scope.
// Without define var or let, you can store variable in memeory. It not recommended.
// If you declare variable with let but not provide value to it, then in output, it displayed as undefined.

