USE todo_db;

INSERT INTO todos (todo_name, fk_category_name, todo_duedate, todo_completed, todo_deleted) 

VALUES ('Hike Machu Pichu', 'Adventure','01/01/01','0','0') 
,('travel to Span', 'Travel','01/01/01','1','0') 
,('Travel to Italy', 'Travel','01/01/01','0','0');

USE todo_db;

INSERT INTO userinfo (user_name, user_dob, user_status) 

VALUES ('John Smith', '01/01/01','1') 
,('Jane Smith', '01/01/01','1') 
,('Joe Smith', '01/01/01','1');

USE todo_db;

INSERT INTO category (category_name) 

VALUES ('Travel') 
,('Activity') 
,('Adventure') 
