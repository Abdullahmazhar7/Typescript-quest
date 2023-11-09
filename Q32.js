var currentUsers = ["Abdullah", "Ali", "Taha", "Asad", "Admin"];
var newUsers = ["Asim", "anas", "hamza", "TAHA", "javed"];
newUsers.forEach(function (newUser) {
    var isUsernameTaken = currentUsers.some(function (currentUser) {
        return currentUser.toLowerCase() === newUser.toLowerCase();
    });
    if (isUsernameTaken) {
        console.log("Sorry username is already taken. Please enter a new username");
    }
    else {
        console.log("UserName is available. You can use this username.");
    }
});
