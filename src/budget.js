var moment = require('moment');

exports.queryBudget = function (startDateStr, endDateStr) {
    
    let startDate = moment(startDateStr, "DD/MM/YYYY");
    let endDate = moment(endDateStr, "DD/MM/YYYY");

    let startPeriod = moment(startDate, "DD/MM/YYYY").startOf('month')
    let endPeriod = moment(endDate, "DD/MM/YYYY").endOf('month')

    let totalAmount = 0
    
    
    budgetList.forEach(budget => {
        let thisMonth = moment(budget.month, "MM/YYYY")
        if (startPeriod.isSameOrBefore(thisMonth)|| endPeriod.isSameOrAfter(thisMonth)) {
            let startOfMonth = moment(thisMonth).startOf('month')
            let endOfMonth = moment(thisMonth).endOf('month')

            let daysInThisMonth = startOfMonth.daysInMonth()

            let actualBeginDate = startDate.isAfter(startOfMonth) ? startDate : startOfMonth;
            let actualEndDate = endDate.isBefore(endOfMonth) ? endDate : endOfMonth;
           
            totalAmount += budget.amount * ((actualEndDate.dayOfYear() - actualBeginDate.dayOfYear()) + 1) / daysInThisMonth
        }

    });

 

    return totalAmount > 0 ? totalAmount : 0;
}

budgetList = [];

