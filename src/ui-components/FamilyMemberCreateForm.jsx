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
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { FamilyMember } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
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
export default function FamilyMemberCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    mobileNumber: "",
    currentOccupation: "",
    placeOfBirth: "",
    address: "",
    cityTown: "",
    pincode: "",
    fatherName: "",
    children: [],
    maritalStatus: "",
    sibling: [],
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [mobileNumber, setMobileNumber] = React.useState(
    initialValues.mobileNumber
  );
  const [currentOccupation, setCurrentOccupation] = React.useState(
    initialValues.currentOccupation
  );
  const [placeOfBirth, setPlaceOfBirth] = React.useState(
    initialValues.placeOfBirth
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [cityTown, setCityTown] = React.useState(initialValues.cityTown);
  const [pincode, setPincode] = React.useState(initialValues.pincode);
  const [fatherName, setFatherName] = React.useState(initialValues.fatherName);
  const [children, setChildren] = React.useState(initialValues.children);
  const [maritalStatus, setMaritalStatus] = React.useState(
    initialValues.maritalStatus
  );
  const [sibling, setSibling] = React.useState(initialValues.sibling);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setDateOfBirth(initialValues.dateOfBirth);
    setEmail(initialValues.email);
    setMobileNumber(initialValues.mobileNumber);
    setCurrentOccupation(initialValues.currentOccupation);
    setPlaceOfBirth(initialValues.placeOfBirth);
    setAddress(initialValues.address);
    setCityTown(initialValues.cityTown);
    setPincode(initialValues.pincode);
    setFatherName(initialValues.fatherName);
    setChildren(initialValues.children);
    setCurrentChildrenValue("");
    setMaritalStatus(initialValues.maritalStatus);
    setSibling(initialValues.sibling);
    setCurrentSiblingValue("");
    setErrors({});
  };
  const [currentChildrenValue, setCurrentChildrenValue] = React.useState("");
  const childrenRef = React.createRef();
  const [currentSiblingValue, setCurrentSiblingValue] = React.useState("");
  const siblingRef = React.createRef();
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    dateOfBirth: [{ type: "Required" }],
    email: [{ type: "Email" }],
    mobileNumber: [{ type: "JSON" }],
    currentOccupation: [],
    placeOfBirth: [],
    address: [{ type: "Required" }],
    cityTown: [{ type: "Required" }],
    pincode: [{ type: "Required" }],
    fatherName: [],
    children: [],
    maritalStatus: [{ type: "Required" }],
    sibling: [],
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
          firstName,
          lastName,
          dateOfBirth,
          email,
          mobileNumber,
          currentOccupation,
          placeOfBirth,
          address,
          cityTown,
          pincode,
          fatherName,
          children,
          maritalStatus,
          sibling,
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
          const modelFieldsToSave = {
            firstName: modelFields.firstName,
            lastName: modelFields.lastName,
            dateOfBirth: modelFields.dateOfBirth,
            email: modelFields.email,
            currentOccupation: modelFields.currentOccupation,
            placeOfBirth: modelFields.placeOfBirth,
            address: modelFields.address,
            cityTown: modelFields.cityTown,
            pincode: modelFields.pincode,
            fatherName: modelFields.fatherName,
            children: modelFields.children,
            maritalStatus: modelFields.maritalStatus,
            sibling: modelFields.sibling,
            mobileNumber: modelFields.mobileNumber
              ? JSON.parse(modelFields.mobileNumber)
              : modelFields.mobileNumber,
          };
          await DataStore.save(new FamilyMember(modelFieldsToSave));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FamilyMemberCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth: value,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email: value,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextAreaField
        label="Mobile number"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber: value,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.mobileNumber ?? value;
          }
          if (errors.mobileNumber?.hasError) {
            runValidationTasks("mobileNumber", value);
          }
          setMobileNumber(value);
        }}
        onBlur={() => runValidationTasks("mobileNumber", mobileNumber)}
        errorMessage={errors.mobileNumber?.errorMessage}
        hasError={errors.mobileNumber?.hasError}
        {...getOverrideProps(overrides, "mobileNumber")}
      ></TextAreaField>
      <TextField
        label="Current occupation"
        isRequired={false}
        isReadOnly={false}
        value={currentOccupation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation: value,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.currentOccupation ?? value;
          }
          if (errors.currentOccupation?.hasError) {
            runValidationTasks("currentOccupation", value);
          }
          setCurrentOccupation(value);
        }}
        onBlur={() =>
          runValidationTasks("currentOccupation", currentOccupation)
        }
        errorMessage={errors.currentOccupation?.errorMessage}
        hasError={errors.currentOccupation?.hasError}
        {...getOverrideProps(overrides, "currentOccupation")}
      ></TextField>
      <TextField
        label="Place of birth"
        isRequired={false}
        isReadOnly={false}
        value={placeOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth: value,
              address,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.placeOfBirth ?? value;
          }
          if (errors.placeOfBirth?.hasError) {
            runValidationTasks("placeOfBirth", value);
          }
          setPlaceOfBirth(value);
        }}
        onBlur={() => runValidationTasks("placeOfBirth", placeOfBirth)}
        errorMessage={errors.placeOfBirth?.errorMessage}
        hasError={errors.placeOfBirth?.hasError}
        {...getOverrideProps(overrides, "placeOfBirth")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address: value,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="City town"
        isRequired={true}
        isReadOnly={false}
        value={cityTown}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown: value,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.cityTown ?? value;
          }
          if (errors.cityTown?.hasError) {
            runValidationTasks("cityTown", value);
          }
          setCityTown(value);
        }}
        onBlur={() => runValidationTasks("cityTown", cityTown)}
        errorMessage={errors.cityTown?.errorMessage}
        hasError={errors.cityTown?.hasError}
        {...getOverrideProps(overrides, "cityTown")}
      ></TextField>
      <TextField
        label="Pincode"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={pincode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode: value,
              fatherName,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.pincode ?? value;
          }
          if (errors.pincode?.hasError) {
            runValidationTasks("pincode", value);
          }
          setPincode(value);
        }}
        onBlur={() => runValidationTasks("pincode", pincode)}
        errorMessage={errors.pincode?.errorMessage}
        hasError={errors.pincode?.hasError}
        {...getOverrideProps(overrides, "pincode")}
      ></TextField>
      <TextField
        label="Father name"
        isRequired={false}
        isReadOnly={false}
        value={fatherName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName: value,
              children,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.fatherName ?? value;
          }
          if (errors.fatherName?.hasError) {
            runValidationTasks("fatherName", value);
          }
          setFatherName(value);
        }}
        onBlur={() => runValidationTasks("fatherName", fatherName)}
        errorMessage={errors.fatherName?.errorMessage}
        hasError={errors.fatherName?.hasError}
        {...getOverrideProps(overrides, "fatherName")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName,
              children: values,
              maritalStatus,
              sibling,
            };
            const result = onChange(modelFields);
            values = result?.children ?? values;
          }
          setChildren(values);
          setCurrentChildrenValue("");
        }}
        currentFieldValue={currentChildrenValue}
        label={"Children"}
        items={children}
        hasError={errors?.children?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("children", currentChildrenValue)
        }
        errorMessage={errors?.children?.errorMessage}
        setFieldValue={setCurrentChildrenValue}
        inputFieldRef={childrenRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Children"
          isRequired={false}
          isReadOnly={false}
          value={currentChildrenValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.children?.hasError) {
              runValidationTasks("children", value);
            }
            setCurrentChildrenValue(value);
          }}
          onBlur={() => runValidationTasks("children", currentChildrenValue)}
          errorMessage={errors.children?.errorMessage}
          hasError={errors.children?.hasError}
          ref={childrenRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "children")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Marital status"
        isRequired={true}
        isReadOnly={false}
        value={maritalStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus: value,
              sibling,
            };
            const result = onChange(modelFields);
            value = result?.maritalStatus ?? value;
          }
          if (errors.maritalStatus?.hasError) {
            runValidationTasks("maritalStatus", value);
          }
          setMaritalStatus(value);
        }}
        onBlur={() => runValidationTasks("maritalStatus", maritalStatus)}
        errorMessage={errors.maritalStatus?.errorMessage}
        hasError={errors.maritalStatus?.hasError}
        {...getOverrideProps(overrides, "maritalStatus")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              dateOfBirth,
              email,
              mobileNumber,
              currentOccupation,
              placeOfBirth,
              address,
              cityTown,
              pincode,
              fatherName,
              children,
              maritalStatus,
              sibling: values,
            };
            const result = onChange(modelFields);
            values = result?.sibling ?? values;
          }
          setSibling(values);
          setCurrentSiblingValue("");
        }}
        currentFieldValue={currentSiblingValue}
        label={"Sibling"}
        items={sibling}
        hasError={errors?.sibling?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("sibling", currentSiblingValue)
        }
        errorMessage={errors?.sibling?.errorMessage}
        setFieldValue={setCurrentSiblingValue}
        inputFieldRef={siblingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Sibling"
          isRequired={false}
          isReadOnly={false}
          value={currentSiblingValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.sibling?.hasError) {
              runValidationTasks("sibling", value);
            }
            setCurrentSiblingValue(value);
          }}
          onBlur={() => runValidationTasks("sibling", currentSiblingValue)}
          errorMessage={errors.sibling?.errorMessage}
          hasError={errors.sibling?.hasError}
          ref={siblingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "sibling")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
