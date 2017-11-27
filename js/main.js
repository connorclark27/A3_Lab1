(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var carImages = document.querySelectorAll('.data-ref'),
   modelName = document.querySelector('.modelName'),
   priceInfo = document.querySelector('.priceInfo'),
   modelDetails = document.querySelector('.modelDetails'),
   appliedClass;

   function changeText() {
     let objectIndex = carData [this.id];

     //change the text
          //change the model name
              modelName.firstChild.nodeValue = objectIndex.model;
          //change the price
              priceInfo.firstChild.nodeValue = objectIndex.price;
          //change the description
              modelDetails.firstChild.nodeValue = objectIndex.desc;

      //change opacity
      carImages.forEach(function(image, index){
          image.classList.add("nonActive");
      });

      //remove opacity when clicked
      this.classList.remove('nonActive');
   }


   carImages.forEach(function(image, index){
     image.addEventListener('click', changeText, false);
   });

   //Preload low opacity
   changeText.call(document.querySelector('#F55'));


})();
