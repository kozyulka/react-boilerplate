import React from "react";
import ReactDOM from "react-dom";

import "style-loader!css-loader!sass-loader!./styles/app.scss";

// require ('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
// require("foundation-sites!foundation-sites.config");
$(document).foundation();



ReactDOM.render(<h1>Boilerplate 3 project</h1>, document.getElementById('app'));

