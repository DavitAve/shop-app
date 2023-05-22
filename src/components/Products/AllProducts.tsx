import { FunctionComponent } from "react";
import useAppQuery from "../../hooks/useAppQuery";
import DataTable from "../UI/DataTable";
import { IProduct } from "../../interfaces/product";

const headers = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Price",
    key: "price",
  },
  {
    label: "For",
    key: "gender",
  },
  {
    label: "Material",
    key: "type",
  },
];

const AllProducts: FunctionComponent = () => {
  const { data, isLoading } = useAppQuery<IProduct[]>("*[_type == 'product']");

  return (
    <div className="pt-12 pb-10">
      <h1 className="text-3xl">All products</h1>
      <DataTable data={data} headers={headers} loading={isLoading} />
    </div>
  );
};

export default AllProducts;
