(function(root){
 const fields=['id','name','chinese','cuisine','category','price','new','green','url','image','lat','lng','address','postal','telephone','area','region','history'];
 function publicDataset(ds){return {schemaVersion:ds.schemaVersion,latestYear:ds.latestYear,updatedAt:ds.updatedAt,completeYears:[...ds.completeYears],sources:{...ds.sources},restaurants:ds.restaurants.map(r=>Object.fromEntries(fields.filter(k=>r[k]!==undefined).map(k=>[k,structuredClone(r[k])]))) };}
 root.SGPublic={publicDataset};
})(globalThis);
