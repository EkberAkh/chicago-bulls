import "./Products.css";
import React, { useEffect,useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import axios from "axios";

import { FC } from "react";
import { Select, Space, Rate } from "antd";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import ProductItem from "./ProductItem";
import matchshirt from "../../../assets/product-example.png";
import baby from "../../../assets/baby.png";
import backpack from "../../../assets/backpack.png";
import ball from "../../../assets/ball.png";
import cap from "../../../assets/cap.png";
import longshirt from "../../../assets/longshirt.png";
import shorts from "../../../assets/shorts.png";
import tshirt from "../../../assets/tshirt.png";


interface Product {
  img: any;
  price: number;
  id: number;
  description: string;
  rating: number;

}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];





export const Products: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 9;

  useEffect(() => {
    axios
      .get("http://localhost:8080/products-list")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const [openKeys, setOpenKeys] = useState([""]);
  const { t } = useTranslation();
  const choices: MenuItem[] = [
    getItem(t("GENDERAGE"), "sub1", [
      getItem(t("MEN"), "1"),
      getItem(t("KIDS"), "2"),
      getItem(t("WOMEN"), "3"),
      getItem(t("BABY"), "4"),
      getItem(t("BIGTALL"), "5"),
    ]),
    getItem(t("FEATURED"), "sub2", [
      getItem("Option 5", "6"),
      getItem("Option 6", "7"),
      getItem("Option 7", "8"),
      getItem("Option 8", "9"),
    ]),
    getItem(t("TRENDING"), "sub3", [
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem(t("DEPARTMENT"), "sub4", [
      getItem("Option 13", "13"),
      getItem("Option 2", "14"),
      getItem("Option 3", "15"),
      getItem("Option 4", "16"),
    ]),
    getItem(t("PERSONALIZED"), "sub5", [
      getItem("Option 5", "17"),
      getItem("Option 6", "18"),
    ]),
    getItem(t("PLAYERS"), "sub6", [
      getItem("Option 9", "19"),
      getItem("Option 10", "20"),
      getItem("Option 11", "21"),
      getItem("Option 12", "22"),
    ]),
  ];

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find(
      (key) => openKeys.indexOf(key) === -1
    );
    if (
      latestOpenKey &&
      rootSubmenuKeys.indexOf(latestOpenKey!) === -1
    ) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(
        latestOpenKey ? [latestOpenKey] : []
      );
    }
  };

  const totalPages = Math.ceil(
    products.length / productsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const getImageForProduct = (productId: number) => {
    const images = [
      matchshirt,
      baby,
      backpack,
      ball,
      cap,
      longshirt,
      shorts,
      tshirt,
    ];

    return images[productId % images.length];
  };

  return (
    <Element name="shopping">
      <div className="container" id="products-container">
        <div className="aside">
          <Menu
            className="aside-menu"
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={choices}
          />
        </div>
        <div className="items">
          <div className="sort-item">
            <p>{t("SORTBY")}:</p>
            <Space wrap />
            <Select
              defaultValue={t("ALL")}
              style={{ width: 100 }}
              onChange={handleChange}
              options={[
                { value: "top-seller", label: t("TOPSELLER") },
                { value: "most-stars", label: t("MOSTSTARS") },
                { value: "most-price", label: t("MOSTPRICE") },
                { value: "least-price", label: t("LEASTPRICE") },
              ]}
            />
          </div>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <>
              <div className="products">
                {paginatedProducts.map((product) => (
                  <ProductItem
                    key={product.id}
                    price={product.price}
                    productImg={getImageForProduct(product.id)}
                    rating={product.rating}
                    about={product.description}
                  />
                ))}
              </div>
              <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={
                      currentPage === index + 1 ? "active" : ""
                    }
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Element>
  );
};



