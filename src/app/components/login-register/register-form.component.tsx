'use client'
import FromInput from "./form-input.component"

const RegisterForm = () => {
    const handleRegister = async (e: any) => {
        e.preventDefault()
        const res = await fetch('https://server-production-9e17.up.railway.app/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": "test",
                "password": "test1",
                "username": "test2",
                "first_name": "test3",
                "last_name": "test4"
            })
        })
        console.log(res)
    }
    return (
        <div className="form w-full max-w-[450px] min-h-[550px] p-4">
            <div className="flex flex-col gap-4 justify-center items-center h-full">
                <h1 className="text-2xl text-center mb-6">Rejestracja</h1>
                <form className="login-form flex flex-col gap-4 w-full" onSubmit={handleRegister}>
                    <FromInput icon="majesticons:user-line" type="text" placeholder="Imię" name="name" />
                    <FromInput icon="majesticons:user-line" type="text" placeholder="Nazwisko" name="lastname" />
                    <FromInput icon="majesticons:user-line" type="text" placeholder="Nazwa użytkownika" name="username" />
                    <FromInput icon="carbon:email" type="text" placeholder="Adres e-mail" name="email" />
                    <FromInput icon="carbon:password" type="password" placeholder="Hasło" name="password" />
                    <FromInput icon="carbon:password" type="password" placeholder="Powtórz hasło" name="password2" />
                    <button type="submit" className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300 w-full">Zarejestruj się</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm