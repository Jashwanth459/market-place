use market_place;

-- Register Queries (Update query)
-- Super Admin
INSERT INTO customer(User_id, User_name, User_type, User_password)
values ('user_2', 'sa@mavs.uta.edu', 'super_adm', 'Password@123');
INSERT INTO super_admin(sua_id, User_name, FName, LName, Mobile, Mail_id, Address)
values ('sua_1', 'sa@mavs.uta.edu', 'John', 'Smith', '+17778889999', 'sa@mavs.uta.edu', 'Arlington, Texas, 76013');

-- School Admin
INSERT INTO customer(User_id, User_name, User_type, User_password)
values ('user_3', 'scha@mavs.uta.edu', 'sch_adm', 'Password@123');
INSERT INTO school_admin(s_id, User_name, FName, LName, Mobile, Mail_id, Address, school_name, sua_user_name)
values ('scha_1', 'scha@mavs.uta.edu', 'Nate', 'Richardson', '+17778889999', 'scha@mavs.uta.edu', 'Arlington, Texas, 76013', 'Arl Public School', 'sa@mavs.uta.edu');

-- Business Owner
INSERT INTO customer(User_id, User_name, User_type, User_password)
values ('user_4', 'bo@mavs.uta.edu', 'bo', 'Password@123');
INSERT INTO business_owner(Bo_id, User_name, FName, LName, Mobile, Mail_id, Address, Business_name, sua_user_name, s_user_name)
values ('st_1', 'bo@mavs.uta.edu', 'Nicholas', 'A', '+17778889999', 'bo@mavs.uta.edu', 'Arlington, Texas, 76013', 'Nic brands', 'sa@mavs.uta.edu', 'scha@mavs.uta.edu');

-- Student
INSERT INTO customer(User_id, User_name, User_type, User_password)
values ('user_1', 'student@mavs.uta.edu', 'student', 'Password@123');
INSERT INTO student(student_id, User_name, FName, LName, Major, Mobile, Mail_id, Address, sua_user_name, s_user_name)
values ('st_1', 'student@mavs.uta.edu', 'David', 'Nate', 'Computer Science', '+17778889999', 'student@mavs.uta.edu', 'Arlington, Texas, 76013', 'sa@mavs.uta.edu', 'scha@mavs.uta.edu');

select * from customer;

-- User validation
select user_type from customer where User_name = 'student@mavs.uta.edu' and User_Password = 'Password@123';
-- From above query get user_type and hit respective table
select * from student where User_name = 'student@mavs.uta.edu';

