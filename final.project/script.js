let totalExpenses = {
    General: 0,
    Food: 0,
    Entertainment: 0,
    Shopping: 0,
    Groceries: 0,
    Travel: 0,
    Clothes: 0,
    Gas: 0
};

function addExpense() {
    const expenseInput = parseFloat(document.getElementById("expenseInput").value);
    const descriptionInput = document.getElementById("descriptionInput").value;
    const categorySelect = document.getElementById("categorySelect").value;
    console.log(categorySelect)

    if (!isNaN(expenseInput) && descriptionInput) {
        totalExpenses[categorySelect] += expenseInput;
        document.getElementById("totalExpenses").innerHTML = "";
        Object.keys(totalExpenses).forEach(category => {
            document.getElementById("totalExpenses").innerHTML += `<div>Total ${category} Expenses: $${totalExpenses[category].toFixed(2)}</div>`;
        });

        const expenseLog = document.getElementById("expenseLog");
        const expenseItem = document.createElement("div");
        expenseItem.innerHTML = `<strong>Expense:</strong> ${expenseInput.toFixed(2)}, <strong>Description:</strong> ${descriptionInput}, <strong>Category:</strong> ${categorySelect}`;
        expenseLog.appendChild(expenseItem);

        document.getElementById("expenseInput").value = "";
        document.getElementById("descriptionInput").value = "";
        // document.getElementById("").value = "":
    } else {
        alert("Please enter a valid number for expense and a description.");
    }
}


// let totalExpense = 0;

// function addExpense() {
//     const expenseInput = document.getElementById("expenseInput").value;
//     const descriptionInput = document.getElementById("descriptionInput").value;

//     if (expenseInput && descriptionInput) {
//         totalExpense += parseFloat(expenseInput);
//         document.getElementById("totalExpense").innerText = "Total Expenses: $" + totalExpense.toFixed(2);

//         const expenseLog = document.getElementById("expenseLog");
//         const expenseItem = document.createElement("div");
//         expenseItem.innerHTML = `<strong>Expense:</strong> ${expenseInput}, <strong>Description:</strong> ${descriptionInput}`;
//         expenseLog.appendChild(expenseItem);

//         document.getElementById("expenseInput").value = "";
//         document.getElementById("descriptionInput").value = "";
//     } else {
//         alert("Please enter both expense and description.");
//     }
// }