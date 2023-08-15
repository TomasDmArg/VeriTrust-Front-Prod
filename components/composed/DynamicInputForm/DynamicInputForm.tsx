import React, { ChangeEvent, useState } from "react";
import styles from "./DynamicInputForm.module.scss";
import InputForm from "@/components/InputForm/InputForm";
import { IconPlus } from "@tabler/icons-react";

interface DynamicFormProps {
  dynamicInputs: string[];
  onDynamicInputChange: (name: string, dynamicInputs: string[]) => void;
  type: string;
  name: string;
  label: string;
  placeholder: string;
}

const DynamicInputForm: React.FC<DynamicFormProps> = ({
  dynamicInputs,
  onDynamicInputChange,
  type,
  name,
  label,
  placeholder,
}) => {
  const [formState, setFormState] = useState<string[]>(dynamicInputs);

  const addInput = () => {
    const updatedForm = [...formState, ""];
    setFormState(updatedForm);
    onDynamicInputChange(name, updatedForm);
  };

  const handleChange = (inputName: string, inputValue: any, index?: number) => {
    if (index != undefined) {
      const updatedDynamicInputs = [...formState];
      updatedDynamicInputs[index] = inputValue;
      setFormState(updatedDynamicInputs);
      onDynamicInputChange(name, updatedDynamicInputs);
    }
  };

  return (
    <div className={styles.dynamic_input_form}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.inputs_container}>
        {formState.map((inputValue, index) => (
          <div key={index}>
            <InputForm
              index={index}
              name={name + "-" + index}
              placeholder={placeholder}
              value={inputValue}
              type={type}
              handleChange={handleChange}
            />
          </div>
        ))}
      </div>
      <button onClick={addInput} type="button">
        <IconPlus /> Añadir campo
      </button>
    </div>
  );
};

export default DynamicInputForm;