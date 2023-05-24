from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', methods=['GET'])
def index():
    return jsonify({'output': 'Hello World!'})


@app.route('/predict', methods=['GET'])
def predict():
    n = int(request.args.get('n'))
    num_to_predict = int(request.args.get('num_to_predict'))
    context = str(request.args.get('context'))
    context_lst = context.split(' ')

    output = subprocess.check_output(['./cpp_program/bin/predict', str(n), str(num_to_predict)] + context_lst)

    return jsonify({'output': output.decode('utf-8').strip().split("\n")})


@app.route('/analyze', methods=['GET'])
def analyze():
    n = int(request.args.get('n'))
    num_to_predict = int(request.args.get('num_to_predict'))
    context = str(request.args.get('context'))
    context_lst = context.split(' ')

    output = subprocess.check_output(['./cpp_program/bin/predict', "-a", str(n), str(num_to_predict)] + context_lst)

    return jsonify({'output': output.decode('utf-8').strip().split("\n")})


@app.route('/train', methods=['GET'])
def train():
    n = int(request.args.get('n'))
    path = str(request.args.get('path'))

    output = subprocess.check_output(['./cpp_program/bin/train', f'{path}', str(n)])

    return jsonify({'output': output.decode('utf-8').strip().split("\n")})


if __name__ == '__main__':
    app.run(port=8080)
