import React, { Component } from "react";
import data from "./products.json";
const apiUrl = "https://res.cloudinary.com/traede/image/upload/";

const ItemList = props => {
    return (
      <React.Fragment>
        {props.items.map(item => (
          <React.Fragment key={item.item_number}>
            <h3>Item name: {item.name}</h3>
            <div className="mx-auto">
              <img 
                  src={apiUrl + 'c_fill,h_400,w_400/' + item.primary_image}
                  alt={item.name}
                  style={{ width: 250 }}
                  className="img-thumbnail thumb rounded"
                  />
            </div>
            <p>Item number: <strong>{item.item_number}</strong></p>
            <label>Size: </label>
            <select>
            {item.variants.map(ProductAtributes => (
              <option>{ProductAtributes.attributes.Size}</option>
            ))}
            </select>
            <label>Color: </label>
            <select>
            {item.variants.map(ProductAtributes => (
              <option>{ProductAtributes.attributes.Color}</option>
            ))}
            </select>

            <label>Price: </label>
            <select>
            {item.variants.map(ProductPrice => (
              <option>{ProductPrice.prices.DKK.sales_price} DKK</option>
            ))}
            </select>
            <h4>Additional images:</h4> 
            {item.images.map(AditionalImages => (
              <img
                src={apiUrl + 'c_fill,h_200,w_200/' + AditionalImages}
                alt={item.name}
                style={{ width: 80, height: 80 }}
                className="img-thumbnail thumb rounded"
              />
            ))}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  };

  class ProductName extends Component {
    render() {
      return (
        <section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <ItemList items={data} />
                </div>
              </div>
            </div>

        </section>
      );
    }
  }
  export default ProductName;
