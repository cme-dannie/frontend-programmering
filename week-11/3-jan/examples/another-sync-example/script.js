console.log("Sync: We start the program here");

function getTicket() {
  const ticket = "Awesome ticket";
  return ticket;
}

function enterCinema() {
  console.log(
    `The people ${peopleInLine.map(
      (person) => person.name
    ).join(" ")} are let into the cinema`
  );
}

const peopleInLine = [
  {
    name: "Person 1",
    ticket: null,
  },
  {
    name: "Person 2",
    ticket: null,
  },
  {
    name: "Person 3",
    ticket: null,
  },
];

for (person of peopleInLine) {
  console.log(`${person.name} is standing in line about to get a ticket`);
  person.ticket = getTicket();
  console.log(`${person.name} got his/her ticket ${person.ticket}`);
}

enterCinema();

console.log("Sync: We end the program after this line");
