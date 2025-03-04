import axios from "axios";
import styles from "./ComponentPage.module.css"
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CstmButton } from "../../shared/ui/CstmButton/CstmButton";
import { CodeNavigation } from "./ui/CodeNavigation/CodeNavigation";
import copyIcon from "../../assets/icons/copy_icon.svg"

export const ComponentPage: FC = () => {
    const [component, setComponent] = useState({
        name: '',
        files: {
            jsx: '',
            css: '',
            tsx: ''
        }
    })

    const [active, setActive] = useState('tsx')
    const params = useParams();
    const navigate = useNavigate();

    const onClick = () => navigate(-1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/components/${params.id}`);
                setComponent(response.data);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.componentPage}>
            <h1>{component.name}</h1>
            <div className={styles.codeBlock}>
                <div className={styles.toolPanel}>
                    <CodeNavigation 
                        values={Object.keys(component.files)}
                        setActive={(value) => {
                            setActive(value)
                        }}
                        active={active}
                    />
                    <img src={copyIcon} className={styles.copyBtn}/>
                </div>

                {component.files[active as 'tsx' | 'jsx' | 'css']}
            </div>

            <CstmButton onClick={onClick}>
                Back
            </CstmButton>
        </div>
    );
};
