from flask import Flask, request
import re
app = Flask(__name__)


def answer(q):
    print(q)
    addition_matcher = re.search(".*what is the sum of (\\d+) and (\\d+)", q)
    if addition_matcher:
        return str(int(addition_matcher.group(1)) + int(addition_matcher.group(2)))

    return "My Team"


@app.route("/")
def do_get():
    print("A request has arrived")
    q = request.args.get("q", "")
    return answer(q)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
