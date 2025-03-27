'use client'
import { handleRegister } from "@/app/utils/RegisterApi"
const FormWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <form className="login-form flex flex-col gap-4 w-full" onSubmit={handleRegister}>
            {children}
        </form>
    )
}

export default FormWrapper