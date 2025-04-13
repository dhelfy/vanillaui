import styles from "./styles.module.css"
import { fetchComponentByID } from "@/API/componentsAPI";
import BackButton from "./ui/BackButton/BackButton";
import CodeBlock from "./ui/CodeBlock/CodeBlock";

type Params = Promise<{ id: string }>;

export default async function ComponentPage({ params }: { params: Params }) {
    const {id} = await params

    const component = await fetchComponentByID(id)

    if (!component) {
        return (
            "Loading..."
        )
    }

    return (
        <div className={styles.componentPage}>
            <h1>{component.name}</h1>
            <CodeBlock component={component} />

            <BackButton />
        </div>
    );
}
