import * as React from "react";
export const InputBtn = (props) => {
    const { text = "Upload", showText = true, dataTypes = "image/*", onChange = () => { }, style = {}, multiple = false, component = {} } = props;
    return (React.createElement("label", { style: style, className: "Upload__Input", htmlFor: "media" },
        React.createElement("input", { onChange: onChange, accept: dataTypes, type: "file", multiple: multiple, name: "media", id: "media" }),
        showText ? React.createElement("p", { className: "Upload__Text" }, text) : component));
};
