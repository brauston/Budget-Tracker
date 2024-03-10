document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseInput = document.getElementById('expense');
    const descriptionInput = document.getElementById('description');
    const categoryInput = document.getElementById('category');
    const expenseLog = document.getElementById('expense-log');
    const totalsDiv = document.getElementById('totals');
    const pieChartCanvas = document.getElementById('pie-chart');
    const ctx = pieChartCanvas.getContext('2d');

    let expenses = [];
    let categoryTotals = {};
    const categoryColors = {
        General: '#ff7f0e',
        'Eating Out': '#1f77b4',
        Entertainment: '#2ca02c',
        Shopping: '#d62728',
        Groceries: '#9467bd',
        Travel: '#8c564b',
        Clothes: '#e377c2',
        Gas: '#bcbd22'
    };

    expenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const expense = expenseInput.value;
        const description = descriptionInput.value;
        const category = categoryInput.value;
        const amount = parseFloat(expense);

        if (!isNaN(amount)) {
            expenses.push({ expense, description, category, amount });

            if (category in categoryTotals) {
                categoryTotals[category] += amount;
            } else {
                categoryTotals[category] = amount;
            }

            render();
        }

        expenseInput.value = '';
        descriptionInput.value = '';
    });

    function render() {
        let expenseLogHTML = '<h2>Expense Log</h2><ul>';
        let totalHTML = '<h2>Totals</h2>';

        for (const expense of expenses) {
            expenseLogHTML += `<li>${expense.description} - $${expense.expense} (${expense.category})</li>`;
        }
        expenseLogHTML += '</ul>';

        for (const category in categoryTotals) {
            totalHTML += `<p>${category}: $${categoryTotals[category]}</p>`;
        }

        expenseLog.innerHTML = expenseLogHTML;
        totalsDiv.innerHTML = totalHTML;

        drawPieChart();
    }

    function drawPieChart() {
        ctx.clearRect(0, 0, pieChartCanvas.width, pieChartCanvas.height);

        const totalExpense = Object.values(categoryTotals).reduce((acc, curr) => acc + curr, 0);

        let startAngle = 0;
        for (const category in categoryTotals) {
            const sliceAngle = (categoryTotals[category] / totalExpense) * 2 * Math.PI;

            ctx.fillStyle = categoryColors[category];
            ctx.beginPath();
            ctx.moveTo(pieChartCanvas.width / 2, pieChartCanvas.height / 2);
            ctx.arc(pieChartCanvas.width / 2, pieChartCanvas.height / 2, pieChartCanvas.height / 2, startAngle, startAngle + sliceAngle);
            ctx.closePath();
            ctx.fill();

            startAngle += sliceAngle;
        }
    }
});