import {Dispatch, SetStateAction} from 'react';

type MessageType = 'success' | 'error' | 'warning';

export interface InputProps {
  messageType?: MessageType;
  message?: string;
  showMessage?: boolean;
  label: string;
  placeholder: string;
  value: string | undefined;
  onValueChange: Dispatch<SetStateAction<string>>;
  type?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode';
}

export interface MessageProps {
  type?: MessageType;
}

export interface TextInputProps {
  messageType?: MessageType;
  hasMessage?: boolean;
}
