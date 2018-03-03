$(document).ready(function() {
  var total = 0
  $("#myNum").text(total)
  var randNum = Math.floor( Math.random() * 100 )
  $( "#numGuess" ).text( "Click the Gems to Match the Number Below!  " + randNum )
  var wins = 0
  $(".wins").text("WINS : " + wins)
  var losses = 0
  $(".losses").text("LOSSES : " + losses)
  var myImage = $("<img>")
  
    
  //reset function
  function reset() {
    randNum = Math.floor(Math.random() * 100)
    $( "#numGuess" ).text( "Click the Gems to Match the Number Below!  " + randNum )
    total = 0
    $("#myNum").text(total)
    for ( var i = 0 ; i < 4; i++ ) {
      myImage.attr("src", "assets/images/gem.png")
      myImage.attr("class", "gemSize myGem") 
      myImage.attr("data-gemValue", Math.ceil( Math.random() * 10 ))
      $("#gems").append(myImage)
    }
  }

  $(".resetBtn").on("click", function() {
    reset()
    // console.log("hello")
  })

    for ( var i = 0 ; i < 4; i++ ) {
    var myImage = $("<img>")
    myImage.attr("src", "assets/images/gem.png")
    myImage.attr("class", "gemSize myGem")
    myImage.attr("data-gemValue", Math.ceil( Math.random() * 10 ) )
    $("#gems").append(myImage)
  }
  
  $(".myGem").on("click", function() {
    var gemNum = parseInt($(this).attr("data-gemValue"))
    total += gemNum
    $("#myNum").text(total)
    if(total === randNum) {
      alert("You Win!")
      wins++
      $(".wins").text("WINS : " + wins)
      reset()
    }

    else if(total > randNum) {
      alert("You Lose! Try again!")
      losses++
      $(".losses").text("LOSSES : " + losses)
      reset()
    } 
  })
  
  //gets another number and resets 
  

})


  