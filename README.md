Required Fields
============
Version 1.0

Created by Sam Russell 2/16/2014

============

Jquery Plugin that will validate if text fields are filled out.  Any fields that are empty will be highlighted in red and error text can be displayed.

Attempting to learn jquery and make something useful...if only for myself.

Options:
============

(Probably too many options for what this is)

borderColor: "red"

backgroundColor: "#FFCECE"

// Error Message

errorText: "Please complete the required fields"

// Error Field ID

errorField: "#errorText"errorColor: "red"
 
Requirements:
============

Add requiredfield.js to your header.

  
Call requiredfield function.

$( 'Fields you want to check').requiredfield();

Passing options to the plug in


$( 'Fields you want to check').requiredfield({
        errorField: "your error field id",
        borderColor: "blue"
        });
      });

Demo! 
============

http://jsfiddle.net/Robooto/LNnBd/


Things to do
============
1. Learn how to format a readme :(
2. Add support for dropdown and radiobuttons
