import {BookDetailRes} from "./book-detail-reservation-group";

export interface MenuItemBookDetail {
    id: number;
    menu_item_id: number;
    menu_item_book_id: number;
    start_time: Date | string;
    end_time: Date | string;
    name: string;
    bookable: boolean;
    interval: number;
    price: number;
    activate_offer: boolean;
    offer_price: number;
    offer_title: string;
    currency_code: string;
    view_count: number;
    limit: number;
    child_price: number;
    book_detail_res_group: BookDetailRes[];
}
