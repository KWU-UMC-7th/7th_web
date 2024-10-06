import {useState} from 'react'

const M_Comp = ({ id, image }) => {
    const [isHovered, setIsHovered] = useState(false)
    const onMouseEnter = () => {setIsHovered(true)}
    const onMouseLeave = () => {setIsHovered(false)}
    
    const styles = {
        display: {
            position: 'relative',
            width: 'calc(10% - 20px)',
        },
        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '7px',
        },
        background: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '7px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

    return (
        <div
            style={styles.display}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
        <img
            style={styles.img}
            src={`https://image.tmdb.org/t/p/original/${image}`} 
        />
        <div style={styles.background}></div>
        </div>
    );
};

export default M_Comp;