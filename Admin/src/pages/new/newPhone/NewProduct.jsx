import "../new.scss";

import { useState, useEffect } from "react";
import { productInputs } from "../../../formSource";
import { DesignerService } from "../../../services";
import Select from "react-select";

const CategoryOptions = [
    {
        id: 1,
        label: "Clothing",
        value: "clothing",
    },
    {
        id: 2,
        label: "Shoes",
        value: "shoes",
    },
    {
        id: 3,
        label: "Accessories",
        value: "accessories",
    },
    {
        id: 4,
        label: "Watches",
        value: "watches",
    },
    {
        id: 5,
        label: "Gifts",
        value: "gifts",
    },
    {
        id: 6,
        label: "Grooming",
        value: "grooming",
    },
];
const NewPhone = ({ inputs, title }) => {
    const [imageUrls, setImageUrls] = useState();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
        console.log(selectedCategory);
    };
    const handleChangeImageURL = (e) => {
        setImageUrls(e.target.value);
        console.log(imageUrls);
    };
    const handleChangeSlug = (titleP, value) => {
        if (titleP === "name") {
            document.getElementById("slug").value = parseStringToSlug(value);
        }
    };
    const parseStringToSlug = (string) => {
        return string.toLowerCase().split(" ").join("-");
    };
    const generateString = (length) => {
        const characters = "0123456789";
        let result = " ";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }

        return parseInt(result);
    };

    const cuttingString = (string) => {
        return string.split("/")[5];
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (imageUrls === null || selectedCategory === null) return;
        const oID = cuttingString(imageUrls);
        const title = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const brand = document.getElementById("designer").value.toUpperCase();
        const discount = document.getElementById("discount").value;
        const colors = document.getElementById("colors").value;
        const info = document.getElementById("description").value;
        const slug = document.getElementById("slug").value;
        let dataPost = {};
        switch (selectedCategory.value) {
            case "clothing":
                dataPost = {
                    id: generateString(4),
                    oID: oID,
                    image: imageUrls,
                    name: title,
                    price: parseInt(price),
                    slug: slug,
                    discount: parseInt(discount),
                    star: 0,
                    totalVote: 0,
                    designer: brand,
                    category: selectedCategory.value,
                    new: true,
                    description: info,
                    gallery: [
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/e1/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/fr/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/bk/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/cu/w208_q60.jpg",
                    ],
                    color: [colors],
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
            case "shoes":
                dataPost = {
                    id: generateString(4),
                    oID: oID,
                    image: imageUrls,
                    name: title,
                    price: parseInt(price),
                    slug: slug,
                    discount: parseInt(discount),
                    star: 0,
                    totalVote: 0,
                    designer: brand,
                    category: selectedCategory.value,
                    new: true,
                    description: info,
                    gallery: [
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/e1/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/fr/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/bk/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/cu/w208_q60.jpg",
                    ],
                    color: [colors],
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
            case "accessories":
                dataPost = {
                    id: generateString(4),
                    oID: oID,
                    image: imageUrls,
                    name: title,
                    price: parseInt(price),
                    slug: slug,
                    discount: parseInt(discount),
                    star: 0,
                    totalVote: 0,
                    designer: brand,
                    category: selectedCategory.value,
                    new: true,
                    description: info,
                    gallery: [
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/e1/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/fr/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/bk/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/cu/w208_q60.jpg",
                    ],
                    color: [colors],
                    size: [],
                };
            case "watches":
                dataPost = {
                    id: generateString(4),
                    oID: oID,
                    image: imageUrls,
                    name: title,
                    price: parseInt(price),
                    slug: slug,
                    discount: parseInt(discount),
                    star: 0,
                    totalVote: 0,
                    designer: brand,
                    category: selectedCategory.value,
                    new: true,
                    description: info,
                    gallery: [
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/e1/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/fr/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/bk/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/cu/w208_q60.jpg",
                    ],
                    color: [colors],
                };
            case "gifts":
                dataPost = {
                    id: generateString(4),
                    oID: oID,
                    image: imageUrls,
                    name: title,
                    price: parseInt(price),
                    slug: slug,
                    discount: parseInt(discount),
                    star: 0,
                    totalVote: 0,
                    designer: brand,
                    category: selectedCategory.value,
                    new: true,
                    description: info,
                    gallery: [
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/e1/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/fr/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/bk/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/cu/w208_q60.jpg",
                    ],
                    color: [colors],
                    size: [],
                };
            case "grooming":
                dataPost = {
                    id: generateString(4),
                    oID: oID,
                    image: imageUrls,
                    name: title,
                    price: parseInt(price),
                    slug: slug,
                    discount: parseInt(discount),
                    star: 0,
                    totalVote: 0,
                    designer: brand,
                    category: selectedCategory.value,
                    new: true,
                    description: info,
                    gallery: [
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/e1/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/fr/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/in/w560_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/bk/w208_q60.jpg",
                        "https://cache.mrporter.com/variants/images/" + `${oID}` + "/cu/w208_q60.jpg",
                    ],
                    color: [colors],
                };
                break;
        }

        async function postData(url = "", data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
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

        postData(" http://localhost:3000/products", dataPost).then(
            (data) => {
                console.log(data); // JSON data parsed by `data.json()` call
                alert("Add product success!");
            }
        );
        
    };
    return (
        <div className="new">
            <div className="newContainer">
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                imageUrls ||
                                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            {
                                <div className="formContainer">
                                    {productInputs.map((input) => (
                                        <div
                                            className="formInput"
                                            key={input.id}
                                        >
                                            <label>{input.label}</label>
                                            <input
                                                type={input.type}
                                                placeholder={input.placeholder}
                                                id={input.title}
                                                onChange={(e) =>
                                                    handleChangeSlug(
                                                        input.title,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    ))}
                                    <div className="formInput">
                                        <label htmlFor="file1">
                                            Image Link:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            id="file1"
                                            value={imageUrls}
                                            onChange={(e) => {
                                                handleChangeImageURL(e);
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            width: "200px",
                                        }}
                                    >
                                        <span>Category:</span>
                                        <Select
                                            options={CategoryOptions}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            }

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPhone;
