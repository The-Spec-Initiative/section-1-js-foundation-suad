# Conditional Statement

Created a programming logic that uses the principles of conditional statement, specifically (if block of code)

# Feature

Created a function that accepts a parameter of the user roles, and this parameter is compared to some lines of codes and the one that meets the right condition, a specific message is logged to the user

```js
function checkRole(role) {
  if (role === "admin") console.log(`You're now in the ${role}$ dashboard`);
  if (role === "user") console.log(`You're now in the ${role}$ dashboard`);
  if (role === "guest") console.log(`You're now in the ${role}$ dashboard`);
}

checkRole(user1.role);
checkRole(user2.role);
checkRole(user3.role);
```

The roles passed are gotten from user objects i created in the javascript file

# Technologies

- Javascript
  -HTML
