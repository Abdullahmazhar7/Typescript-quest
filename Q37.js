function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "i Love Typescript"; }
    console.log("create a ".concat(size, "-size shirt with the message: \"").concat(message, "\""));
}
make_shirt();
