import React from "react";

import ConfigStore from "./ConfigStore";

export default React.createContext({
  ConfigStore: new ConfigStore(),
});
