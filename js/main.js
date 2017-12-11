(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var carImages = document.querySelectorAll('.data-ref');

   const httpRequest = new XMLHttpRequest();

   function changeText() {

        const url = './includes/functions.php?carModel=' +this.id;

        //the fetch API uses new JavaScript Promise API
        fetch(url) //do an AJAX call with fetch
          .then((resp) => resp.json()) //convert to json
          .then((data) => { processResult(data);}) //call the process function
          .catch(function(error) {
            console.log(error);
          })


        //make an AJAX call to the database; handle errors first
        /*
        if (!httpRequest) {
          alert('giving up... your browser sucks');
          return false;
        }

        httpRequest.onreadystatechange = processRequest;
        httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
        httpRequest.send();
        */
     }



  /*function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome

        let data = JSON.parse(httpRequest.responseText);

        processResult(data);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }*/

   function processResult(data) {
     const { modelName, pricing, modelDetails } = data;
     let model = document.querySelector('.modelName').textContent = modelName;
     let price = document.querySelector('.priceInfo').innerHTML = pricing;
     let desc = document.querySelector('.modelDetails').textContent = modelDetails;

     let objectIndex = carData [this.id];

      //change opacity
      carImages.forEach(function(image, index){
          image.classList.add("nonActive");
      });

      document.querySelector(`#${data.model}`).classList.remove('nonActive');
      //remove opacity when clicked
      //this.classList.remove('nonActive');
   }


   carImages.forEach(function(image, index){
     image.addEventListener('click', changeText, false);
   });

   //Preload low opacity
   changeText.call(document.querySelector('#F55'));



})();
