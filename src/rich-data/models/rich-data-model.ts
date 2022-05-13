/* eslint-disable @typescript-eslint/naming-convention */
import {HomePageDesigner} from "./home-page-designer";
import {MenuItem} from "./menu-item";
import {MenuSection} from "./menu-section";
import {TitleAndDescription} from "./title-and-description";

export interface RichDataModel {
    hotel_language: string;
    upsell_item_id: number;
    id: number;
    virtual_tour_url: string;
    facebook_id: number;
    name: string;
    contact_name: string;
    contact_phone: string;
    contact_email: string;
    call_center: string;
    master_color: string;
    activated: boolean;
    address: string;
    post_code: string;
    city: string;
    country: string;
    currency_code: string;
    languages: string;
    place_id: string;
    image_url: string;
    photos: string;
    rating: number;
    web_site_url: string;
    lat_lng: string;
    online_reservation_url: string;
    direct_reservation: boolean;
    reservation_mail_address: string;
    group_hotels: string;
    google_analytics_link: string;
    yandex_metrica_link: string;
    bing_link: string;
    survey_url: string;
    hotel_information_tr: string;
    hotel_information_en: string;
    hotel_information_ru: string;
    hotel_information_de: string;
    hotel_information_fr: string;
    hotel_information_ar: string;
    hotel_information_ir: string;
    hotel_information_es: string;
    sub_color: string;
    kvkk_link: string;
    privacy_policy_link: string;
    sp_doctor: string;
    sp_reception: string;
    sp_room_service: string;
    sp_customer_relation: string;
    sp_technical_service: string;
    house_keeping_phone: string;
    sp_management: string;
    plan_image_url: string;
    sm_youtube_url: string;
    sm_instagram_url: string;
    sm_facebook_url: string;
    sm_twitter_url: string;
    sm_vkontakte_url: string;
    created_at: Date;
    updated_at: Date;
    mobile_version: number;
    mobile_version_publish_date: Date;
    mobile_publish_by: string;
    hotel_chain: string;
    online_check_in: boolean;
    online_check_in_image: boolean;
    online_check_in_signature: boolean;
    check_in_post_message: string;
    welcome_message: string;
    survey_title: string;
    survey_description: string;
    delivery_time_of_day: string;
    notification_point: number;
    survey_point: number;
    sub_domain_name: string;
    home_page_designer: HomePageDesigner[];
    featured: MenuItem[];
    first_level_alert_list: string;
    second_level_alert_list: string;
    third_level_alert_list: string;
    fourth_level_alert_list: string;
    negative_survey_alert_list: string;
    bars: MenuSection;
    cafes: MenuSection;
    golf_club: MenuSection;
    kids_club: MenuSection;
    rooms: MenuSection;
    massage: MenuSection;
    meeting_rooms: MenuSection;
    other_facilities: MenuSection;
    pools: MenuSection;
    restaurants: MenuSection;
    spa: MenuSection;
    sport: MenuSection;
    amenities: MenuSection;
    housekeeping: MenuSection;
    issues: MenuSection;
    complaint: MenuSection;
    other_services: MenuSection;
    room_services: MenuSection;
    activity: MenuSection;
    daily_animations: MenuSection;
    shows: MenuSection;
    po_is: MenuSection;
    tours: MenuSection;
    opportunities: MenuSection;
    news: MenuSection;
    banner: MenuSection;
    loyality_management: MenuSection;
    room_guide: MenuSection;
    malls: MenuSection;
    upsell: MenuSection;
    front_office: MenuSection;
    mice: MenuSection;
    wedding: MenuSection;
    avm: MenuSection;
    life: MenuSection;
    cinema: MenuSection;
    events: MenuSection;
    other_1: MenuSection;
    other_2: MenuSection;
    other_3: MenuSection;
    other_4: MenuSection;
    other_5: MenuSection;
    other_6: MenuSection;
    other_7: MenuSection;
    other_8: MenuSection;
    video: MenuSection;
    services: MenuSection;
    slider_images: string[];
    logo: string[];
    dark_logo: string[];
    light_logo: string[];
    title_and_descriptions: TitleAndDescription[];
    email: string;
    password: string;
    phone: string;
    one_signal_app_id: string;
    one_signal_app_key: string;
    one_signal_user_key: string;
    app_store_link: string;
    google_play_link: string;
    firebase_link: string;
    open_for_year: boolean;
    open_date: Date;
    close_date: Date;
    entry_date: Date;
    release_date: Date;
    baby_age_range: string;
    child_age_range: string;
    old_age_range: string;
    close_request: boolean;
    call_for_requests: boolean;
    room_number_validation_code: string;
    claim_tracking_manager: boolean;
    hotel_type: 'Resort' | 'Hotel' | 'City' | 'Holiday';
    mobile_payment: boolean;
    title: string;
    description: string;
    wifi_name: string;
    wifi_password: string;
    whatsapp_no: string;
    viber_no: string;
    telegram_no: string;
    messenger_address: string;
    google_map_address: string;
    show_welcome: boolean;
    show_chat: boolean;
    in_house_list_login_type: string;
    reward_calculation_type: 'Order Amount %' | 'Order Count for Month' | 'Order Amount for Month';
    reward_min_point: number;
    reward_value: number;
    delivery_distance_type: 'mil' | 'km';
}

























