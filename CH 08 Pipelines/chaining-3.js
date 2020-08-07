const debts = [
	{
  	contractNo : 1,
    daysSinceLastPayment: 91,
    currency : 'EUR'
  },
  {
  	contractNo : 2,
    daysSinceLastPayment: 35,
    currency : 'USD'
  },
	{
  	contractNo : 3,
    daysSinceLastPayment: 45,
    currency : 'USD'
  }  
]

function getPriority(debt){
    const days = debt.daysSinceLastPayment;
    return days > 90
            ? 1
            : days > 60
                ? 2 
                : 3
}

function toDebtView(debt){
    return {
        ...debt,
        priority : getPriority(debt)
    }
}

function isCurrency(currencies){
    return function (debt){
        return currencies.includes(debt.currency);
    }
}

function logIdentity(value){
    console.log(value);
    return value;
}

debts
    .filter(isCurrency(['EUR', 'USD']))
    .map(toDebtView)
    .map(logIdentity)