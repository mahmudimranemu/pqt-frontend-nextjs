// components/PhoneNumberInput.tsx
"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
// You can also import a light version of the stylesheet
// import 'react-phone-number-input/style.css'

// Or if you're using react-hook-form
// import { useForm, Controller } from 'react-hook-form';

export default function PhoneNumberInput() {
  // State to store the phone number value
  const [value, setValue] = useState<string | undefined>();

  return (
    <div>
      {/* <label htmlFor='phone-input'>Phone Number</label> */}
      <PhoneInput
        id='phone-input'
        placeholder='Enter phone number'
        value={value}
        onChange={setValue}
        defaultCountry='BD' // Optional: set a default country
        international
        withCountryCallingCode
      />
    </div>
  );
}
