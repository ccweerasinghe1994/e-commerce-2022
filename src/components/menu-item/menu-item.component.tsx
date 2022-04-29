import { FC } from 'react';
import './menu-item.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`menu-item ${size}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
