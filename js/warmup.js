'use strict';

//Use jQuery and the 'keyup' event to say "good morning" to whoever's name 
//is typed into the #toGreet input. 
// - The greeting should dynamically change as you type!
// - The person's name should be _emphasized_ or otherwise formatted with css!

//Don't forget to wrap your script in a callback so it runs when the document
//has loaded.

$('#toGreet').keyup(function(){
    //console.log('up');
    var name = $(this).val()
    //$('#toGreet').val();
    $('#greeting').text('Good afternoon, '+name);
});