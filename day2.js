// prompt-sync for user input
let input = require("prompt-sync")();

// creating arrays
let feedbackComments = [];
let satisfactionRatings = [];

// collecting 5 feedback entries
for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Feedback Entry ${i} ---`);

    // get comment/summary
    let comment = input("Enter feedback comment: ");

    // get rating
    let rating = parseFloat(input("Enter satisfaction rating (1-5): "));

    // basic validation (optional but helpful)
    if (rating < 1 || rating > 5 || isNaN(rating)) {
        console.log("Invalid rating! Please enter a number from 1 to 5.");
        i--; 
        continue;
    }

    // push data into arrays
    feedbackComments.push(comment);
    satisfactionRatings.push(rating);
}

// reporting arrays using console.table()
console.log("\nFeedback Comments:");
console.table(feedbackComments);

console.log("\nSatisfaction Ratings:");
console.table(satisfactionRatings);
