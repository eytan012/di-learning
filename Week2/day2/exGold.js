let userLanguage = prompt("which language you speak?")
let lowerCase = userLanguage.toLowerCase()

switch (lowerCase) {
    case "english":
        say = "Hello!";
        break;
    case "french":
        say = "Bonjur!";
        break;
    case "hebrew":
        say = "Shalom!";
        break;
    default:
 say = "01110011 01101111 01110010 01110010 01111001";
}