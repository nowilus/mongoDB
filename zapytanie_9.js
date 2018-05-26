db.people.updateMany(
      { "first_name" : "Antonio" },
      { $set: { "hobby" : "pingpong" } },
      { upsert: true }
   )