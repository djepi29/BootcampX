SELECT assignments.id, day, chapter, name, COUNT(assistance_requests.id) as total_requests
FROM assignments 
JOIN assistance_requests ON assignments.id = assignment_id
GROUP By assignments.id
ORDER BY total_requests DESC;