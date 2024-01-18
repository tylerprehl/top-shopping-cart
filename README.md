# The Odin Project - Shopping Cart
This project's goal is to demonstrate and reinforce knowledge of React Testing and Ecosystem, inlcuding the use of Vitest, Routers, and fetching data in React.

### To run the shop locally:
- clone the repo
- navigate your CLI to the repo folder
- run ```npm init```
- run ```npm run dev```
<br>
You can also view this project at (TBD)

### To Do:
- test linking from ItemCard to ItemPage
- create real content of ItemPage
  - this is where shopping cart data will be updated from!
  - design React components to track shopping cart values
- create generic Cart page
  - needs access to what's in the cart
    - can also update what's in the cart
  - create generic ItemInCart component
- create generic Default/Error pages for ItemPage
- media query Menu button (to avoid squishing NavBar circles)
- manually entering known item ID results in an error page
  - maybe has to do with the use of Context and the data available when it goes to render ItemPage?
- figure out how to change background between Home and other pages
- why does background zoom in on Shop page?
  - started occurring after I included ItemCards in ItemCard.jsx
  - removing images from ItemCards makes it better, but not completely
  - not that it matters since I want to change the background of the Shop page, but still weird...

### Main Takeaways
- testing with Vitest is awesome!
  - it makes testing the effects of interactions suuper clean and easy
  - it helped me focus on proper accessibility (by using getByRole)

### Other Interesting Things Learned
- div elements have the WAI-ARIA role of 'generic'
- got a little jumpstart on using React Context (probably not in best-practice format)
  - I used it as a method for passing data through the Outlet element