

export const Button = ({ className, children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={className}>{children}</button>
    )
}
