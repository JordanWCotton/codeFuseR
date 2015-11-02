var windowHeight=$(window).height(); //Storing the height of the window to a variable
var menuBarHeight=$("#topBar").height(); //Storing the size of the menu bar to a variable
var codeContainerHeight=windowHeight - menuBarHeight; //Storing the difference of the
                        //above two in a variable, to give us a height for the content area

$('.codeContainer').height(codeContainerHeight + "px"); //Setting the content area to the above height

$('.selector').click(function() {

  $(this).toggleClass('selected');   //Using toggleClass to add or remove the 'selected' tag when
                                    //a selector is clicked

  var activeDiv=$(this).html();   //Stores the tag of the active div

  $('#'+activeDiv+'Container').toggle();  //Toggles the selected window on or off using toggle()

  var showingDivs=$('.codeContainer').filter(function(){

    return($(this).css('display')!='none');    //Uses filter to determine how many windows are open, and stores it as a number
                                              //using .length in the variable showingDivs
  }).length;

  var width= 100/showingDivs;    //Set width to 100% of the screen size divided by the amount of windows open

  $('.codeContainer').width(width + '%');   //Sets the width of the codeContainers using
                                            //the width variable with a '%'

});

$('#run').click(function () {   //Upon clicking the run button, the code from the windows are evaluated to the iframe

  $('iframe').contents().find("html").html('<style>'+$('#css').val()+'</style>'
  +$('#html').val());

  document.getElementById("resultFrame").contentWindow.eval($('#js').val());  //Potential security risk, do NOT use on live server

});