-- Contact page
INSERT INTO customer_queries(query_id, query_user_name, FName, LName, mail_id, Ph_no, query_message)
values ('query_1', 'student@mavs.uta.edu', 'David', 'Nate', 'student@mavs.uta.edu', '+17778889999', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
INSERT INTO customer_queries(query_id, query_user_name, FName, LName, mail_id, Ph_no, query_message)
values ('query_2', 'student@mavs.uta.edu', 'David', 'Nate', 'student@mavs.uta.edu', '+17778889999', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
select * from customer_queries;

-- Adding Posts
INSERT INTO posts(post_id, post_name, post_description, post_creation_date, post_url, post_img, owner_user_name)
values ('post_1', 'HomeComing Parade', 'Grand event in Arlington, texas', '2022-10-28', null, 'http://sxp2005.uta.cloud/static/media/homecoming.90f5c6c682e27fdd9db5.jpg', 'student@mavs.uta.edu');
INSERT INTO posts(post_id, post_name, post_description, post_creation_date, post_url, post_img, owner_user_name)
values ('post_2', 'Fall Festival', 'Lot more events at the same time and place.', '2022-10-28', null, 'http://sxp2005.uta.cloud/static/media/fall-festival.a6cede6d0df141b857de.png', 'student@mavs.uta.edu');
INSERT INTO posts(post_id, post_name, post_description, post_creation_date, post_url, post_img, owner_user_name)
values ('post_3', 'Reflect on your time as a student so far', 'Let’s face it, you’ve probably been a student for a while if you include all of your time at school, college and university (etc). So, therefore, you should write about your personal experiences. Document all of the life lessons you’ve learnt a long the way.', '2022-10-28', null, 'https://blog.trello.com/hubfs/Student-final.png', 'student@mavs.uta.edu');
INSERT INTO posts(post_id, post_name, post_description, post_creation_date, post_url, post_img, owner_user_name)
values ('post_4', 'A day in the life of ‘a student’', 'Readers love ‘day in the life’ posts/videos on Youtube. Why not share your average day? Things to include: your daily morning and night routine, things you like to eat and your study/work schedule.', '2022-10-28', null, 'https://blog.trello.com/hubfs/Student-final.png', 'student@mavs.uta.edu');
select * from posts;

-- Business Owner Promotions
INSERT INTO promotions(pm_id, pm_name, pm_description, pm_img, pm_url, owner_user_name)
values ('pm_1', 'Smart Band 4', 'The MI Smart Band 4 features larger display AMOLED color full touch.', 'http://sxp2005.uta.cloud/static/media/exclusive.88481f6215493b2979a7.png', '', 'bo@mavs.uta.edu');
INSERT INTO promotions(pm_id, pm_name, pm_description, pm_img, pm_url, owner_user_name)
values ('pm_2', '2020 Conference', 'DesignOps Global Conference 202 Manchester', 'http://sxp2005.uta.cloud/static/media/google.6ab46f047926be0bed4b.webp', '', 'bo@mavs.uta.edu');
INSERT INTO promotions(pm_id, pm_name, pm_description, pm_img, pm_url, owner_user_name)
values ('pm_3', 'ICS Conference', 'CyberSecurity Conference', 'http://sxp2005.uta.cloud/static/media/ics.59ef3de7e4b782925822.jpg', '', 'bo@mavs.uta.edu');

select * from promotions;

-- Business Owner Products
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_1', 'Red Printed Tshirt', 'Red Printed Tshirt', 2, 50.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-1.e05936f223ba90a97ce9.jpg', 'http://sxp2005.uta.cloud/static/media/product-1.e05936f223ba90a97ce9.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_2', 'Red Printed Tshirt', 'Red Printed Tshirt', 2, 50.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-1.e05936f223ba90a97ce9.jpg', 'http://sxp2005.uta.cloud/static/media/product-1.e05936f223ba90a97ce9.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_3', 'HRX Sport Shoes', 'HRX Sport Shoes', 2, 50.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-2.7e62a954384ddbbbd545.jpg', 'http://sxp2005.uta.cloud/static/media/product-2.7e62a954384ddbbbd545.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_4', 'Jogger', 'Jogger', 2, 50.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-3.52df8efd95ada6fdb38a.jpg', 'http://sxp2005.uta.cloud/static/media/product-3.52df8efd95ada6fdb38a.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_5', 'Sneakers', 'Sneakers', 2, 50.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-5.afcb7f8f871094c3cd9c.jpg', 'http://sxp2005.uta.cloud/static/media/product-5.afcb7f8f871094c3cd9c.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_6', 'Nike T', 'Nike T', 2, 50.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-6.d1d76a9949ec05a60966.jpg', 'http://sxp2005.uta.cloud/static/media/product-6.d1d76a9949ec05a60966.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_7', 'HRX Socks', 'HRX Socks', 2, 20.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-7.d15b9e56e695c7596e39.jpg', 'http://sxp2005.uta.cloud/static/media/product-7.d15b9e56e695c7596e39.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_8', 'Fossel Watch', 'Fossel Watch', 4, 99.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-7.d15b9e56e695c7596e39.jpg', 'http://sxp2005.uta.cloud/static/media/product-7.d15b9e56e695c7596e39.jpg', 'bo@mavs.uta.edu', '4.0', 'trending');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_9', 'S Watch', 'S Watch', 4, 99.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-9.8c1896b2666fedf56c24.jpg', 'http://sxp2005.uta.cloud/static/media/product-9.8c1896b2666fedf56c24.jpg', 'bo@mavs.uta.edu', '4.0', 'trending');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_10', 'Sparx Shoes', 'Sparx Shoes', 4, 19.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-10.f0246c2afd3577025b37.jpg', 'http://sxp2005.uta.cloud/static/media/product-10.f0246c2afd3577025b37.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_11', 'Loafers', 'Loafers', 4, 29.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-11.b68ca8f47a00b8541eef.jpg', 'http://sxp2005.uta.cloud/static/media/product-11.b68ca8f47a00b8541eef.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_12', 'Nike Track Pants', 'Nike Track Pants', 4, 14.90, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/product-12.1d65447547a0d6bb7d19.jpg', 'http://sxp2005.uta.cloud/static/media/product-12.1d65447547a0d6bb7d19.jpg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_13', 'Ipad', 'Ipad', 2, 499.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/ipad.a2f176eafbc23a486bb8.jpg', 'http://sxp2005.uta.cloud/static/media/ipad.a2f176eafbc23a486bb8.jpg', 'bo@mavs.uta.edu', '4.0', 'tech');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_14', 'iPhone', 'iPhone', 3, 899.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/iphone.ab2dc5ac157f59de1673.jpg', 'http://sxp2005.uta.cloud/static/media/iphone.ab2dc5ac157f59de1673.jpg', 'bo@mavs.uta.edu', '4.0', 'tech');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_15', 'Airpads Pro', 'Airpads Pro', 3, 120.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/white-airpods.6276a9ceec6c34c4212f.jpg', 'http://sxp2005.uta.cloud/static/media/white-airpods.6276a9ceec6c34c4212f.jpg', 'bo@mavs.uta.edu', '4.0', 'tech');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_16', 'UTA tshirt', 'UTA tshirt', 3, 10.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/tshirt.37718285e9ea70790aed.png', 'http://sxp2005.uta.cloud/static/media/tshirt.37718285e9ea70790aed.png', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_17', 'Notebook', 'Notebook', 3, 10.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/notebook.9c4c3f27cb8da6a15b7c.png', 'http://sxp2005.uta.cloud/static/media/notebook.9c4c3f27cb8da6a15b7c.png', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_18', 'Printer', 'Printer', 3, 10.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/printers.1b4cd02c43723c741adc.png', 'http://sxp2005.uta.cloud/static/media/printers.1b4cd02c43723c741adc.png', 'bo@mavs.uta.edu', '4.0', 'tech');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_19', 'Notebook', 'Notebook', 3, 10.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/printers.1b4cd02c43723c741adc.png', 'http://sxp2005.uta.cloud/static/media/printers.1b4cd02c43723c741adc.png', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_20', 'UTA Blue Tshirt', 'UTA Blue Tshirt', 3, 12.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/tshirt.7afe7acd60d43e492d6d.jpeg', 'http://sxp2005.uta.cloud/static/media/tshirt.7afe7acd60d43e492d6d.jpeg', 'bo@mavs.uta.edu', '4.0', 'latest');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_21', 'HP Printer', 'HP Printer', 3, 12.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/printers.1b4cd02c43723c741adc.png', 'http://sxp2005.uta.cloud/static/media/printers.1b4cd02c43723c741adc.png', 'bo@mavs.uta.edu', '4.0', 'tech');
INSERT INTO products(p_id, p_name, p_description, quantity, price_per_unit, p_creation_date, p_url, p_img, owner_user_name, rating, category)
values ('product_22', '2021 Apple iPad Mini (Wi-Fi)', 'Color: Black, 64 GB', 3, 599.0, '2022-10-28', 'http://sxp2005.uta.cloud/static/media/ipad.a2f176eafbc23a486bb8.jpg', 'http://sxp2005.uta.cloud/static/media/ipad.a2f176eafbc23a486bb8.jpg', 'bo@mavs.uta.edu', '4.0', 'tech');

-- Product categories - latest, trending, tech
select * from products;

-- Clubs
INSERT INTO club (club_id, club_name, club_description, owner_user_name, club_creation_date, club_img)
values('club_1', 'Mavericks', 'Where maverick activities start emerging', 'student@mavs.uta.edu', '2022-10-28', 'http://sxp2005.uta.cloud/static/media/mavericks.3b02348b7cf4b9491b91.png');
INSERT INTO club (club_id, club_name, club_description, owner_user_name, club_creation_date, club_img)
values('club_2', 'Student Club', 'Study activities happen', 'student@mavs.uta.edu', '2022-10-28', 'http://sxp2005.uta.cloud/static/media/student-club.0c426d906c7289cec6b3.png');
INSERT INTO club (club_id, club_name, club_description, owner_user_name, club_creation_date, club_img)
values('club_3', 'UTA Club', 'University activites club', 'student@mavs.uta.edu', '2022-10-28', 'http://sxp2005.uta.cloud/static/media/uta%20logo.9a48a65d69dfa5987c2c.png');

SELECT * FROM club;

-- Students in Club
INSERT INTO club_students(club_id, st_user_name, st_joined_date)
values ('club_1', 'student@mavs.uta.edu', '2022-10-28');
INSERT INTO club_students(club_id, st_user_name, st_joined_date)
values ('club_2', 'student@mavs.uta.edu', '2022-10-28');
select * from club_students;

-- Student Cart
INSERT INTO student_cart
values('student@mavs.uta.edu', 'product_1', 1);
INSERT INTO student_cart
values('student@mavs.uta.edu', 'product_2', 3);
INSERT INTO student_cart
values('student@mavs.uta.edu', 'product_12', 2);
INSERT INTO student_cart
values('student@mavs.uta.edu', 'product_19', 3);
INSERT INTO student_cart
values('student@mavs.uta.edu', 'product_22', 1);
select * from student_cart;

-- Student orders
INSERT INTO student_orders
values ('order_1', '2022-10-28', 200, 'success', '1-1-1');
INSERT INTO student_orders
values ('order_2', '2022-10-28', 300, 'pending', '1-1-1');
INSERT INTO student_orders
values ('order_3', '2022-10-28', 300, 'process', '1-1-1');
INSERT INTO student_orders
values ('order_4', '2022-10-20', 300, 'In-return', '2022-10-28');

select * from student_orders;

-- Student Order with Products
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_1', 'product_1', 2);
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_1', 'product_20', 2);
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_1', 'product_2', 2);
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_2', 'product_5', 2);
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_2', 'product_6', 2);
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_2', 'product_7', 2);
select * from student_order_products;
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_3', 'product_15', 2);
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_3', 'product_16', 2);
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_3', 'product_17', 2);
select * from student_order_products;
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_4', 'product_7', 2);
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_4', 'product_8', 2);
INSERT INTO student_order_products
values ('student@mavs.uta.edu', 'order_4', 'product_9', 2);
select * from student_order_products;

-- Student Cart
INSERT INTO student_cart
values ('student@mavs.uta.edu', 'product_20', 2);
INSERT INTO student_cart
values ('student@mavs.uta.edu', 'product_18', 2);