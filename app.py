from flask import Flask, render_template, request, jsonify
import pyttsx3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    text = request.form['text']
    engine = pyttsx3.init()
    engine.save_to_file(text, 'static/output.mp3')
    engine.runAndWait()
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
