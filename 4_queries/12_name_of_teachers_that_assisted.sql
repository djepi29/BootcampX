SELECT DISTINCT teachers.name as name, cohorts.name as cohorts
FROM teachers 
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name  = 'JUL02'
ORDER BY teachers.name;