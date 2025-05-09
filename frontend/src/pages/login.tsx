import { LoginForm } from "../components/login-form";


export const LoginPage: React.FC = ()=>{

    return (
      <div className="bg-black h-screen flex justify-center items-center">
        <LoginForm/>
      </div>
    );
}

export default LoginPage;