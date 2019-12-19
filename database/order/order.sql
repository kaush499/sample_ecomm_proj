CREATE TABLE orders (
    orderId INTEGER PRIMARY KEY AUTO_INCREMENT,
    userId INTEGER NOT NULL,
    billDate TIMESTAMP DEFAULT NOW(),
    shipDate DATETIME,
    delivery_status BOOLEAN DEFAULT false,
    transactionId INTEGER NOT NULL,
    requiredDate DATETIME,
    FOREIGN KEY(userId) REFERENCES user(userId),
    FOREIGN KEY(transactionId) REFERENCES transactions(transactionId)
);