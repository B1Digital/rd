import {Tag} from "./tag";
import {MenuItemCatalogPrice} from "./menu-item-catalog-price";
import {Image} from "./image";

export interface MenuItemCatalog {
    id: number;
    menu_item_catalog_group_id: number;
    menu_item_id: number;
    priority: number;
    name: string;
    description: string;
    menu_item_catalog_prices: MenuItemCatalogPrice[];
    images: Image[] | null;
    tags: Tag[];
}
