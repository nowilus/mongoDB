db.people.mapReduce( 
   function() { emit(this.job,1); }, 
   function(key, values) {return Array.avg(values)}, {  
      query:{},  
      out:"post_total" 
   }
	
).find().toArray()

db.people.aggregate({$group:{_id:"$job"}}).toArray()