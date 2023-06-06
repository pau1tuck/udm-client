export function GridView({ children }: React.PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-wrap justify-center">{children}</div>
        </div>
    );
}
