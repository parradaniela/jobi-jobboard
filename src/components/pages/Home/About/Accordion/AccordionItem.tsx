import { ReactNode, useState } from "react"

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
        <li className="border-b-gray-300 border-b-1 py-6 transition-all" onClick={() => onClickToggleSelected(index)}>
            <button
                aria-controls={`content-${index}`}
                aria-expanded={selected === index ? "true" : "false"}
                id={`accordion-control-${index}`}
                className="text-2xl text-jobi-green-dark font-gorditaSemibold leading-loose cursor-pointer text-left"
            >
                {heading} <span className="-rotate-45">&rsaquo;</span>
            </button>
            <p
                aria-hidden={selected === index ? "false" : "true"}
                id={`content-${index}`}
                className={selected === index
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