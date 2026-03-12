from flask import Blueprint, request, jsonify
from config import cursor, db

auth_bp = Blueprint("auth", __name__)

# Register
@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.json
    name = data["name"]
    email = data["email"]
    password = data["password"]
    role = data["role"]

    query = """
    INSERT INTO users (name,email,password,role)
    VALUES (%s,%s,%s,%s)
    """

    cursor.execute(query,(name,email,password,role))
    db.commit()

    return jsonify({"message":"User registered successfully"})


# Login
@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json
    email = data["email"]
    password = data["password"]

    query = "SELECT * FROM users WHERE email=%s AND password=%s"

    cursor.execute(query,(email,password))
    user = cursor.fetchone()

    if user:
        return jsonify({
            "message":"Login success",
            "role":user["role"],
            "name":user["name"]
        })
    else:
        return jsonify({"message":"Invalid credentials"}),401