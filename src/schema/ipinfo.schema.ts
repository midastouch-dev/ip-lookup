import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Connection, Flag, Timezone, Currency, Security } from "src/dto/ipinfo.dto";

@Schema()
export class IPInfo {
    @Prop()
    ip: String;

    @Prop()
    success: Boolean;

    @Prop()
    type: String;

    @Prop()
    continent: String;

    @Prop()
    continent_code: String;

    @Prop()
    country: String;

    @Prop()
    country_code: String;

    @Prop()
    region: String;

    @Prop()
    region_code: String;

    @Prop()
    city: String;

    @Prop()
    latitude: Number;

    @Prop()
    longitude: Number;

    @Prop()
    is_eu: Boolean;

    @Prop()
    postal: String;

    @Prop()
    calling_code: String;

    @Prop()
    capital: String;

    @Prop()
    borders: String;

    @Prop()
    flag: Flag;

    @Prop()
    connection: Connection;

    @Prop()
    timezone: Timezone;

    @Prop()
    currency: Currency;

    @Prop()
    security: Security;
}

export const IPInfoSchema = SchemaFactory.createForClass(IPInfo);