/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getBook } from "../graphql/queries";
import { updateBook } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BookUpdateForm(props) {
  const {
    id: idProp,
    book: bookModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    author: [],
    description: "",
    bookCover: "",
    price: "",
    ISBN10: "",
    stock: "",
    available: false,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [bookCover, setBookCover] = React.useState(initialValues.bookCover);
  const [price, setPrice] = React.useState(initialValues.price);
  const [ISBN10, setISBN10] = React.useState(initialValues.ISBN10);
  const [stock, setStock] = React.useState(initialValues.stock);
  const [available, setAvailable] = React.useState(initialValues.available);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bookRecord
      ? { ...initialValues, ...bookRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setAuthor(cleanValues.author ?? []);
    setCurrentAuthorValue("");
    setDescription(cleanValues.description);
    setBookCover(cleanValues.bookCover);
    setPrice(cleanValues.price);
    setISBN10(cleanValues.ISBN10);
    setStock(cleanValues.stock);
    setAvailable(cleanValues.available);
    setErrors({});
  };
  const [bookRecord, setBookRecord] = React.useState(bookModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getBook.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBook
        : bookModelProp;
      setBookRecord(record);
    };
    queryData();
  }, [idProp, bookModelProp]);
  React.useEffect(resetStateValues, [bookRecord]);
  const [currentAuthorValue, setCurrentAuthorValue] = React.useState("");
  const authorRef = React.createRef();
  const validations = {
    title: [{ type: "Required" }],
    author: [{ type: "Required" }],
    description: [{ type: "Required" }],
    bookCover: [{ type: "Required" }],
    price: [{ type: "Required" }],
    ISBN10: [{ type: "Required" }],
    stock: [{ type: "Required" }],
    available: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          author,
          description,
          bookCover,
          price,
          ISBN10,
          stock,
          available,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateBook.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bookRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BookUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              author,
              description,
              bookCover,
              price,
              ISBN10,
              stock,
              available,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              author: values,
              description,
              bookCover,
              price,
              ISBN10,
              stock,
              available,
            };
            const result = onChange(modelFields);
            values = result?.author ?? values;
          }
          setAuthor(values);
          setCurrentAuthorValue("");
        }}
        currentFieldValue={currentAuthorValue}
        label={"Author"}
        items={author}
        hasError={errors?.author?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("author", currentAuthorValue)
        }
        errorMessage={errors?.author?.errorMessage}
        setFieldValue={setCurrentAuthorValue}
        inputFieldRef={authorRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Author"
          isRequired={true}
          isReadOnly={false}
          value={currentAuthorValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.author?.hasError) {
              runValidationTasks("author", value);
            }
            setCurrentAuthorValue(value);
          }}
          onBlur={() => runValidationTasks("author", currentAuthorValue)}
          errorMessage={errors.author?.errorMessage}
          hasError={errors.author?.hasError}
          ref={authorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "author")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              author,
              description: value,
              bookCover,
              price,
              ISBN10,
              stock,
              available,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Book cover"
        isRequired={true}
        isReadOnly={false}
        value={bookCover}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              author,
              description,
              bookCover: value,
              price,
              ISBN10,
              stock,
              available,
            };
            const result = onChange(modelFields);
            value = result?.bookCover ?? value;
          }
          if (errors.bookCover?.hasError) {
            runValidationTasks("bookCover", value);
          }
          setBookCover(value);
        }}
        onBlur={() => runValidationTasks("bookCover", bookCover)}
        errorMessage={errors.bookCover?.errorMessage}
        hasError={errors.bookCover?.hasError}
        {...getOverrideProps(overrides, "bookCover")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              author,
              description,
              bookCover,
              price: value,
              ISBN10,
              stock,
              available,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Isbn10"
        isRequired={true}
        isReadOnly={false}
        value={ISBN10}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              author,
              description,
              bookCover,
              price,
              ISBN10: value,
              stock,
              available,
            };
            const result = onChange(modelFields);
            value = result?.ISBN10 ?? value;
          }
          if (errors.ISBN10?.hasError) {
            runValidationTasks("ISBN10", value);
          }
          setISBN10(value);
        }}
        onBlur={() => runValidationTasks("ISBN10", ISBN10)}
        errorMessage={errors.ISBN10?.errorMessage}
        hasError={errors.ISBN10?.hasError}
        {...getOverrideProps(overrides, "ISBN10")}
      ></TextField>
      <TextField
        label="Stock"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={stock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              author,
              description,
              bookCover,
              price,
              ISBN10,
              stock: value,
              available,
            };
            const result = onChange(modelFields);
            value = result?.stock ?? value;
          }
          if (errors.stock?.hasError) {
            runValidationTasks("stock", value);
          }
          setStock(value);
        }}
        onBlur={() => runValidationTasks("stock", stock)}
        errorMessage={errors.stock?.errorMessage}
        hasError={errors.stock?.hasError}
        {...getOverrideProps(overrides, "stock")}
      ></TextField>
      <SwitchField
        label="Available"
        defaultChecked={false}
        isDisabled={false}
        isChecked={available}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              author,
              description,
              bookCover,
              price,
              ISBN10,
              stock,
              available: value,
            };
            const result = onChange(modelFields);
            value = result?.available ?? value;
          }
          if (errors.available?.hasError) {
            runValidationTasks("available", value);
          }
          setAvailable(value);
        }}
        onBlur={() => runValidationTasks("available", available)}
        errorMessage={errors.available?.errorMessage}
        hasError={errors.available?.hasError}
        {...getOverrideProps(overrides, "available")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || bookModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || bookModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
