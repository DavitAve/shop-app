import { FunctionComponent } from "react";
import { IProduct } from "../../interfaces/product";
import { urlFor } from "../../../lib/client";
import DefButton from "../UI/DefButton";

interface ITopProductProps {
  item: IProduct;
}

const TopProduct: FunctionComponent<ITopProductProps> = ({ item }) => {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="relative h-[480px]">
        <img src={urlFor(item.image[0].asset._ref)} alt="" className="ibg" />
      </div>
      <div className="flex flex-col gap-4 p-3 border-[1px] border-[#d1d1d1] border-t-0">
        <div className="flex justify-between">
          <h2>{item.name}</h2>
          <h2>{item.price}$</h2>
        </div>
        <div className="flex justify-end">
          <DefButton text="More info" link={"products/" + item._id} />
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
