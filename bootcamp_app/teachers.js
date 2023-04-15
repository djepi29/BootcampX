const { Pool } = require('pg');

const pool = new Pool({
  user: 'djepi',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohorts
FROM teachers 
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name  = '${process.argv[2] || 'JUL02'}'
ORDER BY teachers.name
LIMIT 8;
`)
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