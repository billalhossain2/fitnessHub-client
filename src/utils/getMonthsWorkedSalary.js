const getMonthsWorkedSalary = (joinedDate, monthlySalary)=>{
    const totalMonthsWorked = new Date().getMonth() - new Date(joinedDate).getMonth();
    const totalSalary = totalMonthsWorked * monthlySalary;
    return totalSalary;
}

export default getMonthsWorkedSalary;