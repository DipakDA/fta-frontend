/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FamilyMember } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FamilyMemberUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    email?: string;
    mobileNumber?: string;
    currentOccupation?: string;
    placeOfBirth?: string;
    address?: string;
    cityTown?: string;
    pincode?: number;
    fatherName?: string;
    children?: string[];
    maritalStatus?: string;
    sibling?: string[];
};
export declare type FamilyMemberUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    mobileNumber?: ValidationFunction<string>;
    currentOccupation?: ValidationFunction<string>;
    placeOfBirth?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    cityTown?: ValidationFunction<string>;
    pincode?: ValidationFunction<number>;
    fatherName?: ValidationFunction<string>;
    children?: ValidationFunction<string>;
    maritalStatus?: ValidationFunction<string>;
    sibling?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FamilyMemberUpdateFormOverridesProps = {
    FamilyMemberUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mobileNumber?: PrimitiveOverrideProps<TextAreaFieldProps>;
    currentOccupation?: PrimitiveOverrideProps<TextFieldProps>;
    placeOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    cityTown?: PrimitiveOverrideProps<TextFieldProps>;
    pincode?: PrimitiveOverrideProps<TextFieldProps>;
    fatherName?: PrimitiveOverrideProps<TextFieldProps>;
    children?: PrimitiveOverrideProps<TextFieldProps>;
    maritalStatus?: PrimitiveOverrideProps<TextFieldProps>;
    sibling?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FamilyMemberUpdateFormProps = React.PropsWithChildren<{
    overrides?: FamilyMemberUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    familyMember?: FamilyMember;
    onSubmit?: (fields: FamilyMemberUpdateFormInputValues) => FamilyMemberUpdateFormInputValues;
    onSuccess?: (fields: FamilyMemberUpdateFormInputValues) => void;
    onError?: (fields: FamilyMemberUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FamilyMemberUpdateFormInputValues) => FamilyMemberUpdateFormInputValues;
    onValidate?: FamilyMemberUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FamilyMemberUpdateForm(props: FamilyMemberUpdateFormProps): React.ReactElement;
