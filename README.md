### Completing a series of problems / tasks to build a real-world e-commerce web application

1. Step 1

   - Build header(navbar - logo points to home route and signup will point to signup route and cart will point to cart point route & other static content) & footer for your app

   - Set the routing system correctly for these routes, put demo content in pages to test routes for now

   - Build a single product component for now to apply it later to render a bulk of components from backend to pages later

2. Step 2

   - These fields must be present in a single component.

     - id (will be auto generated by the backend)

     - name

     - image

     - description

     - brand

     - category

     - price

     - stockCount

     - rating

     - numReviews

   - Setup express, prisma, postgresql, concurrently, nodemon, zod

   - create routes to get all products in bulk as well as individual product

   - create dotenv file to store important keys like connection string, payment gateway route api keys etc.

   - Create these schemas: user, product, reviews, order

   - Create get bulk products and also get individual product routes and make them functional in both client and server side = do proper error handling (do asyncHandler and errorMiddleware for error checking)

   - Create separate route for getting bulk product and getting a single product

   - Move the function call in it's separate controllers (ex. productControllers, reviewsControllers etc.)

   - Populate the database with raw datas
