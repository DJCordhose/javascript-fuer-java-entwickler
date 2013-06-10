"use strict";

var json = '{ \
    "principle": 199990.00,\
    "total": 503409.60,\
    "payments": 360,\
    "monthly": 1398.36\
}';
console.log(json);

var obj = JSON.parse(json);
console.log(obj);
console.log(obj.payments);
// => 360

var jsonString = JSON.stringify(obj);
console.log(jsonString);
// => {"principle":199990,"total":503409.6,"payments":360,"monthly":1398.36}