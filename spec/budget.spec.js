// var moment = 
var Budget = require('../src/budget');
// import Budget from '../src/budget';

describe("Query budget", () => {
    it("should return 0 when no budget in any month", () => {
        let existingBudgets = [];
        budgetList=  existingBudgets
        let budget = Budget.queryBudget("01/01/2018", "02/01/2018");
        expect(budget).toEqual(0);
    });

    it("should return 100 baht when there query budget between 10/06/2018 to 10/06/2018 and there is 3000 baht budget in June 2018", () => {
        let existingBudgets = [{
            "month" : "06/2018",
            "amount": 3000
        }];
        budgetList=  existingBudgets
        let budget = Budget.queryBudget("10/06/2018", "10/06/2018");
        
        expect(budget).toEqual(100);
    });

    it("should return 200 baht when there query budget between 10/06/2018 to 11/06/2018 and there is 3000 baht budget in June 2018", () => {
        let existingBudgets = [{
            "month" : "06/2018",
            "amount": 3000
        }];
        budgetList=  existingBudgets
        let budget = Budget.queryBudget("10/06/2018", "11/06/2018");
        
        expect(budget).toEqual(200);
    });

    it("should return 5000 baht when there query budget between 01/06/2018 to 31/07/2018 and there is 3000 baht budget in June and 2000 in July", () => {
        let existingBudgets = [{
            "month" : "06/2018",
            "amount": 3000
        },
        {
            "month" : "07/2018",
            "amount": 2000
        }];
        budgetList=  existingBudgets

        let budget = Budget.queryBudget("01/06/2018", "31/07/2018");
        
        expect(budget).toEqual(5000);
    });
});