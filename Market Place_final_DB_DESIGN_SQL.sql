use market_place;

CREATE TABLE IF NOT EXISTS customer (
   User_id VARCHAR(10) NOT NULL,
   User_name VARCHAR(20) NOT NULL,
   User_type VARCHAR(10) NOT NULL,
   User_password VARCHAR(20) NOT NULL,
   PRIMARY KEY (User_name)
);

CREATE TABLE IF NOT EXISTS super_admin (
    sua_id VARCHAR(10) NOT NULL,
    User_name VARCHAR(20) NOT NULL,
    FName VARCHAR(20) NOT NULL,
    LName VARCHAR(20),
    Mobile varchar(15),
    Mail_id VARCHAR(30),
    Address VARCHAR(100),
    PRIMARY KEY (User_name),
    FOREIGN KEY(User_name) REFERENCES customer(User_name)
);

CREATE TABLE IF NOT EXISTS school_admin (
    s_id VARCHAR(10) NOT NULL,
    User_name VARCHAR(20) NOT NULL,
    FName VARCHAR(20) NOT NULL,
    LName VARCHAR(20),
    Mobile varchar(15),
    Mail_id VARCHAR(30),
    Address VARCHAR(100),
    school_name VARCHAR(50),
    sua_user_name VARCHAR(20),
    PRIMARY KEY (User_name),
    FOREIGN KEY(User_name) REFERENCES customer(User_name),
    FOREIGN KEY(sua_user_name) REFERENCES super_admin(User_name)
);

CREATE TABLE IF NOT EXISTS student (
    student_id VARCHAR(10) NOT NULL,
    User_name VARCHAR(20) NOT NULL,
    FName VARCHAR(20) NOT NULL,
    LName VARCHAR(20),
    Major VARCHAR(50),
    Mobile varchar(15),
    Mail_id VARCHAR(30),
    Address VARCHAR(100),
    sua_user_name VARCHAR(20),
    s_user_name VARCHAR(20),
    PRIMARY KEY (User_name),
    FOREIGN KEY(User_name) REFERENCES customer(User_name),
    FOREIGN KEY(sua_user_name) REFERENCES super_admin(User_name),
    FOREIGN KEY(s_user_name) REFERENCES school_admin(User_name)
);

CREATE TABLE IF NOT EXISTS posts (
    post_id varchar(10) NOT NULL,
    post_name varchar(100) NOT NULL,
    post_description varchar(500),
    post_creation_date date,
    post_url varchar(100),
    post_img varchar(100),
    owner_user_name VARCHAR(20),
    PRIMARY KEY (post_id),
    FOREIGN KEY(owner_user_name) REFERENCES student(User_name)
);

CREATE TABLE IF NOT EXISTS business_owner (
    Bo_id VARCHAR(10) NOT NULL,
    User_name VARCHAR(20) NOT NULL,
    FName VARCHAR(20) NOT NULL,
    LName VARCHAR(20),
    Mobile varchar(15),
    Mail_id VARCHAR(30),
    Address VARCHAR(100),
    Business_name VARCHAR(50),
    sua_user_name VARCHAR(20),
    s_user_name VARCHAR(20),
    PRIMARY KEY (User_name),
    FOREIGN KEY(User_name) REFERENCES customer(User_name),
    FOREIGN KEY(sua_user_name) REFERENCES super_admin(User_name),
    FOREIGN KEY(s_user_name) REFERENCES school_admin(User_name)
);


CREATE TABLE IF NOT EXISTS promotions (
    pm_id varchar(10) NOT NULL,
    pm_name varchar(100) NOT NULL,
    pm_description varchar(500),
    pm_img varchar(100),
    pm_url varchar(100),
    owner_user_name VARCHAR(20),
    PRIMARY KEY (pm_id),
    FOREIGN KEY(owner_user_name) REFERENCES business_owner(User_name)
);


CREATE TABLE IF NOT EXISTS products (
    p_id varchar(10) NOT NULL,
    p_name varchar(100) NOT NULL,
    p_description varchar(500),
    quantity Integer,
    price_per_unit Decimal,
    p_creation_date date,
    p_url varchar(100),
    p_img varchar(100),
    owner_user_name VARCHAR(20),
    rating varchar(10),
    category varchar(20),
    PRIMARY KEY (p_id),
    FOREIGN KEY(owner_user_name) REFERENCES business_owner(User_name)
);

CREATE TABLE IF NOT EXISTS student_cart (
    student_user_name varchar(20) NOT NULL,
    p_id varchar(10),
    quantity int,
    PRIMARY KEY(student_user_name, p_id),
    FOREIGN KEY(student_user_name) REFERENCES student(User_name),
    FOREIGN KEY(p_id) REFERENCES products(p_id)
);

CREATE TABLE IF NOT EXISTS student_orders (
    order_id varchar(20) NOT NULL,
    ordered_date date,
    total_price int null default null,
    status varchar(10),
    return_date date,
    PRIMARY KEY (order_id)
);

CREATE TABLE IF NOT EXISTS student_order_products (
    student_user_name varchar(20) not null,
    order_id varchar(10) not null,
    product_id varchar(10) not null,
    p_quantity int,
    PRIMARY KEY(student_user_name, product_id, order_id),
    FOREIGN KEY(student_user_name) REFERENCES student(User_name),
    FOREIGN KEY(product_id) REFERENCES products(p_id),
    FOREIGN KEY(order_id) REFERENCES student_orders(order_id)
);

CREATE TABLE IF NOT EXISTS chat_box (
    chat_id varchar(10) not null,
    chat_content text null default null,
    sender varchar(20),
    receiver varchar(20),
    time_stamp date,
    PRIMARY KEY (chat_id),
    FOREIGN KEY(sender) REFERENCES customer(user_name),
    FOREIGN KEY(receiver) REFERENCES customer(user_name)
);

CREATE TABLE IF NOT EXISTS customer_queries (
    query_id varchar(10) not null,
    query_user_name varchar(20) not null,
    FName varchar(20),
    LName varchar(20),
    mail_id varchar(20),
    ph_no varchar(15),
    query_message varchar(500),
    PRIMARY KEY(query_id),
    FOREIGN KEY(query_user_name) references student(User_name)
);

CREATE TABLE IF NOT EXISTS club (
    club_id varchar(10) not null,
    club_name varchar(100) not null,
    club_description varchar(500),
    owner_user_name varchar(20),
    club_creation_date date,
    club_img varchar(100),
    PRIMARY KEY(club_id),
    FOREIGN KEY(owner_user_name) REFERENCES customer(User_name)
);

CREATE TABLE IF NOT EXISTS club_students (
    club_id varchar(10) not null,
    st_user_name varchar(20) not null,
    st_joined_date date,
    PRIMARY KEY(club_id, st_user_name),
    FOREIGN KEY(club_id) REFERENCES club(club_id),
    FOREIGN KEY(st_user_name) REFERENCES student(User_name)
);