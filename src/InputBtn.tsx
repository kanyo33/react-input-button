import * as React from "react";

interface MyComponentProps {
  text?: string;
  showText?: boolean;
  dataTypes?: string;
  onChange?: void;
  style?: any;
  multiple?: boolean;
  component?: any;
}

export const InputBtn = (props: MyComponentProps) => {
  const { text = "Upload", showText = true, dataTypes = "image/*", onChange = () => {}, style = {}, multiple = false, component = {} } = props;
  return (
    <label style={style} className="Upload__Input" htmlFor="media">
      <input onChange={onChange} accept={dataTypes} type="file" multiple={multiple} name="media" id="media" />
      {showText ? <p className="Upload__Text">{text}</p> : component}
    </label>
  );
};
