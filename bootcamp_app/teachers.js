const { Pool } = require('pg');

const pool = new Pool({
  user: 'djepi',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohorts
FROM teachers 
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name  = $1
ORDER BY teachers.name
LIMIT $2;
`;



const [, , cohortName, limit = 5] = process.argv;
const values = [`${cohortName}`, limit];

pool.query(queryString, values)


// .then(res => {
//   console.log(res.rows);
// })
.then(res => {
  console.log('...CONNECTED')
  res.rows.forEach(user => {
    console.log(`${user.cohorts} : ${user.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));
/////////////////////
