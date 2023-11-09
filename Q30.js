var username = ["Abdullah", "Ali", "Taha", "Asad", "Admin"];
username.forEach(function (username) {
    if (username.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
