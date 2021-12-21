from flask import Flask, render_template, jsonify, request, redirect, url_for
import pymysql
import jwt
import hashlib
from datetime import datetime, timedelta
import security

connect = security.connect
cursor = connect.cursor(pymysql.cursors.DictCursor)

SECRET_KEY = 'SPARTA'

app = Flask(__name__)

app.config["UPLOAD_FOLDER"] = "./static/profile_pics"

@app.route("/")
def home():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])

        sql = "SELECT * FROM users where id = '%s';"
        cursor.execute(sql%(payload["id"]))
        result = cursor.fetchone()
        del result['pw']

        return render_template('main.html', user_info=result)

    except jwt.ExpiredSignatureError:
        return render_template('main.html')
    except jwt.exceptions.DecodeError:
        return render_template('main.html') # msg="로그인 정보가 존재하지 않습니다."


@app.route("/header")
def header():
    return render_template("sidebar_header_flottingbtn.html")

@app.route("/footer")
def footer():
    return render_template("footer.html")

@app.route("/login")
def login():
    return render_template("login01.html")

@app.route("/login2")
def login2():
    return render_template("login02.html")

@app.route("/join")
def join():
    return render_template("join.html")

@app.route("/location")
def location():
    return render_template("location.html")

@app.route("/test")
def test():
    return render_template("test.html")

# Login Sever
@app.route('/sign_in', methods=['POST'])
def sign_in():
    # 로그인
    username_receive = request.form['username_give']
    password_receive = request.form['password_give']
    pw_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()

    sql = "SELECT id, pw FROM users"
    cursor.execute(sql)
    loginResult = cursor.fetchall()
    loginResultCount = loginResult.count({'id': username_receive, 'pw': pw_hash})

    if loginResultCount == 1:
        payload = {
         'id': username_receive,
         'exp': datetime.utcnow() + timedelta(seconds=60 * 60 * 24)  # 로그인 24시간 유지
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')

        return jsonify({'result': 'success', 'token': token})
    # 찾지 못하면
    else:
        return jsonify({'result': 'fail', 'msg': '아이디/비밀번호가 일치하지 않습니다.'})

# 회원가입 Server
@app.route('/sign_up/save', methods=['POST'])
def sign_up():

    username_receive = request.form['username_give']
    password_receive = request.form['password_give']
    password_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    name_receive = request.form['name_give']
    adminNum_receive = request.form['adminNum_give']
    gender_receive = request.form['gender_give']
    address_receive = request.form['address_give']
    detailAddress_receive = request.form['detailAddress_give']
    sigungu_receive = request.form['sigungu_give']

    sql = "insert into users(id,pw,name,admin_num,gender,address,address_detail,address_sigungu) values(%s,%s,%s,%s,%s,%s,%s,%s)"
    cursor.execute(sql,(username_receive,password_hash,name_receive,adminNum_receive,gender_receive,address_receive,detailAddress_receive,sigungu_receive))
    connect.commit()

    return jsonify({'result': 'success'})

# id 중복확인 Server
@app.route('/sign_up/check_dup', methods=['POST'])
def check_dup():
    username_receive = request.form['username_give']
    sql = "SELECT * FROM users where id = '%s';"
    cursor.execute(sql%(username_receive))
    result = bool(cursor.fetchone())
    return jsonify({'result': 'success', 'exists': result})

if __name__ == "__main__":
    app.run("0.0.0.0", port=5000, debug=True)
