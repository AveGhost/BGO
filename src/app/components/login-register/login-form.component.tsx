'use client'

import { useState } from "react"
import FormInput from "../form/form-input.component"
import handleLogin from "@/app/utils/LoginApi"
import FormButton from "../form/form-button.component"
import FormWrapper from "../form/form-wrapper.component"
import { useContext } from "react"
import { AuthContext } from "@/app/context/AuthProvider"
import { redirect } from "next/navigation"

const LoginForm = () => {
    const [formData, setFormData] = useState({email: '', password: ''})
    const [isDataValid, setIsDataValid] = useState<string | null>(null)
    const { setToken } = useContext(AuthContext)!

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if(isDataValid) {
            setIsDataValid(null)
        }
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {token, error} = await handleLogin(formData)
        if(token) {
            const thisToken = token;
            setToken(thisToken);
            redirect('/');
        }
        setFormData({email: '', password: ''})
        setIsDataValid(error || null);
    }
    return (
        <div className="form w-full max-w-[450px] min-h-[350px] p-4">
            <div className="flex flex-col gap-4 justify-center items-center h-full">
                <h1 className="text-2xl text-center mb-6">Logowanie</h1>
                <FormWrapper onSubmit={formSubmit} isDataValid={isDataValid}>
                    <FormInput icon="majesticons:user-line" type="email" placeholder="Adres e-mail" name="email" value={formData.email} event={handleInputChange} />
                    <FormInput icon="carbon:password" type="password" placeholder="Hasło" name="password" value={formData.password} event={handleInputChange} />
                    <FormButton text="Zaloguj się"/>
                </FormWrapper>
            </div>
        </div>
    )
}

export default LoginForm