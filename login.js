document.getElementById('btn-id').addEventListener('click',function () {

    const emailField = document.getElementById('email-id');

    const emailAdd = emailField.value;


    const passField = document.getElementById('pass-id');

    const passAdd = passField.value;



    if (emailAdd === 'evu@gmail.com' && passAdd === 'Cool')
    {
        console.log ('Valid User')

        window.location.href = 'bank.html'
    }
    else {

        alert ('Pehli Fursaat mai nikal')
    }
    
})