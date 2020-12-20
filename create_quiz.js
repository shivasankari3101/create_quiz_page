var slides= document.getElementsByClassName("slide");
var quizzes =document.getElementsByClassName("create_quiz");
var slide_nos =document.getElementsByClassName("slide_no");
var questions =document.getElementsByClassName("question");
var slide_questions =document.getElementsByClassName("slide_question");
var options1 =document.getElementsByClassName("option1");
var options2 =document.getElementsByClassName("option2");
var options3 =document.getElementsByClassName("option3");
var options4 =document.getElementsByClassName("option4");
var slide_options1=document.getElementsByClassName("slide_option1");
var slide_options2=document.getElementsByClassName("slide_option2");
var slide_options3=document.getElementsByClassName("slide_option3");
var slide_options4=document.getElementsByClassName("slide_option4");
var image_uploads =document.getElementsByClassName("image_upload");
var image_previews =document.getElementsByClassName("image_preview");
var slide_pictures =document.getElementsByClassName("slide_picture");
var slide_nos=document.getElementsByClassName("slide_no");
var quiz_numbers=document.getElementsByClassName("quiz_number");
var option_images_1 =document.getElementsByClassName("option_image_1");
var option_images_2 =document.getElementsByClassName("option_image_2");
var option_images_3 =document.getElementsByClassName("option_image_3");
var option_images_4 =document.getElementsByClassName("option_image_4");
var opt_imgs_prev_1 =document.getElementsByClassName("opt_img_prev_1");
var opt_imgs_prev_2 =document.getElementsByClassName("opt_img_prev_2");
var opt_imgs_prev_3 =document.getElementsByClassName("opt_img_prev_3");
var opt_imgs_prev_4 =document.getElementsByClassName("opt_img_prev_4");

var n=1;



function display_block(x){
        for(var i=1;i<quizzes.length;i++){
            quizzes[i].style.display ="none";
        }
        quizzes[x].style.display ="block";

}

function add_slide(){
    $(slides[0]).clone()
        .css('display','block')
        .appendTo("#slides");
    $(quizzes[0]).clone()
        .appendTo("body");
    display_block(n);
    n++;
}

function slide_numbers(){
    i=0;
    $(slides).each(function(){
        index=$(this).index();
        slide_nos[index].innerHTML=i;
        quiz_numbers[index].innerHTML=i+")";
        i++;
    })
}

$(document).ready(function(){ 
    let sm =window.matchMedia('(max-width:700px)');
    let xsm =window.matchMedia('(max-width:320px)');
    if(sm.matches){
        var x = document.querySelector("#brandname");
        x.innerHTML="JQ";
    }         
    if(xsm.matches){
        var x =document.querySelector(".quiz_title");
        x.placeholder="Quiz title";

    }
    add_slide();
    var pos=$(quizzes[1]).index()-1;
    slide_numbers();            

    $("#add_slide").click(function(){
        add_slide();
        slide_numbers();
    }) 
    $(document).on('click','.slide',function(){
        var index=$(this).index();
        display_block(index);
    })

     $(document).on('click','.fa-trash',function(){
           var index = $(this).parent().parent().parent().index();
           slides[index].remove();
          quizzes[index].remove();
          n--;
          slide_numbers();
    })


     $(document).on('click','.fa-clone',function(){
           var index = $(this).parent().parent().parent().index();
           $(slides[index]).clone()
        .css('display','block')
        .appendTo("#slides");
       $(quizzes[index]).clone()
        .appendTo("body");
        slide_numbers();
     })

    $(document).on('keyup','.question',function(){
        var index =$(this).parent().index();
        slide_questions[index-pos].innerHTML=questions[index-pos].value;
    })

    $(document).on('keyup','.option1',function(){
        var index =$(this).parent().parent().parent().parent().index();
        slide_options1[index-pos].innerHTML=options1[index-pos].value;
    })

    $(document).on('keyup','.option2',function(){
        var index =$(this).parent().parent().parent().parent().index();
        slide_options2[index-pos].innerHTML=options2[index-pos].value;
    })

    $(document).on('keyup','.option3',function(){
        var index =$(this).parent().parent().parent().parent().index();
        slide_options3[index-pos].innerHTML=options3[index-pos].value;
    })

    $(document).on('keyup','.option4',function(){
        var index =$(this).parent().parent().parent().parent().index();
        slide_options4[index-pos].innerHTML=options4[index-pos].value;
    })

    $(document).on('change','.image_upload',function(){
        var index =$(this).parent().parent().parent().parent().parent().index();
        if (this.files && this.files[0]) {
           var reader = new FileReader();

           reader.onload = function(e) {
           $(image_previews[index-pos]).attr('src', e.target.result);
           $(slide_pictures[index-pos]).attr('src', e.target.result);
           console.log(e.target.result);
        }

        reader.readAsDataURL(this.files[0]); 
        }

    })

    $(document).on('click','.remove_label',function(){
        var index =$(this).parent().parent().parent().parent().parent().index();    
           $(image_previews[index-pos]).attr('src',"images/placeholder-image.png");
           $(slide_pictures[index-pos]).attr('src',"images/placeholder-image.png");
           console.log(e.target.result);  
           image_uploads[index-pos].files[0]="";  

    })

    $(document).on('change','.option_image_1',function(){
        var index =$(this).parent().parent().parent().parent().index();
        
        if (this.files && this.files[0]) {
            alert(index);
           var reader = new FileReader();

           reader.onload = function(e) {
           $(opt_imgs_prev_1[index-pos]).attr('src', e.target.result);
           console.log(e.target.result);
        }

        reader.readAsDataURL(this.files[0]); 
        }

    })
    $(document).on('change','.option_image_2',function(){
        var index =$(this).parent().parent().parent().parent().index();
        
        if (this.files && this.files[0]) {
            alert(index);
           var reader = new FileReader();

           reader.onload = function(e) {
           $(opt_imgs_prev_2[index-pos]).attr('src', e.target.result);
           console.log(e.target.result);
        }

        reader.readAsDataURL(this.files[0]); 
        }

    })
    $(document).on('change','.option_image_3',function(){
        var index =$(this).parent().parent().parent().parent().index();
        
        if (this.files && this.files[0]) {
            alert(index);
           var reader = new FileReader();

           reader.onload = function(e) {
           $(opt_imgs_prev_3[index-pos]).attr('src', e.target.result);
           console.log(e.target.result);
        }

        reader.readAsDataURL(this.files[0]); 
        }

    })
    $(document).on('change','.option_image_4',function(){
        var index =$(this).parent().parent().parent().parent().index();
        
        if (this.files && this.files[0]) {
            alert(index);
           var reader = new FileReader();

           reader.onload = function(e) {
           $(opt_imgs_prev_4[index-pos]).attr('src', e.target.result);
           console.log(e.target.result);
        }

        reader.readAsDataURL(this.files[0]); 
        }

    })
                     
})        
