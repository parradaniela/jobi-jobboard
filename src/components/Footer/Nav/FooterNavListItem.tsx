import ListItemLinks from "../../Global/LILinks/ListItemLinks"
import { FooterData } from "./footerNavData"

type PropsType = {
    heading: string,
    navLinks: FooterData[]
}

const FooterNavListItem = ({ heading, navLinks }: PropsType) => {
    return (
        <li className="transition-all px-10 md:px-14 lg:px-20 xl:px-10 sm:self-start">
            <p className="text-xl font-circularStd font-medium leading-normal">{heading}</p>
            <ul>
                {
                    navLinks.map(link => {
                        return (
                            <ListItemLinks
                                key={link.text}
                                url={link.url}
                                text={link.text}
                                extraClasses="font-gordita leading-10 text-sm hover:text-jobi-green-lime focus-within:text-jobi-green-lime"
                            />
                        )
                    })
                }
            </ul>
        </li>
    )
}

export default FooterNavListItem