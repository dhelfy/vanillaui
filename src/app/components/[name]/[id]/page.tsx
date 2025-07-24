import styles from "./styles.module.css"
import { fetchComponentByID } from "@/API/componentsAPI";
import BackButton from "./ui/BackButton/BackButton";
import CodeBlock from "./ui/CodeBlock/CodeBlock";

type Params = Promise<{ id: string, name: string}>;

export default async function ComponentPage({ params }: { params: Params }) {
    const {id, name} = await params

    const component = await fetchComponentByID(id, name)

    if (!component) {
        return (
            "Loading..."
        )
    }

    return (
        <div className={styles.componentPage}>
            <div>
                <h1>{component.name}</h1>
                <BackButton />
            </div>

            <CodeBlock component={component} />
        </div>
    );
}
