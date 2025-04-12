import Prisma from "../prismaClient";

export const fetchGroupExpense = async(groupId: number)=>{

    try {
        const groupExpenses = await Prisma.expense.findMany({where: {groupId}});
        const expenseArr = groupExpenses.map(e=>{return e.amount});
        return expenseArr;
        
    } catch (error) {
       console.error("failed to fetch the expenses", error);
    }

};