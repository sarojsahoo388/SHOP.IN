 var pdetails = [];

var loadProductDetails = (pData) => {
    var ulTag = $("<ul></ul>").addClass('pulTag');
    var li1 = $("<li></li>").text(pData.name);
    ulTag.append(li1);

    var li2 = $("<li></li>");
    var imageTag = jQuery("<img/>").addClass('productImg').attr("src",pData.image);
    li2.append(imageTag);
    ulTag.append(li2);

    var li3 = $("<li></li>").text(pData.price);
    ulTag.append(li3);

    $(".productDetailsContainer").append(ulTag);
}

var loadPDetails = () => {

axios.get("/getProduct/Details",{}).then((response) => {
    console.log(response);
    console.log(pdetails)
    pdetails = response.data.data;
    for (var i = 0; i < pdetails.length; i++ ){
        loadProductDetails(pdetails[i]);
    }
},(error) => {
    console.log("Error While getting product data");
}); 
}