export class SettingService{
  private altBg = false;
  setBg(isAlt: boolean){
    this.altBg = isAlt;
  }
  isAltBg(){
    return this.altBg;
  }
}
