const getTotalBalance = (payments, totalTrainerPaidAmount) => {
    const totalBalance = payments?.reduce((total, curr)=>total+curr.price, 0);
    const totalRemainingBalance = totalBalance - totalTrainerPaidAmount;
    return totalRemainingBalance;
}
export default getTotalBalance