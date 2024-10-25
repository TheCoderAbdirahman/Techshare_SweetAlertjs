from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("main.html")

@app.route("/submit", methods=['Post'])
def post():
    answer = request.form.get('text')
    if answer == 'csci 5117':
        return {"value" : "correct!"}, 200 #correct
    else:
        return {"value" : "not correct, try again!"}, 400 #incorrect


if __name__ == '__main__':
    app.run(debug=True)