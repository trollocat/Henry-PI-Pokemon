import { useEffect, useState } from "react";
import { BackButton } from "../BackButton/StyledBackButton";
import {
  FormContainer,
  FormTitle,
  MainContainer,
  FieldGrid,
  Field,
  FieldImage,
  FieldFileInput,
  FieldLabel,
  InputField,
  SubmitButton,
  ImageStatsContainer,
  Label,
  LabelWrapper,
} from "./StyledFormPage";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, fetchPokemons, fetchTypes } from "../../redux/actions";

const Form = () => {
  // form
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: null,
    attack: null,
    defense: null,
    speed: null,
    height: null,
    weight: null,
    types: [],
  });
  const [errors, setErrors] = useState({
    name: {
      isNotEmail: "",
      isEmpty: "",
      invalidLength: "",
    },
    image: {},
    hp: {
      isEmpty: "",
      invalidRange: "",
    },
    attack: {},
    defense: {},
    speed: {},
    height: {},
    weight: {},
    types: {},
  });
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(createPokemon(form));
    dispatch(fetchPokemons);
  };

  // label selector
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);
  const types = useSelector((state) => state.types);
  const handleTypeClick = (name) => {
    setForm((prevSelectedTypes) => {
      if (prevSelectedTypes.types.includes(name)) {
        return {
          ...form,
          types: prevSelectedTypes.types.filter((type) => type !== name),
        };
      } else {
        return {
          ...form,
          types: [...prevSelectedTypes.types, name],
        };
      }
    });
  };

  return (
    <MainContainer>
      <BackButton to="/home">
        <Back height="3em" />
      </BackButton>
      <FormContainer onSubmit={onSubmitHandler}>
        <FormTitle>create your own pokémon!</FormTitle>
        <ImageStatsContainer>
          <FieldGrid>
            <Field primary>
              <FieldLabel primary>name</FieldLabel>
              <InputField
                primary
                name="name"
                value={form.name}
                onChange={onChangeHandler}
              ></InputField>
            </Field>
            {["hp", "attack", "defense", "speed", "height", "weight"].map(
              (stat) => (
                <Field>
                  <FieldLabel>{stat}</FieldLabel>
                  <InputField
                    name={stat}
                    value={form.stat}
                    onChange={onChangeHandler}
                  ></InputField>
                </Field>
              )
            )}
          </FieldGrid>
          <Field image>
            {form.image && (
              <Field image>
                <FieldImage
                  alt="pokemon"
                  src={form.image}
                />
              </Field>
            )}
            <Field image>
              <FieldLabel>image url</FieldLabel>
              <InputField
                image
                name="image"
                value={form.image}
                onChange={onChangeHandler}
              ></InputField>
            </Field>
          </Field>
        </ImageStatsContainer>
        <LabelWrapper>
          {types?.map((type) => (
            <Label
              key={type.id}
              title={type.name}
              selected={form.types.includes(type.name)}
              onClick={() => handleTypeClick(type.name)}
              src={`/type_labels/${type.name}.png`}
            />
          ))}
        </LabelWrapper>

        <SubmitButton type="submit">submit</SubmitButton>
      </FormContainer>
    </MainContainer>
  );
};

export default Form;
