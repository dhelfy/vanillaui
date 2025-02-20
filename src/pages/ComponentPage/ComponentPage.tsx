import { FC } from "react"
import { useNavigate } from "react-router-dom";

export const ComponentPage: FC = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Component Page</h1>
            <button onClick={onClick} style={{
                color: "black",
                cursor: "pointer"
            }}>Back</button>
        </div>
    )
}