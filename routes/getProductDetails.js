var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var productData = { data :[
    {
        name : 'T-Shirts',
        image : 'https://images.bewakoof.com/t1080/game-over-minimal-half-sleeve-t-shirt-navy-blue-305202-1655748497-1.jpg',
        price : 'Rs-999'
    },
    {
        name : 'T-Shirts',
        image : 'https://images.bewakoof.com/t640/men-s-red-nasa-astronaut-t-shirt-481838-1655749835-1.jpg',
        price : 'Rs-899'
    },
    {
        name : 'Mobile',
        image : 'https://images.bewakoof.com/t1080/peeking-army-designer-hard-cover-for-apple-iphone-13-pro-535445-1660206398-1.jpg',
        price : 'Rs-10,999'
    },
    {
        name : 'Bag-Packs',
        image : 'https://images.bewakoof.com/t1080/unisex-black-peanuts-colour-block-small-backpack-579926-1686814420-1.jpg',
        price : 'Rs-2999'
    },
    {
        name : 'T-Shirts',
        image : 'https://images.bewakoof.com/t640/men-s-black-space-bound-graphic-printed-oversized-t-shirt-534042-1678356427-1.jpg',
        price : 'Rs-699'
    },
    {
        name : 'Shoes',
        image : 'https://images.bewakoof.com/t640/men-s-black-color-blocked-casual-shoes3-583297-1678783402-1.jpg',
        price : 'Rs-799'
    },
    {
        name : 'T-Shirts',
        image : 'https://images.bewakoof.com/t640/women-white-disney-polaride-printed-t-shirt-516674-1667399232-1.jpg',
        price : 'Rs-499'
    },{
        name : 'T-Shirts',
        image : 'https://images.bewakoof.com/t1080/game-over-minimal-half-sleeve-t-shirt-navy-blue-305202-1655748497-1.jpg',
        price : 'Rs-999'
    },
    {
        name : 'T-Shirts',
        image : 'https://images.bewakoof.com/t640/men-s-red-nasa-astronaut-t-shirt-481838-1655749835-1.jpg',
        price : 'Rs-899'
    },
    {
        name : 'Mobile',
        image : 'https://images.bewakoof.com/t1080/peeking-army-designer-hard-cover-for-apple-iphone-13-pro-535445-1660206398-1.jpg',
        price : 'Rs-10,999'
    },
    {
        name : 'Bag-Packs',
        image : 'https://images.bewakoof.com/t1080/unisex-black-peanuts-colour-block-small-backpack-579926-1686814420-1.jpg',
        price : 'Rs-2999'
    },
    {
        name : 'T-Shirts',
        image : 'https://images.bewakoof.com/t640/men-s-black-space-bound-graphic-printed-oversized-t-shirt-534042-1678356427-1.jpg',
        price : 'Rs-699'
    },
    {
        name : 'Shoes',
        image : 'https://images.bewakoof.com/t640/men-s-black-color-blocked-casual-shoes3-583297-1678783402-1.jpg',
        price : 'Rs-799'
    },
    {
        name : 'T-Shirts',
        image : 'https://images.bewakoof.com/t640/women-white-disney-polaride-printed-t-shirt-516674-1667399232-1.jpg',
        price : 'Rs-499'
    }
]};

productData = JSON.stringify(productData);
res.send(productData);

});

module.exports = router;