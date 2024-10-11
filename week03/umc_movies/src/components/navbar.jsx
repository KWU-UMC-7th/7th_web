// navbar.jsx
import { Link } from "react-router-dom";
import * as S from './styles';

const Navbar = () => {
    return (
        <S.navbar>
            <S.BrandLink to={'/'}>Lydia</S.BrandLink>
            <div>
                <S.LoginLink to={'/login'}>로그인</S.LoginLink>
                {<S.SignupBtn to={'/signup'}>회원가입</S.SignupBtn>}
            </div>
        </S.navbar>
    );
};

export default Navbar;
