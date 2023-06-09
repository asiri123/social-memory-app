import React, { useState } from "react";

const user = {
  name: "asiri attanayaka",
  address: "27/34/1/1",
  DOB: "20-01-1994",
};

const products = [
  { product: "p1", brand: "b1", location: "l1" },
  { product: "p1", brand: "b1", location: "l2" },
  { product: "p1", brand: "b1", location: "l3" },
];

function Test() {
  const [clickedOn, setClickedOn] = useState(0);

  function buttonClicked() {
    //alert("clicked on me");
    setClickedOn(clickedOn + 1);
  }

  const productList = products.map((product) => {
    return <li key={product.location}>{product.brand}</li>;
  });

  return (
    <div>
      test{user.name}
      <ul>{productList}</ul>
      <button onClick={buttonClicked}>press me! {clickedOn}</button>
    </div>
  );
}

export default Test;
