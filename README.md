Required Fields
============

Version 1.0

Created by Sam Russell 2/16/2014

============

Jquery Plugin that will validate if text fields are filled out.  Any fields that are empty will be highlighted in red and error text can be displayed.

Attempting to learn jquery and make something useful...if only for myself.
============

Options: (Probably too many options for what this is)
 borderColor: "red",
 backgroundColor: "#FFCECE",
 // Error Message
 errorText: "Please complete the required fields",
 // Error Field ID
 errorField: "#errorText",
 errorColor: "red"

============
Requirements:
Add requiredfield.js to your header.
  <script src="yourdir/requiredfield.js"></script>
  
Call requiredfield function.

<script>
    $(function() {
 
$('Your Button's ID').click(function() {
        $( 'Fields you want to check').requiredfield();
      });
    
});</script>

Passing options to the plug in

<script>
    $(function() {
 
$('Your Button's ID').click(function() {
        $( 'Fields you want to check').requiredfield({
        errorField: "your error field id",
        borderColor: "blue"
        });
      });
    
});</script>

============

Demo! 
http://jsfiddle.net/Robooto/LNnBd/
