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
- Flesh out Cart page
  - Edit quantity of what's in the cart
  - Delete item from cart entirely
- Create generic Default/Error pages
- Media query Menu button
- Media query (and good math) for side-by-side image/description vs stacked on ItemPage
- Figure out how to change background between Home and other pages
  - The zoom of the background appears to be affected by:
    - Margin/padding CSS on the page
    - ...?
    - Still unsure *why*

### Main Takeaways
- Testing with Vitest is pretty cool!
  - It makes testing the effects of user actions suuper clean and easy
  - It helped me recognize good accessibility practices (by using getByRole)
- Mock Service Worker (MSW) is super useful for API calls not passed in to components via functions

### Other Interesting Things Learned
- Got a little jumpstart on using React useOutletContext (probably not in best-practice form)
  - It's a convenient workaround, but not being able to use props is a little painful
    - When I went to test the Shop loading product cards from the API, instead of being able to pass a mock API function through the props, I found that I would need to use something like Mock Service Worker to hijack the API and return my mock data
- useOutletContext assumes that the data is immediately available
  - This may seem wildly intuitive, but it led to a problem where I was trying to use my 'allProducts' state variable from Store.jsx in ItemPage.jsx to pick the correct product from allProducts based on the parameter in the URL (to display on the page). The gist of the issue was when you manually navigated to a product page (ex - .../store/shop/9), the page would throw a 'value is null' error because it would try to load the component before the API call that was busy getting all the products from Fakestore finished. This resulted in the component erroring out on its render
  - The solution was passing an aptly named second state variable (finishedLoading) to ItemPage.jsx so that it didn't attempt to access allProducts before it was ready
- Mock Service Worker is a great workaround if you make any API calls within an Outlet 
  - Normally, if you create a component and plan on making an API call, you could pass the API call in as a function so that when you go to test the component, you can substitute out the API call function with a mock function
  - With the use of Outlet, passing props in is a no bueno, so I (thought I) needed a workaround (I didn't actually, I could've passed a prop function to Store from Router, but I didn't realize that until I was writing this)
  - To ensure that the Shop page was loading ItemCards properly without using the API, I introduced MSW into the project and it worked *spectacularly*
  - Even though it's a little 'extra' because I could've just modified Store.jsx to take the API call as a prop instead of an import, it was cool learning how to use MSW
- You can create a RegExp variable that you can pass around as a matcher function
  - Used in Shop.test.jsx to loop through checking for test data in the DOM
- Div elements have the WAI-ARIA role of 'generic'
- If you write a multi-line callback function for reduce, don't forget the return statement (facepalm)
- If you need to copy an object, use the spread operator to do so!
  - 'new Object()' is not the way
