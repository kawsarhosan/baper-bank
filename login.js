 document.getElementById('submit-btn').addEventListener('click', function(){
    //get user email
    
    const userEmail = document.getElementById('user-email');
    const emailField = userEmail.value;
    // console.log(emailField);

    //get user password 
    const userPass = document.getElementById('user-password');
    const passField = userPass.value;
    // console.log(userField)

    if ( emailField == 'hello@kawsarhosan.com' && passField == 'sakil' ){
        // console.log('You are valid user!!');
        window.location.href = 'banking.html';
    }
    else(
        alert('Invalid User')
    )

 })

//  function myFunction(){
     
//  }