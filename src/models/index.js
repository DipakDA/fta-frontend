// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FamilyMember, IndMobileNumber } = initSchema(schema);

export {
  FamilyMember,
  IndMobileNumber
};