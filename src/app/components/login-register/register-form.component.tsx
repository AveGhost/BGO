'use server'

import FromInput from "./form-input.component"
import FormWrapper from "./form-wrapper.component"
import FormButton from "./form-button.component"

const RegisterForm = () => {
    return (
        <div className="form w-full max-w-[450px] min-h-[550px] p-4">
            <div className="flex flex-col gap-4 justify-center items-center h-full">
                <h1 className="text-2xl text-center mb-6">Rejestracja</h1>
                <FormWrapper>
                    <FromInput icon="majesticons:user-line" type="text" placeholder="Imie" name="name" />
                    <FromInput icon="majesticons:user-line" type="text" placeholder="Nazwisko" name="lastname" />
                    <FromInput icon="majesticons:user-line" type="text" placeholder="Nazwa użytkownika" name="username" />
                    <FromInput icon="carbon:email" type="text" placeholder="Adres e-mail" name="email" />
                    <FromInput icon="carbon:password" type="password" placeholder="Hasło" name="password" />
                    <FromInput icon="carbon:password" type="password" placeholder="Powtórz hasło" name="password2" />
                    <FormButton text="Zarejestruj się" />
                </FormWrapper>
            </div>
        </div>
    )
}

export default RegisterForm