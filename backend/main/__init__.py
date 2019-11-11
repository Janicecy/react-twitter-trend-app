from flask import render_template, jsonify
from flask import Blueprint

from TrendSearcher import TrendSearcher
main = Blueprint('main', __name__, template_folder='templates', static_folder='static', static_url_path="/static")

@main.route('/', defaults={'path': ''})
@main.route('/<path:path>')
def index(path):
    return render_template('index.html')


@main.route('/<code>', methods=['GET', ])
def get_trends_by_country_name(code):
    return jsonify(status="success", trends=TrendSearcher().get_trends_by_country_code(code))
