
import { getShowedCategories } from "@/services/data";

import  HeaderView from "./view";
import { Category } from "@/types/model";

const Header = async () => {
  const cates : Category[]  = await getShowedCategories();
  return (
    <HeaderView cates={cates}/>
  );
};

export default Header;
