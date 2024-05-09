/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { LogoWithTextProps } from "./LogoWithText";
import { MyIconProps } from "./MyIcon";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderOverridesProps = {
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    "DALL\u00B7E 2024-05-08 21.06.01 - Design a logo for a family tree web app 1"?: PrimitiveOverrideProps<ImageProps>;
    LogoWithText?: LogoWithTextProps;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    "My Profile"?: PrimitiveOverrideProps<TextProps>;
    Search?: PrimitiveOverrideProps<TextProps>;
    "Family Tree"?: PrimitiveOverrideProps<TextProps>;
    "Contact Admins"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderOverridesProps | undefined | null;
}>;
export default function NavBarHeader(props: NavBarHeaderProps): React.ReactElement;
