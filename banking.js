


document.getElementById('deposit-button').addEventListener('click', function(){

    // $ er bitor er text ta
    const depositValue = document.getElementById('show-deposit-value');
    const depositeTextAmmount = depositValue.innerText;
    const depositeText = parseFloat(depositeTextAmmount);


    const inputValue = document.getElementById('deposit-input');
    const depositAmmount = inputValue.value;
    const deposit = parseFloat(depositAmmount);

    const depositeTextplus = depositeText + deposit;

    depositValue.innerText = depositeTextplus;

    //input dawar por inputfild ta khali kore dawar jonno

    // blance total
    const blanceInner = document.getElementById('blance');
    const blanceText = blanceInner.innerText;
    const blanceAmmount = parseFloat(blanceText) ;
    const blance = blanceAmmount + deposit ;
    blanceInner.innerText = blance;

    inputValue.value = '';
});


document.getElementById('withdraw-button').addEventListener('click',function(){
    //withdraw Text
    const withdrawText = document.getElementById('withdraw');
    const withdrawInner = withdrawText.innerText;
    const withdrawNum = parseFloat(withdrawInner);

    //withdraw input value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const withdrawInputNum = parseFloat(withdrawValue);


    //show withdraw ammount
    const wthdrawAmmount = withdrawNum + withdrawInputNum ;
    withdrawText.innerText = wthdrawAmmount ;

    // Blance ammount
    const blanceText = document.getElementById('blance');
    const blanceInner = blanceText.innerText;
    const blanceNum = parseFloat(blanceInner);
    const blanceAmmount = blanceNum - withdrawInputNum;
    blanceText.innerText = blanceAmmount;


    withdrawInput.value = '';

})





