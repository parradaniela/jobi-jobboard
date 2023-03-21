type PropsType = {
    children: string,
    fill: 'green' | 'outline',
    corners: 'rounded' | 'rounded-full'
}

type ButtonVariantsType = {
    green: string,
    outline: string,
    rounded: string,
    square: string
}

const Button = ({ children, fill, corners }: PropsType) => {

    const buttonVariants: ButtonVariantsType = {
        green: "bg-jobi-green-bright border border-jobi-green-bright text-white px-3 py-1.5 transition-colors hover:bg-jobi-green-light hover:border-jobi-green-light hover:text-jobi-green-dark focus:bg-jobi-green-light focus:border-jobi-green-light focus:text-jobi-green-dark",
        outline: "bg-transparent border border-white text-white px-3 py-1.5 transition-colors hover:border-jobi-green-bright hover:text-jobi-green-bright focus:border-jobi-green-bright focus:text-jobi-green-bright",
        rounded: "rounded-full",
        square: "rounded"
    }

    return (
        <button
            className={buttonVariants[fill as keyof ButtonVariantsType] + " " + buttonVariants[corners as keyof ButtonVariantsType]}
        >
            {children}
        </button>
    )
}

export default Button