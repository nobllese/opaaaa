const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

const customQuotes = [
  "Are you from Georgia? Because you've got a peachy smile that's sweet as Southern charm.",
  "Is your name Tbilisi? Because you've got a city's worth of beauty in one glance.",
  "Do you have Georgian hospitality? Because you've made me feel right at home.",
  "Is your heart as warm as a Georgian supra? Because I'm drawn to your inviting spirit.",
  "Are you a khachapuri? Because you're a delightful mix of cheesy and irresistible.",
  "Are you a Georgian wine? Because just a taste of you is leaving me intoxicated.",
  "Are you a Georgian dance? Because I can't help but be captivated by your grace.",
  "Do you know what they say about Georgian mountains? They're as stunning as your eyes.",
  "Is your laughter as infectious as a Georgian feast? Because you're making my day brighter.",
  "Are you fluent in Georgian? Because I'm trying to find the right words to express how amazing you are.",
  "Is your beauty as timeless as the architecture in Tbilisi's Old Town? Because I'm in awe.",
  "Are you a Georgian qvevri? Because you've stored away a piece of my heart.",
  "Are you a traditional Georgian song? Because your melody is resonating in my soul.",
  "Do you believe in Georgian legends? Because I think I've found a treasure in you.",
  "Is your kindness as vast as the Black Sea? Because I'm swept away by your generosity.",
  "Is your heart as warm as a Georgian supra? Because I feel like you've welcomed me into your world.",
  "Are you a Georgian spice blend? Because your presence adds flavor to my life.",
  "Is your spirit as strong as Georgian traditions? Because you've left a lasting impression on me.",
  "Are you a Georgian national costume? Because you're a true masterpiece.",
  "Do you have a Georgian sense of humor? Because you're leaving me in stitches.",
  "Are you a Georgian lari? Because I've found something valuable in you.",
  "Are you khinkali? Because you've got me wrapped up in your deliciousness.",
  "Is your name lobio? Because I'm beaning for your attention.",
  "Are you achingali? Because you're leaving a sweet aftertaste in my heart.",
  "Is your warmth as comforting as a bowl of kharcho on a chilly day?",
  "Are you a Georgian feast? Because you've filled my heart and left me craving for more.",
  "Is your smile as delightful as a plate of chakhokhbili made with love?",
  "Are you churchkhela? Because you're the sweetest thing in my life.",
  "Do you have the charm of a Georgian supra? Because I can't get enough of you.",
  "Is your beauty as enchanting as a satsivi's rich flavors?",
  "Are you pkhali? Because you've seasoned my day with joy.",
  "Is your laughter as infectious as the joy of sharing a Georgian meal?",
  "Are you like a Georgian wine? Because you're getting better with every moment.",
  "Is your heart as warm as a bowl of kharcho on a winter's day?",
  "Do you have the zest of adjika? Because you've spiced up my life.",
  "Are you as irresistible as a plate of cheesy khachapuri?",
  "Is your sweetness reminiscent of churchkhela? Because you're leaving me craving more.",
  "Do you believe in love at first bite? Because your presence is a delight to my senses.",
  "Are you as wonderful as a Georgian supra? Because you've brought people together.",
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * customQuotes.length);
  const randomQuote = customQuotes[randomIndex];
  quoteElement.innerHTML = randomQuote;
}

newQuoteButton.addEventListener("click", getQuote);

getQuote();
