import './Products.css'
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { FC } from 'react';
import { Select, Space, Rate } from 'antd';
import { Element } from 'react-scroll';
import productExample from '../../../assets/product-example.png'
import blackCart from '../../../assets/shopping-cart-black.png'

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        children,
        label,
        type,
    } as MenuItem;
}

const choices: MenuItem[] = [
    getItem('GENDER/AGE', 'sub1', [
        getItem('Men', '1'),
        getItem('Kids', '2'),
        getItem('Women', '3'),
        getItem('Baby', '4'),
        getItem('Big & Tall', '5'),
    ]),
    getItem('FEATURED DEPARTMENTS', 'sub2', [
        getItem('Option 5', '6'),
        getItem('Option 6', '7'),
        getItem('Option 7', '8'),
        getItem('Option 8', '9'),
    ]),
    getItem('TRENDING', 'sub3', [
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem('DEPARTMENT', 'sub4', [
        getItem('Option 13', '13'),
        getItem('Option 2', '14'),
        getItem('Option 3', '15'),
        getItem('Option 4', '16'),
    ]),
    getItem('PERSONALISED PRODUCTS', 'sub5', [
        getItem('Option 5', '17'),
        getItem('Option 6', '18'),
    ]),
    getItem('PLAYERS', 'sub6', [
        getItem('Option 9', '19'),
        getItem('Option 10', '20'),
        getItem('Option 11', '21'),
        getItem('Option 12', '22'),
    ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'];

// dropdown menu 



export const Products: FC = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <Element name='shopping'>
            <div className="container" id='products-container'>
                <div className="aside">
                    <Menu
                        className='aside-menu'
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        // style={{ width: 256 }}
                        items={choices}
                    />
                </div>
                <div className="items">
                    <div className="sort-item">
                        <p>sort by:</p>
                        <Space wrap />
                        <Select
                            defaultValue="ALL"
                            style={{ width: 130 }}
                            onChange={handleChange}
                            options={[
                                { value: 'top-seller', label: 'TOP SELLER' },
                                { value: 'most-stars', label: 'MOST STARS' },
                                { value: 'most-price', label: 'MOST PRICE' },
                                { value: 'least-price', label: 'LEAST PRICE' },
                            ]}
                        />
                    </div>
                    <div className="products">
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="top">
                                <img src={blackCart} className='product-cart' />
                                <img src={productExample} className='product-element' />
                            </div>
                            <div className="bottom">
                                <h3>$299.99</h3>
                                <p>Men's Mitchell & Ness Michael Jordan Red Chicago Bulls 1997-98 Hardwood Classics Authentic Player Jersey</p>
                                <Rate allowHalf defaultValue={5} disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
