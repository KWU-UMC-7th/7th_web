import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 250px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #555;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #777;
    }
`;

const SignupPage = () => {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // 회원가입 로직을 추가하거나 여기에 API 호출을 할 수 있습니다.
        alert("회원가입이 완료되었습니다!");
        navigate('/');
    };

    return (
        <h1>회원가입 페이지</h1>
    );
};

export default SignupPage;
