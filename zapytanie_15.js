db.people.mapReduce( 
   function() { emit(this.credit[0].currency,this.credit[0].balance); }, 
   function(key, value) {return Array.avg(value), Array.sum(value)}, {  
      query:{sex:"Female", nationality:"Poland"},  
      out:"post_total" 
   }
	
).find()