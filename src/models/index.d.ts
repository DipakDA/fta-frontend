import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerIndMobileNumber = {
  readonly MobileNumber?: string | null;
}

type LazyIndMobileNumber = {
  readonly MobileNumber?: string | null;
}

export declare type IndMobileNumber = LazyLoading extends LazyLoadingDisabled ? EagerIndMobileNumber : LazyIndMobileNumber

export declare const IndMobileNumber: (new (init: ModelInit<IndMobileNumber>) => IndMobileNumber)

type EagerFamilyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FamilyMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth: string;
  readonly email?: string | null;
  readonly mobileNumber?: IndMobileNumber | null;
  readonly currentOccupation?: string | null;
  readonly placeOfBirth?: string | null;
  readonly address: string;
  readonly cityTown: string;
  readonly pincode: number;
  readonly fatherName?: string | null;
  readonly children?: (string | null)[] | null;
  readonly maritalStatus: string;
  readonly sibling?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFamilyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FamilyMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth: string;
  readonly email?: string | null;
  readonly mobileNumber?: IndMobileNumber | null;
  readonly currentOccupation?: string | null;
  readonly placeOfBirth?: string | null;
  readonly address: string;
  readonly cityTown: string;
  readonly pincode: number;
  readonly fatherName?: string | null;
  readonly children?: (string | null)[] | null;
  readonly maritalStatus: string;
  readonly sibling?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FamilyMember = LazyLoading extends LazyLoadingDisabled ? EagerFamilyMember : LazyFamilyMember

export declare const FamilyMember: (new (init: ModelInit<FamilyMember>) => FamilyMember) & {
  copyOf(source: FamilyMember, mutator: (draft: MutableModel<FamilyMember>) => MutableModel<FamilyMember> | void): FamilyMember;
}