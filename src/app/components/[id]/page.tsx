'use client'

import { Code } from "@/components/Code/Code";
import { CopyButton } from "@/components/CopyButton/CopyButton";
import CstmButton from "@/components/CstmButton/CstmButton";
import { redirect, useParams } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.css"
import { CodeNavigation } from "@/components/CodeNavigation/CodeNavigation";
import { useQuery } from '@tanstack/react-query';
import { fetchComponentByID } from "@/API/componentsAPI";

export default function ComponentsPage() {
    const params = useParams<{ id: string }>();

    const { data, error, isLoading } = useQuery(  {queryKey: ['component', params.id], queryFn: () => fetchComponentByID(params.id)});

    const [active, setActive] = useState('tsx');

    const onClick = () => { redirect(`/components`) }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading component: {error.message}</div>;
    }

    if (!data) {
        return <div>No data found</div>;
    }

    const component = data;

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

                    <CopyButton text={component.files[active as 'jsx' | 'tsx' | 'css']} />
                </div>

                <hr className={styles.divider} />

                <Code
                    lang={active}
                    langs={Object.keys(component.files)}
                    codeFromProps={component.files[active as 'jsx' | 'tsx' | 'css']}
                />
            </div>

            <CstmButton onClick={onClick}>
                Back
            </CstmButton>
        </div>
    );
}
