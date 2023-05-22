import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { faRecycle, faGenderless } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppQuery from "../../hooks/useAppQuery";
import { urlFor } from "../../../lib/client";
import { IProduct } from "../../interfaces/product";
import BackTo from "../UI/BackTo";
import Loading from "../UI/Loading";
import SimilaryProducts from "./SimilaryProducts";
import CurrentProdPriceChart from "./CurrentProdPriceChart";

const CurrentProduct: FunctionComponent = () => {
  const currentId = useParams().id;
  const { data: product, isLoading } = useAppQuery<IProduct>(
    `*[_type == "product" && _id == "${currentId}"][0]`
  );

  return (
    <div className="pt-10">
      <div className="def-container">
        <BackTo />
        {!isLoading ? (
          <div className="flex flex-col">
            <div className="flex">
              <div className="relative w-[400px] h-[561px]">
                <img src={urlFor(product?.image[0].asset._ref || "")} alt="" />
              </div>
              <div className="py-10 px-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl">{product?.name}</h3>
                  <div className="py-5">
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faRecycle} className="text-lg" />
                        <div className="text-lg">
                          <span className="font-medium">Material: </span>
                          {product?.type}
                        </div>
                      </li>
                      <li className="flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faGenderless}
                          className="text-lg"
                        />
                        <div className="text-lg">
                          <span className="font-medium">For: </span>
                          {product?.gender}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-lg">
                  <span className="font-medium">Price: </span> {product?.price}$
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
        <CurrentProdPriceChart data={product?.price_list} loading={isLoading} />
        <SimilaryProducts product={product} />
      </div>
    </div>
  );
};

export default CurrentProduct;
