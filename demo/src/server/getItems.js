import image from "../image/item.jpg";

//keep id
let id = 0;
//the mock server
export default function getItems() {
  const items = [];
  for (let i = 0; i < 2; i++) {
    items.push({
      id,
      title: "I am item's title",
      description: "I am item's description",
      image,
    });
    id += 1;
  }
  return items;
}
