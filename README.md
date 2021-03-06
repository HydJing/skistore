# skistore

Hi there, here is my new demo about building online store by using .Net and Angular

# Summary

# Section 2
 - initials set up project structures and push to git

# Section 3
- adding product with brands and types
- set up seed DB database

# Section 4
- create a generic repository(generic model class for extend it easily)
- Specification pattern(like query with custom and different WHERE clause)
- Using the specification pattern
- Using the debugger
- Shaping data(DTO)
- Automapper
- Serving static content from API

# section 5
- test controller for testing
- add custom error/exception/validation handling
- add swagger
- use extension class to manage custom services/middleware

# section 6
- add filters, pagination, search and sorting in a list using specification pattern

# section 7
- set up the Angular project with extensions

# section 8
- use http client module to receive data from API
- understand basics of observables and Typescript
- created nav bard with images

# section 9
- file and folder structure
- Angular services(shop service - where call API and get data)
- Building the UI for the shop
- Pagination
- Filtering, Sorting & Search
- Input and Output properties
- Shared components(pager, paging header)

# section 10
- Adding new feature modules
- setting up routes
- Nav links
- Lazy loading

# section 11
- created custom error components and inceptor. try to handle the API errors. this might not used in real app, but it is helpful in demo 

# section 12
- add section header
- add breadcrumb
- add loading spinner
- add homepage slider

# section 13
- install the Redis on window
- created the basket class, interface, repository and controller
- Redis testing, 'redis-server' for starting the server, 'redis-cli' start the client, can try 'ping' if it is working. 'redis-cli keys *' check all the keys and get value using 'redis-cli get KEY_NAME'

# section 14
 - created basket(like cart) and added functions and service make it working(add, increse/decrease qty)
 - add order summary componenet
 - created checkout component

# section 15
 - Set up Identity package
 - create account ctroller for user realted actions(login, register, get customer address etc)
 - Update the way token use
 - extends the user manager methods

# section 16
 - Validation data for email address and basket
 - data annotation and DTO for basket

# section 17
 - adding account feature
 - use Form in Angular
 - Reactive forms
 - Reusuable form components
 - Client side validation
 - Async validation
 
# section 18
 - adding order entity
 - aggrgate entities(order item, order status, delivery methods etc)
 - owned entities
 - Unit of work pattern

# section 19
 - Implementing the checkout
 - Collecting info from user
 - Multi-Step Form
 - Using HttpInterceptor to send JWT token
 - Forms - updating the form with data from API
 
 # section 21
 - Implemented the Stripe as third party payment in checkout
 
  # section 22
 - API performance
 - Client Performance

  # section 23
Finally we finish the tutorial! YAY
sum up the tech we used:
API:
 - dotnet CLI
 - EF migrations
 - Stripe
 - redis
 - Caching
 - Specifications
 - Generic Repositry
 - ContextBoundaries
 - Unit of Work
 - AutoMapper
 - Entity

Frontend:
Angualr
- Auth
- Routing
- Stripe
- Lazy Loading
- Caching
- Observables
- Services
- Error Handling
- Aync pip
- Typescript

What we can do next:
1. inventory system
2. Email serivece
3. Product review system