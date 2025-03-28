const ErrorMessage = ({ message }: { message: string | null }) => {
    if (!message) return null;

    return (
        <p className="text-red-500 mt-5 font-medium text-sm w-fit">
            {message}
        </p>
    );
};

export default ErrorMessage;
