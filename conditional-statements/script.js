"use strict";

const user1 = {
  name: "suad",
  age: 10,
  isLoggedIn: false,
  role: "admin",
};

const user2 = {
  name: "lee",
  age: 70,
  isLoggedIn: false,
  role: "user",
};

const user3 = {
  name: "maa",
  age: 90,
  isLoggedIn: true,
  role: "guest",
};

function checkRole(role) {
  if (role === "admin") console.log(`You're now in the admin dashboard`);
  if (role === "user") console.log(`You're now in the user dashboard`);
  if (role === "guest") console.log(`You're now in the guest dashboard`);
}

checkRole(user1.role);
checkRole(user2.role);
checkRole(user3.role);
