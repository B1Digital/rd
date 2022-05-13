import {MenuItemBookDetail} from "./menu-item-book-detail";

export interface MenuItemBook {
    id: number;
    menu_item_id: number;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    show_advanced_options: boolean;
    bookable_in_advance_days: number;
    minimum_time_in_advance_minute: number;
    minimum_time_in_advance_type: string;
    reservation_unit_custom: boolean;
    reservation_custom_unit_name: string;
    response_for_pending_service: string;
    responce_for_confirmed_service: string;
    call_to_action_text: string;
    comments_text: string;
    menu_item_book_details: MenuItemBookDetail[];
}
