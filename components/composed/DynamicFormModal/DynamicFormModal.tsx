import styles from "./DynamicFormModal.module.scss";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { TenderItem } from "@/constants/tender";
import { IconX } from "@tabler/icons-react";
import InputForm from "@/components/InputForm/InputForm";
import TextArea from "@/components/TextAreaForm/TextAreaForm";
import { Button } from "@/components/Button/Button";

interface DynamicFormModalProps {
  onFormSubmit: (formData: TenderItem) => void;
  handleClose: () => void;
}

const DynamicFormModal: React.FC<DynamicFormModalProps> = ({
  onFormSubmit,
  handleClose,
}) => {
  const [formState, setFormState] = useState<TenderItem>({
    id: 0,
    object: "",
    code: "",
    description: "",
    quantity: 0,
  });

  const handleInputChange = (name: string, inputValue: any) => {
    setFormState({
      ...formState,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleClose();
    onFormSubmit(formState);
  };

  return (
    <div className={styles.modal_container}>
      {/* <button onClick={() => setModalIsOpen(true)}>Add Item</button> */}
      {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}> */}
      <div className={styles.modal}>
        <header>
          <h3>Añadir producto o servicio</h3>
          <div className={styles.close} onClick={handleClose}>
            <IconX size={35} />
          </div>
        </header>
        <form onSubmit={handleSubmit} className={styles.dynamic_form}>
          <div className={styles.form_section}>
            <InputForm
              required
              label="Objeto del gasto"
              name="object"
              handleChange={handleInputChange}
              value={formState.object}
              placeholder="Numero objeto"
            />
            <InputForm
              required
              label="Código del ítem"
              name="code"
              handleChange={handleInputChange}
              value={formState.code}
              placeholder="Codigo"
            />
            <InputForm
              required
              label="Cantidad"
              name="quantity"
              type="number"
              handleChange={handleInputChange}
              value={formState.quantity}
              placeholder="0"
            />
          </div>

          <TextArea
            required
            label="Descripción"
            name="description"
            handleChange={handleInputChange}
            value={formState.description}
            placeholder="descripción..."
          />
          <div className={styles.form_section}>
            <InputForm
              label="Luegar de entrega"
              name="deliveryPlace"
              handleChange={handleInputChange}
              value={formState.deliveryPlace}
              placeholder="Luegar de entrega"
            />
            <InputForm
              type="date"
              label="Fecha de entrega"
              name="deliveryDeadline"
              handleChange={handleInputChange}
              value={formState.deliveryDeadline}
              placeholder="Fecha de entrega"
            />
            <InputForm
              label="Información adicional"
              name="additionalInfo"
              handleChange={handleInputChange}
              value={formState.additionalInfo}
              placeholder="Información adicional"
            />
          </div>
          <button className={styles.btn_submit} type="submit">
            Agregar
          </button>
        </form>
      </div>
      {/* </Modal> */}
    </div>
  );
};

export default DynamicFormModal;
