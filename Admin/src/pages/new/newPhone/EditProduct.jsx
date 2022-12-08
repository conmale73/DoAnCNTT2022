import "../new.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import {
    productInputs,
    typeProduct,
    userInputs,
    phoneProduct,
    laptopProduct,
    typeAccessory,
    watchProduct,
    smartWatchProduct,
} from "../../../formSource";
import { renderMatches, useParams } from "react-router-dom";
import { ProductService } from "~/services";

const EditProduct = ({ inputs, title }) => {
    const param = useParams();
    const [file, setFile] = useState("");
    const [arrFile, setArrFile] = useState([]);
    const [type, setType] = useState(0);
    const [isLoading, setLoad] = useState(true);

    let dataPhone = {
        id: 1,
        title: "Samsung Galaxy M53",
        price: "12490000",
        url: "/dtdd/samsung-galaxy-m53",
        slug: "samsung-galaxy-m53",
        promotion: "Trả góp 0%",
        discount: 0.2,
        tag: "Ưu đãi sinh nhật",
        gift: "",
        star: 4.1,
        totalVote: 23,
        brand: "samsung",
        category: "dienthoai",
        brandId: 1,
        cateId: 1,
        baohanh: "18T",
        new: true,
        location: "Tỉnh Long Xuyên",
        gallery: [
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/3-1020x570.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/SamsungGalaxyM53-1020x570.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/5-1020x570.jpg",
            "https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/bg_csmh_tgdd-min.png?v=11",
        ],
        colors: ["Nâu", "Xanh dương", "Xanh lá"],
        RAM: ["4 GB", "8 GB"],
        ROM: "128 GB",
        nameType: "tainghe",
        parameter: {
            img: "https://cdn.tgdd.vn/Products/Images/42/247364/Kit/samsung-galaxy-m53-note.jpg",
            SCREEN: "IPS LCD6.71 HD+",
            "Hệ điều hành": "Android 11",
            "Camera sau": "Chính 13 MP & Phụ 2 MP",
            "Camera trước": "5 MP",
            Chip: "JLQ JR510 8 nhân",
            RAM: ["4 GB", "8 GB"],
            ROM: "64 GB",
            SIM: "2 Nano SIMHỗ trợ 4G",
            "Pin, Sạc": "6000 mAh18 W",
        },
        info: "<h3>Điện thoại iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.</h3><h3>Thiết kế đẳng cấp hàng đầu</h3><p>iPhone mới kế thừa thiết kế đặc trưng từ iPhone 12 Pro Max khi sở hữu khung viền vuông vức, mặt lưng kính cùng màn hình tai thỏ tràn viền nằm ở phía trước.</p>",
    };
    const [data, setData] = useState([dataPhone]);

    useEffect(() => {
        ProductService.getProduct(param.productId).then((res) => {
            setData(res.data);
            document.getElementById("name").value = res.data[0]?.name;
            document.getElementById("price").value = res.data[0]?.price;
            document.getElementById("designer").value = res.data[0]?.designer;
            document.getElementById("discount").value = res.data[0]?.discount;
            document.getElementById("colors").value = res.data[0]?.colors;
            document.getElementById("description").value =
                res.data[0]?.description;
            document.getElementById("category").value = res.data[0]?.category;
            document.getElementById("slug").value = res.data[0]?.slug;

            setArrFile(res.data[0].gallery);
        });
        function getProducts() {}
        setLoad(false);
        getProducts();
    }, [isLoading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const brand = document.getElementById("designer").value;
        const discount = document.getElementById("discount").value;
        const colors = document.getElementById("colors").value;
        const info = document.getElementById("description").value;
        const slug = document.getElementById("slug").value;

        let dataPhone = {};
        let parameter = {};
        if (data[0].category === "clothing") {
            dataPhone = {
                name: title,
                image:
                    "https://cache.mrporter.com/variants/images/" +
                    `${data[0].oID}` +
                    "/in/w560_q60.jpg",
                price: parseInt(price),
                url: "/clothing/" + slug,
                slug: slug,
                discount: parseFloat(discount),
                star: 4.1,
                totalVote: 23,
                designer: brand,
                cateId: 1,
                new: true,
                gallery: [
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/in/w560_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/e1/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/fr/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/bk/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/cu/w208_q60.jpg",
                ],
                colors: [colors],
                description: info,
                size: [
                    {
                        label: "M",
                        value: "m",
                    },
                    {
                        label: "L",
                        value: "l",
                    },
                    {
                        label: "XL",
                        value: "xl",
                    },
                    {
                        label: "XXL",
                        value: "xxl",
                    },
                ],
            };
        } else if (data[0].category === "shoes") {
            dataPhone = {
                name: title,
                image:
                    "https://cache.mrporter.com/variants/images/" +
                    `${data[0].oID}` +
                    "/in/w560_q60.jpg",
                price: parseInt(price),
                url: "/shoes/" + slug,
                slug: slug,
                discount: parseFloat(discount),
                star: 4.1,
                totalVote: 23,
                designer: brand,
                cateId: 1,
                new: true,
                gallery: [
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/in/w560_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/e1/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/fr/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/bk/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/cu/w208_q60.jpg",
                ],
                colors: [colors],
                description: info,
                size: [
                    {
                        label: "39",
                        value: "39",
                    },
                    {
                        label: "40",
                        value: "40",
                    },
                    {
                        label: "41",
                        value: "41",
                    },
                    {
                        label: "42",
                        value: "42",
                    },
                ],
            };
        } else if (data[0].category === "accessories") {
            dataPhone = {
                name: title,
                image:
                    "https://cache.mrporter.com/variants/images/" +
                    `${data[0].oID}` +
                    "/in/w560_q60.jpg",
                price: parseInt(price),
                url: "/accessories/" + slug,
                slug: slug,
                discount: parseFloat(discount),
                star: 4.1,
                totalVote: 23,
                designer: brand,
                cateId: 1,
                new: true,
                gallery: [
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/in/w560_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/e1/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/fr/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/bk/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/cu/w208_q60.jpg",
                ],
                colors: [colors],
                description: info,
            };
        } else if (data[0].category === "watches") {
            dataPhone = {
                name: title,
                image:
                    "https://cache.mrporter.com/variants/images/" +
                    `${data[0].oID}` +
                    "/in/w560_q60.jpg",
                price: parseInt(price),
                url: "/watches/" + slug,
                slug: slug,
                discount: parseFloat(discount),
                star: 4.1,
                totalVote: 23,
                designer: brand,
                cateId: 1,
                new: true,
                gallery: [
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/in/w560_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/e1/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/fr/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/bk/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/cu/w208_q60.jpg",
                ],
                colors: [colors],
                description: info,
            };
        } else if (data[0].category === "gifts") {
            dataPhone = {
                name: title,
                image:
                    "https://cache.mrporter.com/variants/images/" +
                    `${data[0].oID}` +
                    "/in/w560_q60.jpg",
                price: parseInt(price),
                url: "/gifts/" + slug,
                slug: slug,
                discount: parseFloat(discount),
                star: 4.1,
                totalVote: 23,
                designer: brand,
                cateId: 1,
                new: true,
                gallery: [
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/in/w560_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/e1/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/fr/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/bk/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/cu/w208_q60.jpg",
                ],
                colors: [colors],
                description: info,
                size: [data[0].size],
            };
        } else if (data[0].category === "grooming") {
            dataPhone = {
                name: title,
                image:
                    "https://cache.mrporter.com/variants/images/" +
                    `${data[0].oID}` +
                    "/in/w560_q60.jpg",
                price: parseInt(price),
                url: "/grooming/" + slug,
                slug: slug,
                discount: parseFloat(discount),
                star: 4.1,
                totalVote: 23,
                designer: brand,
                cateId: 1,
                new: true,
                gallery: [
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/in/w560_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/e1/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/fr/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/bk/w208_q60.jpg",
                    "https://cache.mrporter.com/variants/images/" +
                        `${data[0].oID}` +
                        "/cu/w208_q60.jpg",
                ],
                colors: [colors],
                description: info,
            };
        }

        async function postData(url = "", data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: "PATCH", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }

        postData(
            " http://localhost:3000/products/" + data[0].id,
            dataPhone
        ).then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
            alert("Sửa thành công");
        });
    };
    const handleDeleteImg = (index) => {
        console.log(index);
        let newArr = arrFile.filter((id) => id !== index);
        setArrFile(newArr);
        console.log(newArr);
    };
    return (
        <div className="new">
            <div className="newContainer">
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={data[0]?.image} alt="" />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            
                            {
                                <div className="formContainer">
                                    {productInputs.map((input) => {
                                        return (
                                            <div
                                                className="formInput"
                                                key={input.id}
                                            >
                                                <label>{input.label}</label>
                                                <input
                                                    type={input.type}
                                                    placeholder={
                                                        input.placeholder
                                                    }
                                                    id={input.title}
                                                />
                                            </div>
                                        );
                                    })}
                                   
                                    <div className="imgcontent">
                                        {arrFile.map((img, index) => (
                                            <img
                                                src={img}
                                                alt=""
                                                onClick={() =>
                                                    handleDeleteImg(img)
                                                }
                                            />
                                        ))}
                                    </div>
                                    <select className="formInput" id="category">
                                        <option onClick={() => setType(0)}>
                                            Chọn loại sản phẩm
                                        </option>
                                        {inputs.map((type) => (
                                            <option
                                                value={type.type}
                                                onChange={() =>
                                                    setType(type.id)
                                                }
                                            >
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            }

                            <button onClick={() => console.log()}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
