import { FunctionComponent } from "react";

const Products: FunctionComponent = () => {
  return (
    <div className="def-container">
      <div className="flex h-[calc(100vh_-_96px)] gap-[1%]">
        <div className="w-[25%] h-auto border-2 border-black"></div>
        <div className="flex flex-col w-[75%] h-auto border-2 border-black">
          <div className="w-full h-16 border-2 border-black"></div>
          <div className="flex-auto flex flex-col">
            <div className="h-[calc(100%_-_40px)] bg-[gray] overflow-y-auto">
              <div className="h-[100vh]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
