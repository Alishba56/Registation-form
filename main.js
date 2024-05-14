import inquirer from "inquirer";
let condition = true;
while (condition) {
    let registationfroms = await inquirer.prompt([
        {
            name: "Name",
            type: "input",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "FatherName",
            message: "What is your father name?",
        },
        {
            type: "input",
            name: "MotherName",
            message: "What is your mother name?",
        },
        {
            type: "list",
            name: "Qulification",
            message: "What is your qulification?",
            choices: ["Matric", "Inter", "Bachelor", "Master", "PhD"],
        },
        {
            type: "input",
            name: "Age",
            message: "What is your age?",
        },
        {
            type: "list",
            name: "Gender",
            message: "What is your gender?",
            choices: ["Male", "Female", "Custom"],
        },
        {
            type: "input",
            name: "PhoneNumber",
            message: "What is your phone number?",
        },
        {
            type: "input",
            name: "EmailAddress",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "ResidenceAddress",
            message: "What is your residence address?",
        },
        {
            type: "input",
            name: "Region",
            message: "What is your region?",
        },
        {
            type: "input",
            name: "Nationality",
            message: "What is your nationlity?",
        },
        {
            name: "condition",
            type: "Confirm",
            message: "Do you want to add another student?",
            default: false,
        },
    ]);
    condition = registationfroms.condition;
    console.log(registationfroms);
}
