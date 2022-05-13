import {MenuItem} from "./menu-item";
import {Image} from "./image";

export interface MenuCategory {
    id: number;
    menu_section_id: number;
    title: string;
    hotel_id: number;
    menu_item_id: number;
    menu_items: MenuItem[] | null;
    images: Image[] | null;
}
