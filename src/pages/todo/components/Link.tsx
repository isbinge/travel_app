import React from 'react';
import { Button } from 'antd';
interface LinkProps {
    active: boolean;
    onClick: () => void;
}
export const Link: React.FC<LinkProps> = ({ active, children, onClick }) => {
    return (
        <Button onClick={onClick} disabled={active}>
            {children}
        </Button>
    );
};

export default Link;
