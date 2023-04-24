//react imports
import { ReactNode, useState } from "react"
//ionicons
import { IonIcon } from "@ionic/react"
import { chevronDownOutline } from "ionicons/icons"

type Props = {
    children: ReactNode,
    heading: string,
    index: number
}

const AccordionItem = ({ children, heading, index }: Props) => {
    const [selected, setSelected] = useState<number | null>(null)

    const onClickToggleSelected = (index: number) => {
        if (selected === index) {
            return setSelected(null)
        }
        setSelected(index)
    }
    return (
        <li className="border-b-gray-300 border-b-1 py-6 transition-all text-center lg:text-left" onClick={() => onClickToggleSelected(index)}>
            <button
                aria-controls={`content-${index}`}
                aria-expanded={selected === index ? "true" : "false"}
                id={`accordion-control-${index}`}
                className="w-full text-2xl text-jobi-green-dark font-gorditaSemibold leading-loose cursor-pointer flex gap-4 justify-center items-center lg:justify-start"
            >
                {heading}
                <span>
                    <IonIcon
                        icon={chevronDownOutline}
                        className={
                            selected === index
                                ? "text-base transition-all rotate-180"
                                : 'text-base transition-all'
                        }
                    />
                </span>
            </button>
            <p
                aria-hidden={selected === index ? "false" : "true"}
                id={`content-${index}`}
                className={
                    selected === index
                        ? "font-gorditaLight text-base leading-normal transition-[height] duration-1000 ease-linear max-h-96"
                        : "font-gorditaLight text-base leading-normal transition-[height] duration-1000 ease-linear overflow-hidden max-h-0"
                }
            >
                {children}
            </p>
        </li>
    )
}

export default AccordionItem