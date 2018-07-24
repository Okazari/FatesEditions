# Import a book from MyVirtualStoryBook to FatesEditions

## Step 1
import book from the old MVSB database, using the bookId.
Pipe the result from the script
ex: mongo --quiet importBookFromMVSB.js >> myFile.js
add module.exports = [] to import it into Step 2 ;)

## Step 2
reformat the text attr of Pages using a little create-react-app using draft-js and converting the old hmtl format to the new draft-js one.
Copy/paste it from the console of the browser.

## Step 3
use the reformating and inserting script to insert it into the new database using the result of step 3 ;)