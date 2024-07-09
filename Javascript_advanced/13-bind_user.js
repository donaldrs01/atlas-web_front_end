const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Johns",
    location: "Netherlands",
    occupation: "Engineer"
};

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
    // Use of 'this' makes function work with any object that has these properties when bound
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);
// Binds logWelcomeUser function to user object

bindLogWelcomeUser("Welcome");
bindLogWelcomeUser("Hello");