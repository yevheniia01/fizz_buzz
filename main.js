$(document).ready(function(){

$('button').on('click', function(){

    for (i = 0; i < 100; i++) {
        if(i%3==0){
            $('#printNums').append("<li> Fizz </li>");
            console.log('Fizz')
        }else if(i%5==0){
            $('#printNums').append("<li> Buzz </li>")
            console.log('Buzz')
        }else{
            $('#printNums').append("<li>"+i + "</li>")
            console.log(i)
        }
      }
 


})




})