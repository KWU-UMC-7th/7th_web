// Button.jsx_버튼 컴포넌트 분리 완료! 
import React from 'react';

const Button = ({ 
    onDelete, 
    onEditStart, 
    onEditComplete, 
    isEditing, 
    children 
}) => {
    return (
        <div>
            <button onClick={onDelete}>삭제하기</button>
            {isEditing ? (
                <button onClick={onEditComplete}>수정완료</button>
            ) : (
                <button onClick={onEditStart}>수정 진행</button>
            )}
        </div>
    );
};

export default Button;
