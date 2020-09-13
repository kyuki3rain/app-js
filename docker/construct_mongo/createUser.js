const user = {
  user: "staff",
  pwd: "staff_password",
  roles: [
    {
      role: "readWrite",
      db: "test",
    },
  ],
};

db.createUser(user);
