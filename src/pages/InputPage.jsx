import React from "react";
import Input from "../components/Input/Input";
import InputsWrappers from "../components/Input/InputsWrappers";

import SideBar from "../components/SideBar/SideBar";
import InputPageWrapper from "../components/UI/InputPageWrapper";

const InputPage = () => {
  return (
      <InputPageWrapper>
        <SideBar />
        <InputsWrappers>
          <Input />
        </InputsWrappers>
      </InputPageWrapper>
  );
};

export default InputPage;
