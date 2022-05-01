var randomNumber = Math.floor(Math.random()*1)+1;
$(".first-quest").hide();
$(".second-quest").hide();
$(".third-quest").hide();
$(".fourth-quest").hide();
$(".final-text").hide();
$(".next-btn").hide();
$(".reset-btn").hide();
$(".repeat-btn").hide();



$(".btn").click(function(){
    $("body").addClass("body-class");
    $("h1").hide();
    $("#start-btn").hide();
    if (randomNumber === 1)
    {
        $(".first-quest").show();
        $(".first-btn").click(function(){
            console.log($(this).attr("id"));
            if($(this).attr("id") === "first-ans-correct"){
            $(".next-btn").show();
            $("#first-ans1").prop("disabled",true);
             $("#first-ans3").prop("disabled",true);
                $("#first-ans4").prop("disabled",true);
                nextQuestion1();
            }
            else{
                $(".reset-btn").show();
                $("#first-ans1").prop("disabled",true);
                $("#first-ans-correct").prop("disabled",true);
                $("#first-ans3").prop("disabled",true);
                $("#first-ans4").prop("disabled",true);
                resetQuiz();
            }

        })

    }
})



function nextQuestion1(){
    $(".next-btn").click(function(){
    $(".next-btn").hide();
    $(".first-quest").hide();
    $(".second-quest").show();
    $(".second-btn").click(function(){
    if($(this).attr("id") === "second-ans-correct")
    {
        $(".first-quest").hide();
     $(".next-btn").show();
     $("#second-ans1").prop("disabled",true);
         $("#second-ans2").prop("disabled",true);
         $("#second-ans4").prop("disabled",true);
     nextQuestion2();
           }
     else{
         $(".first-quest").hide();
           $(".reset-btn").show();
           $("#second-ans1").prop("disabled",true);
         $("#second-ans2").prop("disabled",true);
        $("#second-ans-correct").prop("disabled",true);
           $("#second-ans4").prop("disabled",true);
           resetQuiz();
            }

        })

    })
}

function nextQuestion2(){
    $(".next-btn").click(function(){
    $(".next-btn").hide();
    $(".second-quest").hide();
    $(".third-quest").show();
    $(".first-quest").hide();
    $(".third-btn").click(function(){
    if($(this).attr("id") === "third-ans-correct"){

     $(".next-btn").show();
     $("#third-ans3").prop("disabled",true);
         $("#third-ans2").prop("disabled",true);
         $("#third-ans4").prop("disabled",true);
         $(".first-quest").hide();
     nextQuestion3();
           }
     else{
         $("#third-ans-correct").prop("disabled",true);
         $("#third-ans2").prop("disabled",true);
        $("#third-ans3").prop("disabled",true);
           $("#third-ans4").prop("disabled",true);
           $(".first-quest").hide();
           $(".reset-btn").show();
           resetQuiz();
            }

        })

    })
}

function nextQuestion3(){
    $(".next-btn").click(function(){
    $(".next-btn").hide();
    $(".third-quest").hide();
    $(".fourth-quest").show();
    $(".first-quest").hide();
    $(".fourth-btn").click(function(){
    if($(this).attr("id") === "fourth-ans-correct"){
     $(".final-text").show();
     $(".first-quest").hide();
     $(".fourth-quest").hide();
     $(".repeat-btn").show();
     $("#fourth-ans2").prop("disabled",true);
        $("#fourth-ans3").prop("disabled",true);
           $("#fourth-ans4").prop("disabled",true);
     $(".repeat-btn").click(function(){
      location.reload();
     }
     )
           }
     else{
           $(".reset-btn").show();
           $(".first-quest").hide();
           $(".fourth-quest").hide();
           $("#fourth-ans-correct").prop("disabled",true);
         $("#fourth-ans2").prop("disabled",true);
        $("#fourth-ans3").prop("disabled",true);
           $("#fourth-ans4").prop("disabled",true);
           resetQuiz();
            }

        })

    })
}

function resetQuiz(){
    $(".reset-btn").click(function(){
        location.reload();
    }
)}
