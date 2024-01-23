# The Odin Project - Shopping Cart
This project's goal is to demonstrate and reinforce knowledge of React Testing and Ecosystem, inlcuding the use of Vitest, Routers, and fetching data in React.

### To run the shop locally:
- Clone the repo
- Navigate your CLI to the repo folder
- Run ```npm init```
- Run ```npm run dev```
<br>
You can also view this project at (TBD)

### To Do:
- Test linking from ItemCard to ItemPage
- Test increase/decrease item count
- Test adding item to cart
- Create generic Cart page
  - Needs access to what's in the cart
    - Can also update what's in the cart
  - Create generic ItemInCart component
- Create generic Default/Error pages
- Media query Menu button (to avoid squishing NavBar circles)
- Media query (and good math) for side-by-side image/description vs stacked on ItemPage
  - create more standardized image size like on Shop page (see ItemCard.css for example)
- Manually entering known item ID results in an error page
  - Maybe has to do with the use of Context and the data available when it goes to render ItemPage?
- Figure out how to change background between Home and other pages
- Why does background zoom in on Shop page?
  - Started occurring after I included ItemCards in ItemCard.jsx
  - Removing images from ItemCards makes it better, but not completely
  - Not that it matters since I want to change the background of the Shop page, but still weird...

### Main Takeaways
- Testing with Vitest is awesome!
  - It makes testing the effects of interactions suuper clean and easy
  - It helped me focus on proper accessibility (by using getByRole)

### Other Interesting Things Learned
- Div elements have the WAI-ARIA role of 'generic'
- Got a little jumpstart on using React Context (probably not in best-practice format)
  - I used it as a method for passing data through the Outlet element
- useOutlookContext assumes that the data is immediately available
  - This may seem wildly intuitive, but it led to a problem where I was trying to use my 'allProducts' state variable from Store.jsx in ItemPage.jsx to pick the correct product from allProducts based on the parameter in the URL (to display on the page). The gist of the issue was when you manually navigated to a product page (ex - .../store/shop/9), the page would throw a 'value is null' error because it would try to load the component before the API call that was busy getting all the products from Fakestore finished. This resulted in the component erroring out on its render
  - The solution was passing an aptly named second state variable (finishedLoading) to ItemPage.jsx so that it didn't attempt to access allProducts before it was ready
  - If you write a multi-line callback function for reduce, don't forget the return statement (facepalm)
  - If you need to copy an object, use the spread operator to do so!
    - 'new Object()' is not the way
