const birthYear = prompt('What is your birth year?');
const city = prompt('In which city do you live?');
const favoriteSport = prompt('What is your favorite sport?').toLowerCase();

let message = "";

const currentYear = new Date().getFullYear();
const age = birthYear ? currentYear - Number(birthYear) : null;

const cityToCountry = {
    "kyiv": "Ukraine",
    "washington": "USA",
    "london": "UK"
};

const country = cityToCountry[city.toLowerCase()] || "";
const cityInfo = city ? (country ? `You live in the capital of ${country}.\n` : `You live in the city of ${city}.\n`) : 'Too bad you did not want to enter your city.\n';
const sportInfo = favoriteSport ? `Your favorite sport is ${favoriteSport}.\n` : 'Too bad you did not want to enter your type of sport.\n';

message += `Your information:\n ${age ? `Your age is ${age}.\n` : 'Too bad you did not want to enter your birth year.\n'} ${cityInfo}${sportInfo}`;

const champions = {
    "football": "Lionel Messi",
    "basketball": "LeBron James",
    "tennis": "Serena Williams"
};

if (favoriteSport.toLowerCase() in champions) {
    const championName = champions[favoriteSport.toLowerCase()];
    message += `Cool! Do you want to become ${championName}?`;
}

alert(message);

