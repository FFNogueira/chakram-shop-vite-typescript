import React from 'react';
import { useLocation } from 'react-router-dom';
// react-icons:
import { FaArrowUp } from 'react-icons/fa';
// react-spinner:
import MoonLoader from 'react-spinners/MoonLoader';
// Estilos desta página:
import { Page } from './style';
// Componentes:
import ProductList from '../../components/product-list';
// serviço Firestore:
import { getAllDocs } from '../../services/firebase';
// interfaces de tipo:
import { ItemList, IErrorData } from '../../services/interfaces';

function Products() {
  // Variáveis de estado:
  const [itemsLists, setItemsLists] = React.useState<ItemList[]>([]);
  const [display, setDisplay] = React.useState('none');
  // useLocation:
  const { hash } = useLocation();
  // Carrega as listas de produtos do banco de dados:
  React.useEffect(() => {
    async function getItemsLists() {
      // tenta obter as listas de produtos:
      const listsData = await getAllDocs('categories');
      // se obteve os dados sem erros:
      if (!(listsData as IErrorData).errors) {
        // carrege os produtos na página:
        setItemsLists(listsData as ItemList[]);
        // se deseja fazer scroll para uma categoria de produto específica:
        if (hash !== '') {
          // espera 300ms (carregamento dos produtos na página):
          setTimeout(() => {
            const productCategory = document.querySelector(hash);
            if (productCategory) {
              productCategory.scrollIntoView();
            }
          }, 200);
        }
      }
    }
    getItemsLists();
  }, [hash]);

  // trata evento de rolar a página:
  const handleScrollPage = () => {
    setDisplay(window.scrollY >= 1067 ? 'inline-block' : 'none');
  };

  // Aciona o evento listener de rolagem de página:
  React.useEffect(() => {
    document.addEventListener('scroll', handleScrollPage);
    return () => {
      document.removeEventListener('scroll', handleScrollPage);
    };
  }, []);

  return (
    <Page>
      <button
        type="button"
        className="to-top-button"
        style={{ display }}
        onClick={() =>
          (document.querySelector('.navbar') as HTMLDivElement).scrollIntoView()
        }
      >
        <FaArrowUp size="20px" />
      </button>
      {itemsLists.length > 0 ? (
        itemsLists.map((itemList) => (
          <ProductList key={itemList.title} itemList={itemList} />
        ))
      ) : (
        <div className="loader-container">
          <MoonLoader size="150px" />
        </div>
      )}
    </Page>
  );
}

export default Products;
