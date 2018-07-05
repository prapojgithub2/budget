var moment = require('moment');

exports.queryBudget = function (startDate, endDate) {
    let sd = moment(startDate, "DD/MM/YYYY");
    let ed = moment(endDate, "DD/MM/YYYY");

    let startPeriod = moment(startDate, "DD/MM/YYYY").startOf('month')
    let endPeriod = moment(endDate, "DD/MM/YYYY").endOf('month')


    let totalAmount = 0

    console.log(budgetList);
    for (let i = 0; i < budgetList.length; i++) {
        let budget = budgetList[i]
        let thisMonth = moment(budget.month,"MM/YYYY")
        console.log("budget list "  ,thisMonth)
        if ( startPeriod <= thisMonth || endPeriod >= thisMonth) {
            let sdm = moment(budget.month,"MM/YYYY").startOf('month')
            let edm = moment(budget.month,"MM/YYYY").endOf('month')   
            
            let totalDays = edm.dayOfYear() - sdm.dayOfYear()+1
            
            let begin,end;
            
            if ( sd > sdm ) {
                begin = sd
            } else {
                begin = sdm
            }
            if ( ed < edm ) {
                end = ed
            } else {
                end = edm
            }
            
            totalAmount += budget.amount *((end.dayOfYear() - begin.dayOfYear()) + 1 ) / totalDays
        }

    }
    return totalAmount;
}

function getAmountByMonth(month){
    
}

budgetList = [];