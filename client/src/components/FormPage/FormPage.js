import { useEffect, useState } from "react";
import { BackButton } from "../BackButton/StyledBackButton";
import {
  FormContainer,
  FormTitle,
  MainContainer,
  FieldGrid,
  Field,
  FieldImage,
  FieldLabel,
  InputField,
  SubmitButton,
  ImageStatsContainer,
  Label,
  LabelWrapper,
  ValidationIndicator,
  ErrorValidation,
  SuccessMessage,
  SuccessMessageContainer,
  SuccessClose,
  SuccessCreateNew,
} from "./StyledFormPage";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, fetchPokemons, fetchTypes } from "../../redux/actions";
import {
  emptyErrors,
  validate,
  validRanges,
  validNameLength,
  isValid,
} from "./validation";

const Form = () => {
  // form
  const dispatch = useDispatch();
  const emptyForm = {
    name: "",
    image: "../pokemon-default-image.png",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  };
  const [form, setForm] = useState(emptyForm);
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
    setSuccess(true);
  };

  const [errors, setErrors] = useState(emptyErrors);
  useEffect(() => {
    validate(form, setErrors);
  }, [form]);

  const [success, setSuccess] = useState(false);

  // types selector
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

  const numericalStats = [
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
      <FormContainer onSubmit={onSubmitHandler}>
        <FormTitle>create your own pokémon!</FormTitle>
        <ImageStatsContainer>
          <FieldGrid>
            <Field primary>
              <FieldLabel primary>name</FieldLabel>
              <InputField
                primary
                autoComplete="off"
                name="name"
                value={form.name}
                onChange={onChangeHandler}
              ></InputField>
              {Object.entries(errors.name).some(
                ([, value]) => value !== ""
              ) && (
                <ErrorValidation name>
                  {Object.entries(errors.name).map(
                    ([, value]) =>
                      value !== "" && (
                        <>
                          {value}
                          <br />
                        </>
                      )
                  )}
                </ErrorValidation>
              )}
              <ValidationIndicator primary>
                max {validNameLength}
              </ValidationIndicator>
            </Field>
            {numericalStats.map((stat) => (
              <Field key={stat}>
                <FieldLabel>{stat}</FieldLabel>
                <InputField
                  autoComplete="off"
                  name={stat}
                  value={form[stat]}
                  onChange={onChangeHandler}
                ></InputField>
                <ValidationIndicator>
                  {validRanges[stat].min} - {validRanges[stat].max}
                </ValidationIndicator>
              </Field>
            ))}
            {numericalStats.some((stat) =>
              Object.entries(errors[stat]).some(([, value]) => value !== "")
            ) && (
              <ErrorValidation stats>
                {numericalStats.map((stat) =>
                  Object.entries(errors[stat]).map(
                    ([, value]) =>
                      value !== "" && (
                        <label key={stat}>
                          {value ? value : ""}
                          <br />
                        </label>
                      )
                  )
                )}
              </ErrorValidation>
            )}
          </FieldGrid>
          {Object.entries(errors.types).map(
            ([, value]) =>
              value !== "" && <ErrorValidation types>{value}</ErrorValidation>
          )}
          <Field image>
            {errors.image.isEmpty && (
              <ErrorValidation image>{errors.image.isEmpty}</ErrorValidation>
            )}
            <Field image>
              <FieldImage alt="pokemon" src={form.image} />
            </Field>
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

        <SubmitButton type="submit" disabled={!isValid(errors)}>
          submit
        </SubmitButton>
      </FormContainer>
      {success && (
        <SuccessMessageContainer>
          <SuccessClose
            onClick={() => {
              setSuccess(false);
            }}
          >
            x
          </SuccessClose>
          <SuccessMessage>pokémon created successfully!</SuccessMessage>
          <SuccessCreateNew
            onClick={() => {
              setSuccess(false);
              setForm(emptyForm);
            }}
          >
            create new from scratch
          </SuccessCreateNew>
        </SuccessMessageContainer>
      )}
    </MainContainer>
  );
};

export default Form;
