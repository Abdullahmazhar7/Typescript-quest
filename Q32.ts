
const currentUsers: string[] = ["Abdullah","Ali","Taha","Asad","Admin"];

const newUsers: string[] = ["Asim","anas","hamza","TAHA","javed"];

newUsers.forEach(newUser => {
    const isUsernameTaken = currentUsers.some(currentUser =>
        currentUser.toLowerCase() === newUser.toLowerCase()
    );

    if (isUsernameTaken) {
        console.log("Sorry username is already taken. Please enter a new username");
    } else {
        console.log("UserName is available. You can use this username.");
    }
});

