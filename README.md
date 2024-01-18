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
- create generic Shop page
  - get the data into Shop.jsx
  - map of ItemCards that link to their specific ItemPages
- create generic ItemCard
- create generic ItemPage
  - this is where shopping cart data will be updated from!
  - don't forget to inclue 
- design React components to track shopping cart values
- create generic Cart page
  - may need another component like ItemInCart
- media query Menu button (to avoid squishing NavBar circles)
- figure out how to change background between Home and other pages

### Main Takeaways
- testing with Vitest is awesome!
  - it makes testing the effects of interactions suuper clean and easy
  - it helped me focus on proper accessibility (by using getByRole)

### Other Interesting Things Learned
- div elements have the WAI-ARIA role of 'generic'