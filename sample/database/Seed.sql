INSERT INTO User (id, first_name, last_name, occupation)
VALUES 
('T', 'Tyler', 'Youngs', 'Data Engineer'),
('F', 'Frank', 'Mensa', 'Student');

INSERT INTO Experience (user_id, title, content)
VALUES
(
    'T',
    'C++',
    'My undergrad classes were in C++, data structures and algorithms. My undergrad classes were in C++, data structures and algorithms. My undergrad classes were in C++, data structures and algorithms. My undergrad classes were in C++, data structures and algorithms. '
),
(
    'T',
    'Python',
    'The majority of my work post graduation has been in python. The majority of my work post graduation has been in python. The majority of my work post graduation has been in python. The majority of my work post graduation has been in python. The majority of my work post graduation has been in python.'
),
(
    'T',
    'Google Cloud Platform',
    'Bigquery, cloud functions, Pub/Sub, Monitoring'
),
(
    'T',
    'Azure',
    'Azure Data Factory, Azure Functions, Kubernetes, Networking'
),
(
    'T',
    'Databricks',
    'FHIR Processing'
),
(
    'T',
    'Other',
    'Monitoring'
),
(
    'F',
    'JavaFx',
    'Cool Connect 4 app'
);
