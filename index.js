let nameOfPerson = document.querySelector(".person");
let quote = document.querySelector(".quote");
let btn = document.querySelector("button");

let quotes = [
  {
    text: `"if you do what you did yesterday today, you today will look just like your yesterday"`,
    person: "JAHBLES",
  },
  {
    text: `"Maturity is when you realise that you never fell in love,it was all just games of hormones and attractions"`,
    person: "DUDE",
  },
  {
    text: "Only Women,Children and Dog are loved unconditionally,a Man is loved under a condition that he provides",
    person: "Alaye",
  },
];

btn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  quote.innerText = quotes[randomNumber].text;
  nameOfPerson.innerText = quotes[randomNumber].person;
});
