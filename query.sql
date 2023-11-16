-- membuat tabel
CREATE TABLE parent (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER REFERENCES parent(id)
);

-- memasukkan data kedalam tabel
INSERT INTO parent (id, name, parent_id) VALUES
(1, 'Zaki', 2),
(2, 'Ilham', NULL),
(3, 'Irwan', 2),
(4, 'Arka', 3);

-- join tabel
SELECT p1.id, p1.name, p2.name parent_name
FROM parent p1
LEFT JOIN parent p2 ON p2.id = p1.parent_id;