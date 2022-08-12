import React from 'react';
// componente Link:
import { Link } from 'react-router-dom';
// importa styled component específico para esta página:
import { CategoryItem } from './style';
// Interfaces de tipo:
interface IProps {
  properties: {
    [key: string]: string;
  };
}

function Category({ properties }: IProps) {
  const { name, className, imgSrc } = properties;

  return (
    <Link to={`/products#${className}`} className={className}>
      <CategoryItem>
        <img src={imgSrc} alt={className} />
        <div className="text">
          <h2>{name}</h2>
          <p>comprar agora!</p>
        </div>
      </CategoryItem>
    </Link>
  );
}

export default Category;
