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
          <Input variant="outline" />
          <Input variant="text" />
          <Input disabledShadow />
          <Input disabled />
          <Input variant="text" disabled />
          <Input size="sm" />
          <Input size="md" />
          <Input size="lg" />
          <Input color="default" />
          <Input color="primary" />
          <Input color="secondary" />
          <Input color="danger" />
        </InputsWrappers>
      </InputPageWrapper>
  );
};

export default InputPage;
