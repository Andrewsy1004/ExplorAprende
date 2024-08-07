
export const Section = ({ id, title, children, image, alt, bgColor, textColor }) => {
    return (
        <section id={id} className={`${bgColor} ${textColor} py-20 md:py-32`}>
            <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
                {image && (
                    <div className="md:w-1/2">
                        <img src={image} width={600} height={400} alt={alt} className="rounded-lg shadow-lg" />
                    </div>
                )}
                <div className={`md:w-1/2 ${image ? 'md:ml-10' : ''} space-y-1`}>
                    <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                    {children}
                </div>
            </div>
        </section>
    )
}
