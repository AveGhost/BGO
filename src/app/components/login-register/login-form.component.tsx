'use client'

import { useState } from "react"
import FromInput from "./form-input.component"
import handleLogin from "@/app/utils/LoginApi"
import FormButton from "./form-button.component"
import FormWrapper from "./form-wrapper.component"

const LoginForm = () => {
    const [formData, setFormData] = useState({email: '', password: ''})
    const [isDataValid, setIsDataValid] = useState<string | null>(null)
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errorMessage = await handleLogin(formData);
        setIsDataValid(errorMessage);
    }
    return (
        <div className="form w-full max-w-[450px] min-h-[350px] p-4">
            <div className="flex flex-col gap-4 justify-center items-center h-full">
                <h1 className="text-2xl text-center mb-6">Logowanie</h1>
                <FormWrapper onSubmit={formSubmit} isDataValid={isDataValid}>
                    <FromInput icon="majesticons:user-line" type="email" placeholder="Adres e-mail" name="email" value={formData.email} event={handleInputChange} />
                    <FromInput icon="carbon:password" type="password" placeholder="Hasło" name="password" value={formData.password} event={handleInputChange} />
                    <FormButton text="Zaloguj się"/>
                </FormWrapper>
            </div>
        </div>
    )
}

export default LoginForm