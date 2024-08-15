import React from "react";
import UserIcon from "../shared_components/shared_assets/user.svg";
import GarageIcon from "../shared_components/shared_assets/garage.svg";
import { FormLogin } from "./assets/FormLogin";
import CustomButton from "./assets/CustomButton";
import BasePageLayout from "./assets/BasePage";
export function Login() {
  const buttons = (
    <>
      <CustomButton
        buttonText="Cadastrar conta convencional"
        imgSrc={UserIcon}
        imgAlt="Ícone de usuário"
        buttonColor="bg-gg-robin-egg-blue"
        hoverColor="hover:bg-gg-sunglow"
        textColor="text-black"
      />
      <CustomButton
        buttonText="Cadastrar conta administrativa"
        imgSrc={GarageIcon}
        imgAlt="Ícone de garagem"
        buttonColor="bg-gg-robin-egg-blue"
        hoverColor="hover:bg-gg-sunglow"
        textColor="text-black"
      />
    </>
  );
  return (
    <BasePageLayout
      mdFlexOrientation="md:flex-row"
      formComponent={<FormLogin />}
      buttons={buttons}
    />
  );
}
