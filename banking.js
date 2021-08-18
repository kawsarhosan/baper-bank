document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    
    const depositTotal = document.getElementById('deposit-total');
   

    const previousDepositAmount = depositTotal.innerText;
    const currentDepositTotal = parseFloat(previousDepositAmount) + parseFloat(depositAmount);

    depositTotal.innerText = currentDepositTotal;

    //update balance field
    const balanceField = document.getElementById('balance-total');
    balanceFieldTotal =balanceField.innerText;
    
    const totalBalance = parseFloat(balanceFieldTotal)  + parseFloat(depositAmount);

    balanceField.innerText = totalBalance;

    //clear input field
    depositInput.value = '';
})

//withdraw btn working....
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const currentWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(previousWithdrawAmount);
    withdrawTotal.innerText = currentWithdrawTotal;

    //update balance field
    const balanceTotal = document.getElementById('balance-total');
    const balanceFieldTotal = balanceTotal.innerText;

    const updateBalance = parseFloat(balanceFieldTotal) - parseFloat(withdrawAmount);

    if( updateBalance < 10){
        alert('You have insufficient balance..!!!')
    }    
    else{
        balanceTotal.innerText = updateBalance;
    }

    

  
    


    //clear the withdraw input field....
    withdrawInput.value= '';
})