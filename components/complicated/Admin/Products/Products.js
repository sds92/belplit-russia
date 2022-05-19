import React from 'react';
import { AddProduct, Product, Navigation, Settings } from './components';
import { productsController } from 'utils/products.controller';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectToDeleteOptions,
  selectToDeleteProducts,
  clearToDeleteOptions,
  clearToDeleteProducts,
  clearCreatedOptions,
  clearCreatedProducts,
  setCreatedProducts,
  importInitProducts,
  updateProducts,
  selectPages,
  importInitPages,
  updatePages,
  setIsChanged,
  selectProductsInit,
} from 'redux/slices/productsSlice';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsInit);
  const toDeleteOptions = useSelector(selectToDeleteOptions);
  const toDeleteProducts = useSelector(selectToDeleteProducts);
  const pages = useSelector(selectPages);
  // const curProducts = useSelector(selectProducts);
  const [settings, setSettings] = React.useState(null);

  const getProducts = () => {
    fetch('api/products')
      .then((res) => res.json())
      .then((res) => {
        dispatch(importInitProducts(res));
      })
      .catch((err) => console.log(err));
  };
  const getPages = () => {
    fetch('api/pages')
      .then((res) => res.json())
      .then((res) => {
        dispatch(importInitPages(res));
      })
      .catch((err) => console.log(err));
  };

  const saveProducts = async (input) => {
    await fetch(`api/products`, {
      method: 'POST',
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'ok') {
          getProducts();
        }
      })
      .catch((err) => console.log(err));
  };
  const savePages = async (input) => {
    let _t = [];
    if (input) {
      _t = input;
    } else {
      _t = pages;
    }

    await fetch(`api/pages`, {
      method: 'POST',
      body: JSON.stringify(_t),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'ok') {
          getPages();
        }
      })
      .catch((err) => console.log(err));
  };

  function addProduct(a) {
    const [pr, pg, id] = productsController.addProduct(products, pages, a);
    dispatch(updateProducts(pr));
    dispatch(updatePages(pg));
    dispatch(setCreatedProducts(id));
    dispatch(setIsChanged(true));
  }

  function deleteProduct(id) {
    let _products = JSON.parse(JSON.stringify(products));
    let _pages = JSON.parse(JSON.stringify(pages));
    let product_position = null;
    let page_position = null;
    _products.find((item_i, i) => {
      if (item_i.id === id) {
        product_position = i;
        return true;
      }
    });
    _pages.find((item_ii, i) => {
      if (item_ii.content.product_id === parseInt(id)) {
        page_position = i;
        return true;
      }
    });
    _products.splice(product_position, 1);
    _pages.splice(page_position, 1);
    saveProducts(_products);
    savePages(_pages);
    dispatch(setIsChanged(false));
  }

  function handleSave(curProducts) {
    if (toDeleteOptions.length !== 0 || toDeleteProducts.length !== 0) {
      let _products = JSON.parse(JSON.stringify(curProducts));
      let _pages = JSON.parse(JSON.stringify(pages));
      Promise.all([
        toDeleteOptions.map((item) => {
          let product_position = null;
          let _product = _products.find((item_i, i) => {
            if (item_i.id === item.product_id) {
              product_position = i;
              return true;
            }
          });
          _product.options.splice(item.option_position, 1);

          _products.splice(product_position, 1, _product);
        }),
      ]).then(() => {
        dispatch(updateProducts(_products));
        dispatch(updatePages(_pages));
        dispatch(clearToDeleteOptions([]));
        dispatch(clearToDeleteProducts([]));
      });
      saveProducts(_products);
      savePages(_pages);
    } else {
      dispatch(clearCreatedOptions([]));
      dispatch(clearCreatedProducts([]));
      saveProducts(curProducts);
      savePages(pages);
    }
    dispatch(setIsChanged(false));
  }

  React.useEffect(() => {
    getProducts();
    getPages();
  }, []);

  return (
    <div className={`font-rc px-2 relative`}>
      <Navigation handleSave={handleSave} />
      <AddProduct addProduct={addProduct} />
      {products.map((item, i) => {
        let highlight = false;
        toDeleteProducts.map((item_i) => {
          if (item.id === item_i) {
            highlight = 'red';
          }
        });
        return (
          <div className={`mb-2 shadow-md`} key={`lfjkh${Math.random()}`}>
            <Product
              handleSettingsOpenState={(a) => {
                if (settings === i) {
                  setSettings(null);
                } else {
                  setSettings(i);
                }
              }}
              settings={settings === i}
              product={item}
              highlight={highlight}
              deleteProduct={deleteProduct}
              saveProducts={saveProducts}
              meta={pages.find((page) => page.content.product_id === item.id)}
              savePages={savePages}
            />
          </div>
        );
      })}
    </div>
  );
}
