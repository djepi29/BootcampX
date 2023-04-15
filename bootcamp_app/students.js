// {,, name,count } = process.argv;
// //connect , no options
// const { Pool } = require('pg');

// const pool = new Pool();
/////////////////////////////////
// //conncet to specific database using client
// const { Client } = require('pg');

// const client = new Client({
//   user: 'djepi',
//   host: 'localhost',
//   database: 'bootcampx'
// });
///////////////////////////////////
// //conncet to specific database using pool
const { Pool } = require('pg');

const pool = new Pool({
  user: 'djepi',
  host: 'localhost',
  database: 'bootcampx'
});
/////// 1st query 

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)

//////// 2nd query with JOIN

// pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `)

// 3rd query with process.argv

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)

// 1st 
// .then(res => {
//   console.log(res.rows);
// })

// 2nd 
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
//   })
// })

.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));







