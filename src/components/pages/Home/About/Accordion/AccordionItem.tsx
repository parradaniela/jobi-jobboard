import { ReactNode, useState } from "react"

type Props = {
    children: ReactNode,
    heading: string,
    index: number
}

const AccordionItem = ({ children, heading, index }: Props) => {
    const [selected, setSelected] = useState<number | null>(null)
    const onClickToggle = (index: number | null) => {
        if (selected === index) {
            return setSelected(null)
        }
        setSelected(index)
    }
    return (
        <li className="border-b-gray-300 border-b-1 py-6 transition-all" onClick={() => onClickToggle(index)}>
            <h3 className="text-2xl text-jobi-green-dark font-gorditaSemibold leading-loose cursor-pointer">
                {heading} <span className="-rotate-45">&rsaquo;</span>
            </h3>
            <p className={selected === index
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