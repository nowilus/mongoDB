db.people.find().forEach(function(data){
	db.people.update({
		"_id": data._id
	},{
		"$set":{"weight": parseInt(data.weight)}
	});
})

db.people.find().forEach(function(data){
	db.people.update({
		"_id": data._id
	},{
		"$set":{"height": parseInt(data.height)}
	});
})

db.people.aggregate([{$group:{_id:"$sex", avgWeight:{$avg:"$weight"},avgHeight:{$avg:"$height"}}}])

db.people.mapReduce( 
   function() { emit(this.sex,this.weight); }, 
   function(key, values) {return Array.avg(values)}, {  
      query:{},  
      out:"post_total" 
   }
	
).find()

db.people.mapReduce( 
   function() { emit(this.sex,this.height); }, 
   function(key, values) {return Array.avg(values)}, {  
      query:{},  
      out:"post_total" 
   }
	
).find()