function input(inputId){
    
    const inputValue = document.getElementById(inputId);
    const depositAmmount = inputValue.value;
    const deposit = parseFloat(depositAmmount);
    inputValue.value = '';

    return deposit
}
function update(inputId,result){
    const depositValue = document.getElementById(inputId);
    const depositeTextAmmount = depositValue.innerText;
    const depositeText = parseFloat(depositeTextAmmount);
    const depositeTextplus = depositeText + result;
    depositValue.innerText = depositeTextplus;
}
function getUpdateBlacne(){
    const blanceInner = document.getElementById('blance');
    const blanceText = blanceInner.innerText;
    const blanceAmmount = parseFloat(blanceText) ;
    return blanceAmmount;
}

function blance(deposit,bulian){
    const blanceInner = document.getElementById('blance');
    const blanceAmmount = getUpdateBlacne();
    if(bulian == true){
        const blance = blanceAmmount + deposit ;
        blanceInner.innerText = blance;
    }else{
        const blance = blanceAmmount - deposit ;
        blanceInner.innerText = blance;
    }

}


document.getElementById('deposit-button').addEventListener('click', function(){
    
    const deposit = input('deposit-input');
    if(deposit > 0 ){
        update("show-deposit-value",deposit);
        blance(deposit,true);
    }
});


document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInputNum = input('withdraw-input');
    const blanceAmmount = getUpdateBlacne();
    if(withdrawInputNum > 0 && withdrawInputNum < blanceAmmount ){
        update("withdraw",withdrawInputNum);
        blance(withdrawInputNum, false);
    };
    if(withdrawInputNum > blanceAmmount){
        const error = document.getElementById("error");
        error.innerText = 'Your have not enounght money'
    }
})

