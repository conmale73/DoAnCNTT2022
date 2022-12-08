import styles from "./productDetail.module.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import { productService } from '../../service/product.service';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailApi } from "../../redux/product/productsApi";
const ProductDetail = () => {
    const {productSlug} = useParams();
    document.title = "Product Detail";

    const dispatch = useDispatch();
    getProductDetailApi(dispatch, productSlug);
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await productService.getProductBySlug(productSlug);
            
    //         if (!response.ok) {
    //             console.log(response);
    //         }
    //         setProduct(response);
    //     }
    //     fetchData();
        
    // }, []);
    return (
        <div className={styles.productDetail}>
            <div className={styles.left}>
                <Left />
            </div>
            <div className={styles.right}>
                <Right />
            </div>
        </div>
    );
};
export default ProductDetail;
