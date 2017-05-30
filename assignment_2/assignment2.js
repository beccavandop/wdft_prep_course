/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

 var points = new Array(100);
        for (var i = 0; i < 100; i++) {
            points[i] = i + 1; 
        }

        for (var i = 0; i < points.length; i++) {
            console.log(points[i]); //This prints the values that you stored in the array
        }


/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

var hash = ''; //empty to a ensure the first one only displays one hashtag

for(counter = 0; counter < 7; counter ++) // stops at 7, begins at 0, each line it only ads one
{

   hash = hash + '#'; //hash now = the empty hasgtag, plus the symbol
   	console.log(hash); //displays triangle
}