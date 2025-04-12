
import Prisma from "../prismaClient";
import { fetchGroupExpense } from "./fetchExpenseService";


export const totalBill = async(groupId: number, userId: number)=>{


    const userSplits = await Prisma.split.findMany({where: {userId}});
  
    const splitPercentages = userSplits.map(e=>{return e.percentage});
  
    const expenses: number [] = await fetchGroupExpense(groupId) || []; 
    console.log(expenses)

    if(splitPercentages.length!==expenses.length){
        throw new Error("Index error - please add equal amounts of expenses and splits");
    }
   
    let finalSplit = 0;
    for(let i=0; i<expenses.length; i++){
        finalSplit += expenses[i]*(splitPercentages[i]/100);
    }
 
    return finalSplit;
     
}