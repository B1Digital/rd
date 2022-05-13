import {MenuItemCatalog} from "./menu-item-catalog";
import {Image} from "./image";

export interface MenuItemCatalogGroup {
    id: number;
    menu_item_id: number;
    name: string;
    menu_item_catalogs: MenuItemCatalog[];
    priority: number;
    main_group: string;
    images: Image[];
    max_per_person: number;
}
