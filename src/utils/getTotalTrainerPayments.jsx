
const getTotalTrainerPayments = (trainerPayments) => trainerPayments?.reduce((total, curr)=> total+curr.paidAmount, 0)

export default getTotalTrainerPayments