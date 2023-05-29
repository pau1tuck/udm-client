import { TrackRowLgHeader } from "./lg/TrackRowLgHeader";

export const ListView = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="">
            <TrackRowLgHeader />
            <div className="">{children}T</div>
        </div>
    );
};
