export class Flag {
    img: String;
    emoji: String;
    emoji_unicode: String;
}

export class Connection {
    asn: Number;
    org: String;
    isp: String; 
    domain: String;
}

export class Timezone {
    id: String;
    abbr: String;
    is_dst: Boolean;
    offset: Number;
    utc: String;
    current_time: String;
}

export class Currency {
    name: String;
    code: String;
    symbol: String;
    plural: String;
    exchange_rate: Number;
}

export class Security {
    anonymous: Boolean;
    proxy: Boolean;
    vpn: Boolean;
    tor: Boolean;  
    hosting: Boolean;
}

export class IPInfo {
    ip: String;
    success: Boolean;
    type: String;
    continent: String;
    continent_code: String;
    country: String;
    country_code: String;
    region: String;
    region_code: String;
    city: String;
    latitude: Number;
    longitude: Number;
    is_eu: boolean;
    postal: String;
    calling_code: String;
    capital: String;
    borders: String;
    flag: Flag;
    connection: Connection;
    timezone: Timezone;
    currency: Currency;
    security: Security;
}