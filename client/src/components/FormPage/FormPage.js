import { useState } from "react";
import { BackButton } from "../BackButton/StyledBackButton";
import {
  FormContainer,
  FormTitle,
  MainContainer,
  FieldWrapper,
  Field,
  FieldImage,
  FieldFileInput,
  FieldLabel,
  InputField,
  SubmitButton,
} from "./StyledFormPage";
import { ReactComponent as Back } from "../../assets/icons/back.svg";

const Form = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const NumericalInputs = [
    "hp",
    "attack",
    "defense",
    "speed",
    "height",
    "weight",
  ];
  return (
    <MainContainer>
      <BackButton to="/home">
        <Back height="3em" />
      </BackButton>
      <FormContainer>
        <FormTitle>create your own pokémon!</FormTitle>
        <Field primary>
          <FieldLabel primary>name</FieldLabel>
          <InputField primary></InputField>
        </Field>
        <Field image>
          <FieldFileInput
            type="file"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <FieldImage
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : "/pokemon-default-image.png"
            }
            alt="pokemon"
          />
        </Field>
        <FieldWrapper>
          {NumericalInputs.map((stat) => (
            <Field>
              <FieldLabel>{stat}</FieldLabel>
              <InputField></InputField>
            </Field>
          ))}
        </FieldWrapper>
        <SubmitButton>submit</SubmitButton>
      </FormContainer>
    </MainContainer>
  );
};

export default Form;
