import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { catchError, map, of } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { IPInfo } from 'src/dto/ipinfo.dto';
import { Model } from 'mongoose';
import { FailedResponse } from 'src/dto/failedresponse.dto';

@Injectable()
export class LookupServices {
    private timerOut: any;
    private timerInterval: any;
    private checkSpecialInfo: Boolean = false;

    constructor(
        private readonly httpService: HttpService,
        @InjectModel(IPInfo.name) private ipInfoModel: Model<IPInfo>
    ) {}

    async getIPInfoFromServer(ip:string): Promise<IPInfo | FailedResponse> {
        const returnValue: IPInfo | FailedResponse = await this.httpService
        .get(`https://ipwho.is/${ip}`)
        .pipe(
            map((res: AxiosResponse) => res.data), catchError(() => of(null))
        ).toPromise();

        return returnValue;
    }

    async createIpInfo(ipInfo: IPInfo): Promise <IPInfo> {
        const createdIpInfo = await this.ipInfoModel.create(ipInfo);
        return createdIpInfo;
    }

    async findOne(ip: string): Promise <IPInfo> {
        const ipInfo = this.ipInfoModel.findOne({ip: ip}).exec();
        return ipInfo;
    }

    async removeOne(ip: string): Promise <any> {
        return this.ipInfoModel.deleteOne({ip: ip}).exec();
    }

    async removeAll() {
        this.ipInfoModel.deleteMany().exec();
    }

    async updateOne(ip:string, info: IPInfo) {
        return await this.ipInfoModel.updateOne({ip: ip}, info);
    }

    async getLookUp(ip: string): Promise<IPInfo | FailedResponse> {
        let returnValue: IPInfo | FailedResponse;

        let cachingData = await this.findOne(ip);
        if(cachingData) {
            returnValue = cachingData as IPInfo;
        } else {
            
            returnValue = await this.getIPInfoFromServer(ip);
            if(returnValue.success) {
                this.createIpInfo(returnValue as IPInfo)
            }
        }

        return returnValue;
    }

    async autoUpdateInfo(ip:string) {
        clearTimeout(this.timerOut);
        clearInterval(this.timerInterval);
        this.checkSpecialInfo = false;

        this.timerOut = setTimeout(()=>{
            this.removeAll(); 
        }, 10000)
        this.timerInterval = setInterval(async () => {
            const response = await this.getIPInfoFromServer(ip);
            if(response.success) {
                if(this.checkSpecialInfo === false) {
                    this.createIpInfo(response as IPInfo);
                    this.checkSpecialInfo = true;    
                } else {
                    this.updateOne(ip, response as IPInfo)
                }
            }
        }, 10000);
    }

    async removeAutoUpdate() {
        clearTimeout(this.timerOut);
        clearInterval(this.timerInterval);
    }
}
