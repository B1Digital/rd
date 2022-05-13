export interface MenuItemCatalogPrice {
    quantity: number;
    id: number;
    menu_item_catalog_id: number;
    menu_item_id: number;
    price: number;
    size: string;
    activate_offer: boolean;
    offer_price: number;
    offer_title: string;
    currency_code: string;
    reservation_block_time_value: number;
    reservation_block_time_type: 'minute' | 'hour';
}
