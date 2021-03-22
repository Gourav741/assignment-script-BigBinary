# assignment-script-BigBinary

As per the assignment given in the link https://public.3.basecamp.com/p/jB8mTofgMdUJoHb4j4vSc5pi

Test script was written using Cypress testing framework.

The folder structure in which the main test script(assignment.spec.js) resides is:

-cypress
  -integration
    -my-tests
      -assignment.spec.js 
      


The test cases are written for following steps:

  Anywhere you see "neerajdotname" then replace "neerajdotname" with your own github id. "neerajdotname" is the Github id of Neeraj.

  1. Visit https://www.aceinvoice.com/
  2. Click on "Sign up for FREE"
  3. email -> "neerajdotname-march-19-2021-2142@example.com"
  4. password -> "welcome1234!"
  5. First Name -> "Oliver"
  6. Last Name -> "Smith"
  7. Select "GMT+ 5:30 New Delhi" from the dropdown"
  8. Select "DD/MM/YYY" as the date format
  9. Check both the check boxes
  10. Click on "Continue"
  11. Name of your company. -> "neerajdotname Private Limited"
  12. Click on "Skip this step"
  13. Assert that the page has "Congratulations, you're all set!"
  14. Click on "Continue"
  15. Assert that the page has "Verification email sent to"
  16. Click on "Client" tab.
  17. Click on "Add a new client"
  18. Name -> "Trix Inc"
  19. Click on "Submit" button
  20. Assert that the page has "Add New Project"
  21. Project Name -> "Trix Web Development"
  22. Select "Hourly project rate"
  23. "Hourly project rate" -> "20"
  24. Hit "Submit"
  25. Assert that the page has "Trix Web Development"
  26. Assert that the page has "Hourly Project Rate"
  27. Assert that the page has "No rounding"
  28. Assert that the page has "Oliver Smith"
