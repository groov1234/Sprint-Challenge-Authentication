<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

--> Middleware are functions that otherwise would be written multiple times throughout a front-end or back-end project. These "Middleware" allow us to perform some complex or simple functions wherever we need to simply by calling our middleware. Sessions are a way of storing a current logged in state of a user/account. As long as the session remains active the user/account retains access to pages/tools requiring an authorized user/account. bcrypt is a tool used to add encryption to any data that needs to be secret. JWT's allow for more encryption. Encrypting not just data, but the packets being sent between client and server and vice versa.

2.  What does bcrypt do in order to prevent attacks?

--> bcrypt takes data that needs to be stored but must be unobtainable and encrypts it. This encrypting prevents most notably Rainbow Table attacks, a type of Brute force attack that cycles through all possible combinations of strings in an attempt to find an active password for an account or accounts.

3.  What are the three parts of the JSON Web Token?

--> The three parts of a JSON Web Token(JWT) or "jot" are Header,Payload, and Signature.
The Header is made up of the algorithm used for hasing and the type of token being used. The Payload is made up of various possible claims. These claims can be Registered, Public, or Private claims. Typical Registered claims are iss(Issuer), sub(Subject), aud(Audience), exp(Expiration Time). nbf(Not Before), iat(Issued At), and jti(JWT ID) are more examples of Registered Claims. Public claim names are defined as Collision-Resistant names. Private claims are those chosen between a producer and consumer. They're neither Registered nor Public and exist only between the private parties.
