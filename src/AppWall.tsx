import {ReactNode} from 'react';

type AppWallProps = {
    borderStyle?: string;
    borderColor?: string;
    borderWidth?: string;
    padding?: string;
    children: ReactNode;
};

const AppWall = (props: AppWallProps) => {
    const appWallStyle: React.CSSProperties = {
        display: 'flex',
        backgroundColor: 'gray',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: '20px',
        borderWidth: '4px',
        padding: '20px',
        margin: '50px auto',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width: '40vw',
        flexDirection: 'column',
        gap: '100px',
    };

    return <div style={appWallStyle}>{props.children}</div>;
};


export default AppWall;