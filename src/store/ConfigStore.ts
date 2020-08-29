import { observable, action } from "mobx";

class ConfigStore {
  constructor(themeColor: string = "#ffffff") {
    this.themeColor = themeColor;
  }

  @observable themeColor: string;

  @action setThemeColor = (themeColor: string) => {
    this.themeColor = themeColor;
  };
}

export default ConfigStore;
