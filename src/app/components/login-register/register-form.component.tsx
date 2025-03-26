import { Icon } from "@iconify/react/dist/iconify.js"

const RegisterForm = () => {
    return (
        <div className="form w-full max-w-[450px] min-h-[450px] p-4">
            <div className="flex flex-col gap-4 justify-center items-center h-full">
                <h1 className="text-2xl text-center mb-6">Rejestracja</h1>
                <form className="login-form flex flex-col gap-4 w-full">
                    <div className="relative w-full">
                        <Icon icon="majesticons:user-line" width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />
                        <input type="text" placeholder="Nazwa użytkownika" className="w-full py-2 px-4 border-1 border-zinc-600 rounded-lg" />
                    </div>
                    <div className="relative w-full">
                        <Icon icon="carbon:email" width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />
                        <input type="text" placeholder="Adres e-mail" className="w-full py-2 px-4 border-1 border-zinc-600 rounded-lg" />
                    </div>
                    <div className="relative w-full">
                        <Icon icon="carbon:password" width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />
                        <input type="password" placeholder="Hasło" className="w-full py-2 px-4 border-1 border-zinc-600 rounded-lg" />
                    </div>
                    <div className="relative w-full">
                        <Icon icon="carbon:password" width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />
                        <input type="password" placeholder="Powtórz hasło" className="w-full py-2 px-4 border-1 border-zinc-600 rounded-lg" />
                    </div>
                    <button type="submit" className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300 w-full">Zarejestruj się</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm