import { Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { LookupServices } from './lookup.services';

@Controller('lookup')
export class LookupController {
  constructor(private lookupService: LookupServices) {}

  @Get('/pause')
  async pauseGetIPInfoAuto() {
    this.lookupService.removeAutoUpdate();
    return 'success';
  }

  @Get(':ip')
  async getIpInfo(@Param('ip') ip: string) {
    const info = await this.lookupService.getLookUp(ip);
    return info;
  }

  @Delete(':ip')
  async deleteIpInfo(@Param('ip') ip:string) {
    return this.lookupService.removeOne(ip);
  }

  @Put(':ip')
  async updateIpInfo(@Param('ip') ip: string) {
    return this.lookupService.autoUpdateInfo(ip);
  }
}
