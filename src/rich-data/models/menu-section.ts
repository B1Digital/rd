import {MenuCategory} from "./menu-category";

export interface MenuSection {
    id: number;
    hotel_id: number;
    menu_area_id: number;
    catalogue_active: boolean;
    timetable_and_reservation_active: boolean;
    title: string;
    show: boolean;
    menu_categories: MenuCategory[];
    request: boolean;
}
