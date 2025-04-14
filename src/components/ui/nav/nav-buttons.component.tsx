import LinkButton from "../link-button/link-button.component"

const NavButtons = ({classes}: {classes?: string}) => {
    return (
        <div className={`gap-4 items-center justify-center md:justify-start mt-10 md:mt-0 ${classes}`}>
            <LinkButton href={"/login"} text="Zaloguj" classes="bg-zinc-600" />
            <LinkButton href={"/register"} text="Zarejestruj" classes="border-1 border-zinc-600 hover:bg-zinc-600" />
        </div>
    )
}

export default NavButtons