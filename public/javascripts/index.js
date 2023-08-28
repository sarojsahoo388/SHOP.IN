var loadSelectedPage = (type) => {
    var templateUrl;
    switch(type){
        case 'welcome':
            templateUrl = 'templates/WelCome.htm' 
            break;
        case 'products':
            templateUrl = 'templates/Product.htm'
            break;    
    }
    axios.get(templateUrl)
    .then(function (response) {
      // handle success
      // console.log(response.data);
      document.querySelector('main').innerHTML=(response.data);

      if(type == 'products'){
        loadPDetails();
      }
    })
    .catch(function (error) {
      // handle error 
      console.log(error);
    }); 
}
document.addEventListener("DOMContentLoaded",() =>{

    loadSelectedPage('welcome');
});