import products from "./products.json"

//Adding an ID to each product
products.map((item, id) => (Object.assign(item, {id})))

const data = {
    products
}

export default data;