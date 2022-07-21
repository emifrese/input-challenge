import React from "react";
import Input from "../components/Input/Input";
import InputsWrappers from "../components/Input/InputsWrappers";

import SideBar from "../components/SideBar/SideBar";
import InputPageWrapper from "../components/UI/InputPageWrapper";

import workImg from '../assets/work_FILL0_wght400_GRAD0_opsz48.svg';
import mailImg from '../assets/mail_FILL0_wght400_GRAD0_opsz48.svg';
import personImg from '../assets/person_FILL0_wght400_GRAD0_opsz48.svg';
import callImg from '../assets/call_FILL0_wght400_GRAD0_opsz48.svg';
import musicImg from '../assets/music_note_FILL0_wght400_GRAD0_opsz48.svg';

const InputPage = () => {
  return (
      <InputPageWrapper>
        <SideBar />
        <InputsWrappers>
          <Input />
          <Input error />
          <Input disabled />
          <Input helperText={"Some interesting text"} />
          <Input helperText={"Some interesting text"} error />
          <Input startIcon={workImg} iconName={"workImg"} />
          <Input endIcon={callImg} iconName={"callImg"} />
        </InputsWrappers>
      </InputPageWrapper>
  );
};

export default InputPage;
