# ticketing

A ticket booking website.

The service is done in TypeScript, deployed using Docker and Kubernetes, and managed by Skaffold.

## The Micro Service architecture

1. Ingress-Nginx
2. Service
   - Auth
     - Service
       - Middlewares
         - requireAuth
         - currentUser
       - Route Handlers
         - signup
         - signin
         - signout
         - currentuser
       - Models
         - user
     - Database
       - MongoDB
   - Orders
   - Ticketing
   - Payments
3. Event Bus
4. Infrastructure (deployment related)

## Testing Scope

1. Single middleware testing
2. Multiple middlewares testing
3. Components within single service testing
4. Different services testing
