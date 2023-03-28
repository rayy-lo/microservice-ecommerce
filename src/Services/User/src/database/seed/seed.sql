CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY (email)
);


INSERT INTO user (first_name, last_name, email, password_hash)
VALUES
  ('John', 'Doe', 'johndoe@example.com', 'somepasswordhash'),
  ('Jane', 'Smith', 'janesmith@example.com', 'anotherpasswordhash');

