import ErrorMessage from "./error-message.component"

export interface FormWrapperProps {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isDataValid: string | null
}
const FormWrapper = ({ children, onSubmit, isDataValid }: FormWrapperProps) => {
    return (
        <>
            <form className="login-form flex flex-col gap-4 w-full" onSubmit={e => onSubmit(e)}>
                {children}
            </form>
            {isDataValid && <ErrorMessage message={isDataValid} />}
        </>
    )
}

export default FormWrapper