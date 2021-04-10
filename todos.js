$("ul").on("click","li",function(){             //when we will click on li it will toggle the class between black and  gray
  $(this).toggleClass("completed");
});


//click on x to delete
$("ul").on("click","span", function(event) {

    $(this).parent().fadeOut(500,function(){


     $(this).remove();                      //after clicking on x that li will disappear first and then removed

    });
     event.stopPropagation();             //prevents event bubbling

});


$("input[type='text']").keypress(function(event){

  if(event.which === 13){

   var todoText= $(this).val();//grabbing input and then adding it to the ul
   $(this).val("");             //after adding new input this will  make input box Empty
   $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>")                //append function will add new li
  }
});


$(".fa-plus").click(function(){

$("input[type='text']").fadeToggle();

});