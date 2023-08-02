

export const Image =({ className, image, alt, objectCover, as, ...rest }: ImageProps) => {
    const Component = as || 'div'
    return (
        <Component className={className} {...rest}>
            <img src={image} alt={alt} className={`w-full h-full ${objectCover}`} />
        </Component>
    )
}
