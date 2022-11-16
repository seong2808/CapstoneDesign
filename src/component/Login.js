
export default function Login() {
    return (
      <div className="Login">
  
        <h2>로그인</h2>
        
        <div className="Login_user">
            <div>
                <input label="이메일" name="email" placeholder="이메일"/>
            </div>
            <div>
                <input label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
            </div>
            <button>로그인</button>
            <button>회원가입</button>
        </div>
        
      </div>
    );
  }