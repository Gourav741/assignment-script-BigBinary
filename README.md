# assignment-script-BigBinary

As per the assignment given in the link https://public.3.basecamp.com/p/jB8mTofgMdUJoHb4j4vSc5pi

Test script was written using Cypress testing framework.

The folder structure in which the main test script(assignment.spec.js) resides is:

-cypress -integration -my-tests -assignment.spec.js

The test cases are written for following steps:

Anywhere you see "neerajdotname" then replace "neerajdotname" with your own github id. "neerajdotname" is the Github id of Neeraj.

Visit https://www.aceinvoice.com/
Click on "Sign up for FREE"
email -> "neerajdotname-march-19-2021-2142@example.com"
password -> "welcome1234!"
First Name -> "Oliver"
Last Name -> "Smith"
Select "GMT+ 5:30 New Delhi" from the dropdown"
Select "DD/MM/YYY" as the date format
Check both the check boxes
Click on "Continue"
Name of your company. -> "neerajdotname Private Limited"
Click on "Skip this step"
Assert that the page has "Congratulations, you're all set!"
Click on "Continue"
Assert that the page has "Verification email sent to"
Click on "Client" tab.
Click on "Add a new client"
Name -> "Trix Inc"
Click on "Submit" button
Assert that the page has "Add New Project"
Project Name -> "Trix Web Development"
Select "Hourly project rate"
