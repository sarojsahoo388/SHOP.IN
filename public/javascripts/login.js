var validateUser = () => {
  $(".InvalidCredentials").hide();
    var userData = {};
    userData.userId = document.querySelector("#userId").value;
    userData.password = document.querySelector("#actPassword").value;
    console.log(userData)

    axios.post('/validate/userCredentials', {params: userData})
      .then(function (response) {
        console.log(response);
        if(response.data.msg == 'Valid User'){
          loginModal.hide();
          $(".loginBtns").hide();
          $(".logoutBtns").show();
          loadSelectedPage('products');

        }else{
          $(".InvalidCredentials").show();
        }
      })
      .catch(function (error) {
        console.log(error);
      });

}

var loginModal;
var showLoginDialog= () =>{
    
    loginModal=new bootstrap.Modal('#loginDialog')
    loginModal.show();
}