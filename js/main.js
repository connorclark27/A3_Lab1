(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var carImages = document.querySelectorAll('.data-ref');

   const httpRequest = new XMLHttpRequest();

   function getCarData() {

        const url = './includes/functions.php?carModel=' +this.id;

        //the fetch API uses new JavaScript Promise API
        fetch(url) //do an AJAX call with fetch
          .then((resp) => resp.json()) //convert to json
          .then(({ modelName, pricing, modelDetails, model }) => {
            let carModel = document.querySelector('.modelName').textContent = modelName;
            let price = document.querySelector('.priceInfo').innerHTML = pricing;
            let desc = document.querySelector('.modelDetails').textContent = modelDetails;

             //change opacity
             carImages.forEach(function(car, index) {
                 car.classList.add('nonActive');
             });

             document.querySelector(`#${model}`).classList.remove('nonActive');
          })
          .catch(function(error) {
            //catch any error and report it to the console
            console.log(error);
          });
        }

   function processResult(data) {
     const { modelName, pricing, modelDetails } = data;
     /*let model = document.querySelector('.modelName').textContent = modelName;
     let price = document.querySelector('.priceInfo').innerHTML = pricing;
     let desc = document.querySelector('.modelDetails').textContent = modelDetails;

     let objectIndex = carData [this.id];

      //change opacity
      carImages.forEach(function(image, index){
          image.classList.add("nonActive");
      });

      document.querySelector(`#${data.model}`).classList.remove('nonActive');
      //remove opacity when clicked
      //this.classList.remove('nonActive');*/
   }


   carImages.forEach(function(image, index){
     image.addEventListener('click', getCarData, false);
   });

   //Preload low opacity
   getCarData.call(document.querySelector('#F55'));



})();
