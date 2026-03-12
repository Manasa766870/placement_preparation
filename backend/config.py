import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Manasa@123",
    database="placement_platform"
)

cursor = db.cursor(dictionary=True)