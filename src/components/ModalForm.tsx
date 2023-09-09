import React, { FormEvent, useRef } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
} from "@nextui-org/react";

import { Textarea } from "@nextui-org/react";

import formOptions from "./component-configs/modal-form-config";

import { Input } from "@nextui-org/react";

import { Select, SelectItem } from "@nextui-org/react";

interface ModalFormProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function ModalForm({ children, ...props }: ModalFormProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formRef = useRef(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!formRef.current) return;
    
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // Here you would add logic to send the form data, e.g., a POST request to your server, then redirect
  }

  return (
    <>
      <Button onPress={onOpen} {...props}>
        {children}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          const userWantsToClose = confirm(
            "om du stänger formuläret så raderas dina svar. Är du säker?"
          );
          if (userWantsToClose) onOpenChange();
        }}
        backdrop="blur"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Fyll i formuläret så återkommer vi!
              </ModalHeader>
              <form ref={formRef} className="space-y-3" onSubmit={handleSubmit}>
                <ModalBody>
                  <Select label="Select an animal" isRequired name="animal">
                    {formOptions.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <Input
                        type="text"
                        label="Förnamn"
                        name="fname"
                        isRequired
                      />
                      <Input type="text" label="Efternamn" name="lname" />
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        type="email"
                        label="E-post"
                        name="email"
                        isRequired
                      />
                      <Input
                        type="text"
                        label="Telefonnummer"
                        name="phone"
                        isRequired
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        type="text"
                        label="Postnummer"
                        name="postcode"
                        isRequired
                      />
                    </div>
                    <Textarea
                      placeholder="Meddelande"
                      name="message"
                    ></Textarea>
                    <Checkbox defaultSelected name="consent">
                      Jag godkänner GDPR-gällande datalagring.
                    </Checkbox>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Stäng
                  </Button>
                  <Button type="submit" variant="shadow" color="primary">
                    Skicka
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
