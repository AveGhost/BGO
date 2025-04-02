'use client'

import { useState } from "react"
import FormWrapper from "../form/form-wrapper.component"
import FormButton from "../form/form-button.component"
import FormInput from "../form/form-input.component"
import handleRegister from "@/app/utils/RegisterApi"

const RegisterForm = () => {
    const [formData, setFormData] = useState({email: '', password: '', first_name: '', last_name: '', username: '', password2: ''})
    const [isDataValid, setIsDataValid] = useState<string | null>(null)
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errorMessage = await handleRegister(formData);
        setIsDataValid(errorMessage);
    }
    return (
        <div className="form w-full max-w-[450px] min-h-[550px] p-4">
            <div className="flex flex-col gap-4 justify-center items-center h-full">
                <h1 className="text-2xl text-center mb-6">Rejestracja</h1>
                <FormWrapper onSubmit={formSubmit} isDataValid={isDataValid}>
                    <FormInput icon="majesticons:user-line" type="text" placeholder="Imie" name="first_name" value={formData.first_name} event={handleInputChange} />
                    <FormInput icon="majesticons:user-line" type="text" placeholder="Nazwisko" name="last_name" value={formData.last_name} event={handleInputChange}/>
                    <FormInput icon="majesticons:user-line" type="text" placeholder="Nazwa użytkownika" name="username" value={formData.username} event={handleInputChange}/>
                    <FormInput icon="carbon:email" type="email" placeholder="Adres e-mail" name="email" value={formData.email} event={handleInputChange}/>
                    <FormInput icon="carbon:password" type="password" placeholder="Hasło" name="password" value={formData.password} event={handleInputChange}/>
                    <FormInput icon="carbon:password" type="password" placeholder="Powtórz hasło" name="password2" value={formData.password2} event={handleInputChange}/>
                    <FormButton text="Zarejestruj się" />
                </FormWrapper>
            </div>
        </div>
    )
}

export default RegisterForm