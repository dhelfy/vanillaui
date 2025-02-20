import { FC } from "react"
import styles from "./ComponentCard.module.css"
import { useNavigate } from "react-router-dom";

interface ComponentCardProps {
    title: string;
    image: string;
    id: number;
}

export const ComponentCard: FC<ComponentCardProps> = ({ title, image, id }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/components/${id}`);
    }

    return (
        <div className={styles.componentCard} onClick={onClick}>
            <div className={styles.componentShowcase}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.componentInfo}>
                <p>{title}</p>
            </div>
        </div>
    )
}
