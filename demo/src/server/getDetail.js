import image from "../image/detail.jpg";
export default function getDetail(id) {
  return {
    id,
    title: "I am detail page's title",
    description: "I am detail page's description",
    image,
  };
}
