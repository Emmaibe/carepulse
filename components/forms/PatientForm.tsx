"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import {CustomFormField} from "@/components/CustomFormField";
import {SubmitButton} from "@/components/SubmitButton";
import {useState} from "react";
import {UserFormValidation} from "@/lib/validation";
import {useRouter} from "next/navigation";
import {createUser} from "@/lib/actions/patient.actions";

export enum FormFieldType {
    INPUT = "input",
    TEXT_AREA = "textarea",
    CHECKBOX = "checkbox",
    PHONE_INPUT = "phoneInput",
    SELECT = "select",
    DATE_PICKER = "datePicker",
    SKELETON = "SKELETON",
}

export const PatientForm = () => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false)

    // 1. Define your form.
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async ({ name, email, phone }: z.infer<typeof UserFormValidation>) => {
        setIsLoading(true);

        try {

            const userData = { name, email, phone };

            console.log(userData)

            const user = await createUser(userData);

            if (user) router.push(`/patients/${user.$id}/register`);

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">

                <section className="mb-12 space-y-4">
                    <h1 className="header">Hi there 👋</h1>
                    <p className="text-dark-700">
                        Schedule your first appointment
                    </p>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="User"
                />

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="Email"
                />

                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="(234) 814-456-7890"
                />

                <SubmitButton isLoading={isLoading}>
                    Get Started
                </SubmitButton>
            </form>
        </Form>
    );
};