import React from "react";
import "./Title.css";

const Title = props =><div> <h1 className="title">{props.children}</h1>
<div className="card text-center">
<div className="card-header bg-primary text-white">
  <h3 className="card-title"> Click each Character's red X. But don't click twice or you will have to start over</h3>
</div>
<div className="card-body">
  <p className="card-text">{props.count}  </p>
  </div>

</div>;
</div>

export default Title;

