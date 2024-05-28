import inquirer from "inquirer";
let isrunning = true;
while (isrunning) {
    let loop = await inquirer.prompt({
        name: "While",
        type: "list",
        message: "What would you like to do",
        choices: ["Enter sentence", "Exit"],
    });
    if (loop.While === "Enter sentence") {
        let user_input = await inquirer.prompt({
            name: "Sentence",
            type: "input",
            message: "Type in the sentence you wish to have the word count for",
        });
        let wordcount = user_input.Sentence.trim().split(" ");
        console.log(`Total words in  your sentence are ${wordcount.length}`);
    }
    if (loop.While === "Exit") {
        isrunning = false;
    }
}
