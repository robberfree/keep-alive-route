import React, { useEffect, useState } from "react";
import getItems from "../../server/getItems";
import { Link } from "react-router-dom";

export default function List() {
  let [items, setItems] = useState([]);

  //mock call back-end to init
  useEffect(() => {
    setItems(getItems());
  }, []);

  const load = () => {
    items = items.concat(getItems());
    setItems(items);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <Link
            style={{ color: "black" }}
            to={`/detail/${item.id}`}
            key={item.id}
          >
            <li>
              <h3>
                {item.title} {item.id}
              </h3>
              <p>{item.description}</p>
              <img src={item.image} alt="" />
            </li>
          </Link>
        ))}
      </ul>
      <button
        onClick={load}
        style={{
          width: "100%",
        }}
      >
        view more
      </button>
    </div>
  );
}
