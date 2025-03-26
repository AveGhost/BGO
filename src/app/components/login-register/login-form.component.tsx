import FromInput from "./form-input.component"

const LoginForm = () => {
    return (
        <div className="form w-full max-w-[450px] min-h-[350px] p-4">
            <div className="flex flex-col gap-4 justify-center items-center h-full">
                <h1 className="text-2xl text-center mb-6">Logowanie</h1>
                <form className="login-form flex flex-col gap-4 w-full">
                    <FromInput icon="majesticons:user-line" type="text" placeholder="Nazwa użytkownika" name="username" />
                    <FromInput icon="carbon:password" type="password" placeholder="Hasło" name="password" />
                    <button type="submit" className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300 w-full">Zaloguj się</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm