from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth_bp

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Placement Prep Backend Running"

app.register_blueprint(auth_bp)

if __name__ == "__main__":
    app.run(debug=True)