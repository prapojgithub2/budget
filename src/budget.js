var moment = require('moment');

exports.queryBudget = function (startDate, endDate) {
    let sd = moment(startDate, "DD/MM/YYYY");
    let ed = moment(endDate, "DD/MM/YYYY");
    let totalAmount = 0;
    const startKey = `0${sd.month() + 1}/${sd.year()}`
    const endKey = `0${ed.month() + 1}/${ed.year()}`
    const numbersOfMonths = sd.month() - ed.month();
    if(numbersOfMonths === 0) {
        const daysInMonth = sd.daysInMonth();
        let amount = 0;
        for (let i = 0; i < budgetList.length; i++) {
            const budget = budgetList[i];
            if (startKey === budget.month) {
                amount = budget.amount;
                let duration = (ed.dayOfYear() - sd.dayOfYear())+1
                
                totalAmount = amount/daysInMonth*duration;
            }
        }
    } else if( numbersOfMonths > 0) {
        for (let i = 0; i < budgetList.length; i++) {
            const budget = budgetList[i];
            if (startKey === budget.month || endKey === budget.month) {
                amount = budget.amount;
                let duration = (ed.dayOfYear() - sd.dayOfYear())+1
                
                totalAmount += amount/daysInMonth*duration;
            }
        }
    } else {
        // error
    }

   
    // console.log(sd.daysInMonth());
    return totalAmount;
}

function getAmountByMonth(month){
    
}

var budgetList = [{
    month: "06/2018",
    amount: 3000
},{
    month: "07/2018",
    amount: 2000
}];