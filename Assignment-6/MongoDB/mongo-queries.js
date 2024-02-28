use('cseb')


// db.createCollection("empInfo")
// db.empInfo.insertMany([
//     {
//         "eid": "E101",
//         "name": "John Doe",
//         "salary": 60000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E102",
//         "name": "Jane Smith",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E103",
//         "name": "Amit Patel",
//         "salary": 55000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E104",
//         "name": "Priya Sharma",
//         "salary": 80000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E105",
//         "name": "Raj Singh",
//         "salary": 75000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E106",
//         "name": "Kavita Gupta",
//         "salary": 60000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E107",
//         "name": "Sandeep Verma",
//         "salary": 90000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E108",
//         "name": "Ananya Das",
//         "salary": 65000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E109",
//         "name": "Rahul Kapoor",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E110",
//         "name": "Pooja Khanna",
//         "salary": 80000,
//         "dept": "SDE"
//     }
// ])

// db.empInfo.find()
// db.empInfo.find().sort({"name": 1})
// db.empInfo.find().sort({"salary": -1})
// db.empInfo.find().sort({"name": 1, "salary": -1})
// db.empInfo.find().limit(3)

// find({query},{project},{option})
// db.empInfo.find({}, {"name": 1})
// db.empInfo.find({}, {"_id": 0, "name": 1})
// db.empInfo.find({}, {"_id": 0, "name": 1, "salary": 1})
// db.empInfo.find({}, {"_id": 0})

// Find the details of Amit Patel
// db.empInfo.find({"name": "Amit Patel"})
// db.empInfo.find({"name": "amit patel"})

// Find all the emp of SDE dept
// db.empInfo.find({"dept": "SDE"})

// db.empInfo.findOne({"dept": "SDE"})

// Find out name and salary of all the emp belongs to SDE
// db.empInfo.find({"dept": "SDE"}, {"_id": 0, "name": 1, "salary": 1})

// Emp of SDE getting salary of rs 70000
// AND operation (implicit)
// db.empInfo.find({"dept": "SDE", "salary": 70000})

// Operator
// Relational Operator
// {<field> : {$operator: <value>}}

// Emps of MGR
// db.empInfo.find({"dept": "MGR"})
// db.empInfo.find({"dept": {$eq: "MGR"}})

//Emps with salary 80000
// db.empInfo.find({"salary": {$eq: 80000}})

// Emps with sal > 80000
// db.empInfo.find({"salary": {$gt: 80000}})

// Emps with sal >= 80000
// db.empInfo.find({"salary": {$gte: 80000}})

// Emps other than SDE
// db.empInfo.find({"dept": {$ne: "SDE"}})

// Logical Operator
// {$operator: [{expression 1}, {expression 2},...,{expression n}]}
// Managers who are getting sal of 60000
// db.empInfo.find({"dept": "MGR", "salary": 60000})
// db.empInfo.find({$and : [{"dept": "MGR"}, {"salary": 60000}]})

// SDEs with salary >= 80000
// db.empInfo.find({$and: [{"dept": "SDE"}, {"salary": {$gte: 80000}}]})

// All the emps of MGR and HR
// db.empInfo.find({$or: [{"dept": "MGR"}, {"dept": {$eq: "HR"}}]})
// db.empInfo.find({"dept": {$in: ["MGR", "HR"]}})

// All emps working for HR or getting sal>=80000
// db.empInfo.find({$or: [{"dept": "HR"}, {"salary": {$gte: 80000}}]})


// Search
// db.empInfo.find({"name":/Amit/})
// n anywhere
// db.empInfo.find({"name":/n/})
// Starts with A
// db.empInfo.find({"name":/^A/})
// Ends with a
// db.empInfo.find({"name":/a$/})

// Update
// $set operator
// update({query}, {$set: {updates(k:v)}}, {option})
// db.empInfo.update({"eid": "E103"},{$set: {"salary": "75000"}})
// db.empInfo.update({"eid": "E105"},{$set: {"salary": "95000", "dept": "MGR"}})

// db.empInfo.updateMany({"dept": "SDE"}, {$set: {"dept": "SDE-1"}})


// Aggregation Pipeline
// Dept wise avg sal
// db.empInfo.aggregate([
//     {
//         // stage-1
//     },
//     {
//         // stage-2
//     },
//     {
//         // stage-3
//     }
// ])

// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           avgSal: {$avg : "$salary"}
//         }
//     }
// ])
// avg sal of all emps
// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: null,
//           avgSal: {$avg : "$salary"}
//         }
//     }
// ])

// Depts with avg sal > 70000
// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           avgSal: {$avg : "$salary"}
//         }
//     }, 
//     {
//         $match: {
//            "avgSal" : {$gt: 70000}
//         }
//     }
// ])

// Emp count of each dept
// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           empCount: {$sum : 1}
//         }
//     }
// ])
// Dept with 3 or more emps
// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           empCount: {$sum : 1}
//         }
//     },
//     {
//         $match: {
//           "empCount": {$gte: 3}
//         }
//     }
// ])

// db.contact.insertMany(
//     [
//         {
//             "eid": "E101",
//             "mobile": "9876543210",
//             "email": "john.doe@example.com",
//             "address": {
//                 "city": "Mumbai",
//                 "state": "Maharashtra",
//                 "zip": 400001
//             }
//         },
//         {
//             "eid": "E102",
//             "mobile": "9876543211",
//             "email": "jane.smith@example.com",
//             "address": {
//                 "city": "Delhi",
//                 "state": "Delhi",
//                 "zip": 110001
//             }
//         },
//         {
//             "eid": "E103",
//             "mobile": "9876543212",
//             "email": "amit.patel@example.com",
//             "address": {
//                 "city": "Ahmedabad",
//                 "state": "Gujarat",
//                 "zip": 380001
//             }
//         },
//         {
//             "eid": "E104",
//             "mobile": "9876543213",
//             "email": "priya.sharma@example.com",
//             "address": {
//                 "city": "Chandigarh",
//                 "state": "Punjab",
//                 "zip": 160001
//             }
//         },
//         {
//             "eid": "E105",
//             "mobile": "9876543214",
//             "email": "raj.singh@example.com",
//             "address": {
//                 "city": "Jaipur",
//                 "state": "Rajasthan",
//                 "zip": 302001
//             }
//         },
//         {
//             "eid": "E106",
//             "mobile": "9876543215",
//             "email": "kavita.gupta@example.com",
//             "address": {
//                 "city": "Kolkata",
//                 "state": "West Bengal",
//                 "zip": 700001
//             }
//         },
//         {
//             "eid": "E107",
//             "mobile": "9876543216",
//             "email": "sandeep.verma@example.com",
//             "address": {
//                 "city": "Bangalore",
//                 "state": "Karnataka",
//                 "zip": 560001
//             }
//         },
//         {
//             "eid": "E108",
//             "mobile": "9876543217",
//             "email": "ananya.das@example.com",
//             "address": {
//                 "city": "Hyderabad",
//                 "state": "Telangana",
//                 "zip": 500001
//             }
//         },
//         {
//             "eid": "E109",
//             "mobile": "9876543218",
//             "email": "rahul.kapoor@example.com",
//             "address": {
//                 "city": "Chennai",
//                 "state": "Tamil Nadu",
//                 "zip": 600001
//             }
//         },
//         {
//             "eid": "E110",
//             "mobile": "9876543219",
//             "email": "pooja.khanna@example.com",
//             "address": {
//                 "city": "Pune",
//                 "state": "Maharashtra",
//                 "zip": 411001
//             }
//         }
//     ]
// )
// Join
// db.empInfo.aggregate([
//     {
//         $lookup: {
//           from: "contact",
//           localField: "eid",
//           foreignField: "eid",
//           as: "contactInfo"
//         }
//     }
// ])


// db.empInfo.aggregate([
//     {
//         $lookup: {
//           from: "contact",
//           localField: "eid",
//           foreignField: "eid",
//           as: "contactInfo"
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//           "eid": 1,
//           "name": 1,
//           "contactInfo.mobile": 1,
//           "contactInfo.email": 1,
//           "contactInfo.address.city": 1,
//         }
//     },
//     {
//         $limit: 2
//     }
// ])


// Drop Collection
// db.contact.drop()
// db.contact.find()

// Delete Empm record
// db.empInfo.deleteOne({"eid": "E106"})

db.empInfo.deleteMany({"dept": "MGR"})