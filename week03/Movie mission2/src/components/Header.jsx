import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="headercontainer">
            <div className="header-wrap">
                <div className="header-left-wrap">
                    <Link style={{display: 'flex', alignitems: 'center'}} to='/'>
                        <img
                            style={{ width: "154px", height: "20px"}}
                            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                            alt="로고"/>
                    </Link>
                    <ul>
                        <li>
                            <Link className="header-nav-item" to="/Login">
                                로그인
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to="/Membership">
                                회원가입
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
