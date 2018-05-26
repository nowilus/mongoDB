db.people.aggregate([{$group:{_id:"$nationality", avgBMI: {$avg:{$divide: ["$weight", {$multiply: [{$divide: ["$height",100]}, {$divide: ["$height",100]}]}]}},
minBMI:{$min:{$divide: ["$weight", {$multiply: [{$divide: ["$height",100]}, {$divide: ["$height",100]}]}]}},
maxBMI:{$max:{$divide: ["$weight", {$multiply: [{$divide: ["$height",100]}, {$divide: ["$height",100]}]}]}} }}]).toArray()
