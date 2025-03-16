CREATE TABLE Gymnasium (
    GymnasiumID INT PRIMARY KEY,
    Name VARCHAR(100),
    Address VARCHAR(255),
    PhoneNumber VARCHAR(15)
);

CREATE TABLE Member (
    MemberID INT PRIMARY KEY,
    LastName VARCHAR(50),
    FirstName VARCHAR(50),
    Address VARCHAR(255),
    DateOfBirth DATE,
    Gender CHAR(1),
    GymnasiumID INT,
    FOREIGN KEY (GymnasiumID) REFERENCES Gymnasium(GymnasiumID)
);

CREATE TABLE Session (
    SessionID INT PRIMARY KEY,
    SportType VARCHAR(50),
    Schedule DATETIME,
    MaxCapacity INT,
    GymnasiumID INT,
    FOREIGN KEY (GymnasiumID) REFERENCES Gymnasium(GymnasiumID)
);

CREATE TABLE Coach (
    CoachID INT PRIMARY KEY,
    LastName VARCHAR(50),
    FirstName VARCHAR(50),
    Age INT,
    Specialty VARCHAR(100)
);

CREATE TABLE Session_Member (
    SessionID INT,
    MemberID INT,
    PRIMARY KEY (SessionID, MemberID),
    FOREIGN KEY (SessionID) REFERENCES Session(SessionID),
    FOREIGN KEY (MemberID) REFERENCES Member(MemberID)
);

CREATE TABLE Session_Coach (
    SessionID INT,
    CoachID INT,
    PRIMARY KEY (SessionID, CoachID),
    FOREIGN KEY (SessionID) REFERENCES Session(SessionID),
    FOREIGN KEY (CoachID) REFERENCES Coach(CoachID)
);