// get html elements
rockButton = document.getElementById("rock");
scissorsButton = document.getElementById("scissors"); 
paperButton = document.getElementById("paper"); 
winner = document.getElementById("winner");
points = document.getElementById("points");
totalWinner = document.querySelector("h2");

// add event listeners - different arguments passed depending on button clicked
rockButton.addEventListener("click", function() { rockPaperScissors("sten"); });
scissorsButton.addEventListener("click", function() { rockPaperScissors("sax"); });
paperButton.addEventListener("click", function() { rockPaperScissors("påse"); });

// point counters
let userPoints = 0;
let compPoints = 0;

function rockPaperScissors(userChoice) {
    
    // function will return if there is a winner
    if (userPoints === 5 || compPoints === 5) {
        return;
    }

    // computer's "choice"
    const compOptions = ["sten","sax","påse"];
    const compNumber = Math.floor(Math.random() * 3); // 0 or 1 or 2
    const compChoice = compOptions[compNumber];

    console.log("userChoice:", userChoice); 
    console.log("compChoice:", compChoice);

    if (userChoice === compChoice) {
        winner.innerHTML = "Du valde: <strong>" + userChoice + "</strong><br>Datorn valde: <strong>" + compChoice + "</strong><br>Oavgjort.";  
    } else if (userChoice === "sten" && compChoice === "sax") {
        winner.innerHTML = "Du valde: <strong>" + userChoice + "</strong><br>Datorn valde: <strong>" + compChoice + "</strong><br>Du vinner!";
        userPoints += 1;
    } else if (userChoice === "sten" && compChoice === "påse") {
        winner.innerHTML = "Du valde: <strong>" + userChoice + "</strong><br>Datorn valde: <strong>" + compChoice + "</strong><br>Datorn vinner.";
        compPoints += 1;
    } else if (userChoice === "sax" && compChoice === "sten") {
        winner.innerHTML = "Du valde: <strong>" + userChoice + "</strong><br>Datorn valde: <strong>" + compChoice + "</strong><br>Datorn vinner.";
        compPoints += 1;
    } else if (userChoice === "sax" && compChoice === "påse") {
        winner.innerHTML = "Du valde: <strong>" + userChoice + "</strong><br>Datorn valde: <strong>" + compChoice + "</strong><br>Du vinner!";
        userPoints += 1;
    } else if (userChoice === "påse" && compChoice === "sten") {
        winner.innerHTML = "Du valde: <strong>" + userChoice + "</strong><br>Datorn valde: <strong>" + compChoice + "</strong><br>Du vinner!";
        userPoints += 1;
    } else if (userChoice === "påse" && compChoice === "sax") {
        winner.innerHTML = "Du valde: <strong>" + userChoice + "</strong><br>Datorn valde: <strong>" + compChoice + "</strong><br>Datorn vinner.";
        compPoints += 1;
    }
    points.innerHTML = "Du har <strong>" + userPoints + "</strong> poäng. Datorn har <strong>" + compPoints + "</strong> poäng."

    if (userPoints === 5) {
        totalWinner.textContent = "Tävlingen är avgjord - du vann!"
    } else if (compPoints === 5) {
        totalWinner.textContent = "Tävlingen är avgjord - datorn vann."
    }
}