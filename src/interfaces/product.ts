export interface IProduct {
  gender: string;
  _createdAt: string;
  _type: string;
  image: IProductImage[];
  price: number;
  _rev: string;
  name: string;
  _id: string;
  type: string;
  _updatedAt: string;
  model: string;
}

interface IProductImage {
  _key: string;
  asset: IProductAsset;
  _type: string;
}

interface IProductAsset {
  _ref: string;
  _type: string;
}
