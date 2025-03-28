-- Insert data into Customer table
INSERT INTO Customer (Customer_id, customer_name, customer_Tel)
VALUES 
('C01', 'ALI', '71321009'),
('C02', 'ASMA', '77345823');

-- Insert data into Product table
INSERT INTO Product (Product_id, product_name, category, Price)
VALUES 
('P01', 'Samsung Galaxy S20', 'Smartphone', 3299),
('P02', 'ASUS Notebook', 'PC', 4599);

-- Insert data into Orders table
INSERT INTO Orders (Customer_id, Product_id, OrderDate, quantity, total_amount)
VALUES 
('C01', 'P02', '2020-05-28', 2, 9198),
('C02', 'P01', '2020-05-28', 1, 3299),
('C01', 'P01', '2020-05-29', 1, 3299);