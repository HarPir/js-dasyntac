"use strict";

const data = {
    xiaomi: {
        brand: "Xiaomi",
        model: "Poco F1",
        storage: "64GB",
        colors: ["Blue", "Black"]
    },

    samsung: {
        brand: "Samsung",
        model: "Galaxy S22",
        storage: "256GB",
        colors: ["White", "Grey"]
    }
};

fetch("http://localhost:5555/product", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(data)
});

fetch("http://localhost:5555/product")
.then(data => data.json())
.then(data => console.log(data));