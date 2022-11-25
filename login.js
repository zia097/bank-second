document.getElementById('submit-button').addEventListener('click',function(){
    //input theke user email
    const userInputField = document.getElementById('user-email');
    const userEmail = userInputField.value;

    //input theke user password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    //console.log(userEmail, userPassword);

    //click button than go to another page
    if(userEmail == 'zia@gmail.com' && userPassword == 1234){
        window.location.href = "banking.html";
     }else{
        window.location.href = "banking.html";

     }

})
