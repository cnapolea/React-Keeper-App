import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import mongoose from "mongoose";

// DB Connection configuration
const uri = 'mongodb://localhost:27017/notes';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});


ReactDOM.render(<App />, document.getElementById("root"));


