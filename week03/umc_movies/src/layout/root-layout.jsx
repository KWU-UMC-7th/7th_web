import React from 'react';
import {Outlet} from "react-router-dom";
import * as S from '../components/styles'; // 스타일이 정의된 파일 가져오기
import Navbar from "../components/navbar.jsx";
import { FaSearch } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";

const RootLayout = () => {
    return (
        <>
            {/* <Navbar/>
            <Outlet/> */}
            <S.Layout>
            <Navbar /> {/* 내비게이션 바 추가 */}
            <S.MainContainer>
                <S.Sidebar>
                {/* 사이드바 내용 (예: 링크 목록) */}
                <S.SearchContainer>
                <S.SideLink to="/search"> 
                    <FaSearch />
                    <p>검색</p>
                </S.SideLink>
                </S.SearchContainer>
                <S.SideLink to="/"> 
                <BiSolidCameraMovie />
                    <p>영화</p>
                </S.SideLink>
                </S.Sidebar>
                <S.Content>
                <Outlet /> {/* Outlet을 통해 자식 컴포넌트 렌더링 */}
                </S.Content>
            </S.MainContainer>
            </S.Layout>
                </>
    );
};

export default RootLayout;
