var moment = require('moment');

exports.queryBudget = function (startDateStr, endDateStr) {
    
    let startDate = moment(startDateStr, "DD/MM/YYYY");
    let endDate = moment(endDateStr, "DD/MM/YYYY");

    let startPeriod = moment(startDate, "DD/MM/YYYY").startOf('month')
    let endPeriod = moment(endDate, "DD/MM/YYYY").endOf('month')

    let totalAmount = 0
    
    
    budgetList.forEach(budget => {
        let thisMonth = moment(budget.month, "MM/YYYY")
        if (startPeriod <= thisMonth || endPeriod >= thisMonth) {
            let startOfMonth = moment(budget.month, "MM/YYYY").startOf('month')
            let endOfMonth = moment(budget.month, "MM/YYYY").endOf('month')

            let daysInThisMonth = endOfMonth.dayOfYear() - startOfMonth.dayOfYear() + 1

            let actualBeginDate = (startDate > startOfMonth) ? startDate : startOfMonth;
            let actualEndDate = (endDate < endOfMonth) ? endDate : endOfMonth;

            totalAmount += budget.amount * ((actualEndDate.dayOfYear() - actualBeginDate.dayOfYear()) + 1) / daysInThisMonth
        }

    });
    return totalAmount;
}

budgetList = [];

