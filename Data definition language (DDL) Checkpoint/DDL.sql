-- 1. Create CUSTOMER table
CREATE TABLE CUSTOMER (
    Customer_ID NUMBER(10) PRIMARY KEY,
    Customer_Name VARCHAR2(50) NOT NULL,
    Customer_Address VARCHAR2(100),
    Customer_City VARCHAR2(50),
    Customer_State CHAR(2),
    Customer_Zip CHAR(10),
    Customer_Phone VARCHAR2(15)
);

-- 2. Create PRODUCT table
CREATE TABLE PRODUCT (
    Product_ID NUMBER(10) PRIMARY KEY,
    Product_Description VARCHAR2(100) NOT NULL,
    Product_Finish VARCHAR2(50),
    Standard_Price NUMBER(10,2),
    Product_Line_ID NUMBER(10)
);

-- 3. Create SUPPLIER table
CREATE TABLE SUPPLIER (
    Supplier_ID NUMBER(10) PRIMARY KEY,
    Supplier_Name VARCHAR2(50) NOT NULL,
    Supplier_Address VARCHAR2(100),
    Supplier_City VARCHAR2(50),
    Supplier_State CHAR(2),
    Supplier_Zip CHAR(10),
    Supplier_Phone VARCHAR2(15)
);

-- 4. Create ORDERS table
CREATE TABLE ORDERS (
    Order_ID NUMBER(10) PRIMARY KEY,
    Order_Date DATE,
    Customer_ID NUMBER(10) NOT NULL,
    CONSTRAINT fk_customer FOREIGN KEY (Customer_ID) REFERENCES CUSTOMER(Customer_ID)
);

-- 5. Create SUPPLY table
CREATE TABLE SUPPLY (
    Supplier_ID NUMBER(10),
    Product_ID NUMBER(10),
    Supply_Unit_Price NUMBER(10,2),
    CONSTRAINT pk_supply PRIMARY KEY (Supplier_ID, Product_ID),
    CONSTRAINT fk_supplier FOREIGN KEY (Supplier_ID) REFERENCES SUPPLIER(Supplier_ID),
    CONSTRAINT fk_product_supply FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID)
);

-- 6. Create ORDER_LINE table
CREATE TABLE ORDER_LINE (
    Order_ID NUMBER(10),
    Product_ID NUMBER(10),
    Ordered_Quantity NUMBER(10),
    CONSTRAINT pk_order_line PRIMARY KEY (Order_ID, Product_ID),
    CONSTRAINT fk_order FOREIGN KEY (Order_ID) REFERENCES ORDERS(Order_ID),
    CONSTRAINT fk_product_order FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID)
);




ALTER TABLE PRODUCT
ADD Category VARCHAR2(20);

ALTER TABLE ORDERS
ADD OrderDate DATE DEFAULT SYSDATE;