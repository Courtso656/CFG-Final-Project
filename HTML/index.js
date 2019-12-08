

var backgrounds = ['chemistry_background', 'economics_background', 'literature_background','medicine_2_background','medicine_background','peace_background','physics_background']

$( document ).ready(function(){


  $('button').on('click', function () {

    console.log('I was clicked!')

    var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    // this creates a string that css will understand to be a background url
    var imageUrl = "url('./" + randomBackground + ".jpg')"


    // 2. using jquery, change the image url of the body background to the new one saved above
    $('body').css('background', imageUrl)


    // EXTENSION TASK!
    // 3. Change the text of the 'span' to be that of the photographer
    //   (hint, you should re-use randomBackground)
    // $('span').text(randomBackground)

    // Double points if you replace '-' between their names with a space



  })
}) // here endeth the function
