import Button from "../../../Global/Buttons/Button"
import penIcon from '../../../../assets/index/icons/icon-pen.svg';
import codeIcon from '../../../../assets/index/icons/icon-code.svg';
import bagIcon from '../../../../assets/index/icons/icon-bag.svg';
import phoneIcon from '../../../../assets/index/icons/icon-phone.svg';
import courtIcon from '../../../../assets/index/icons/icon-courthouse.svg';
import barsIcon from '../../../../assets/index/icons/icon-bars.svg';
import { NavLink } from "react-router-dom";

const Categories = () => {
    return (
        <section className="wrapper py-8">
            <div className="flex justify-between items-center">
                <h2 className="font-circularStd text-4xl font-medium text-jobi-black">Most Demanding Categories</h2>
                <NavLink to="error" className="font-gordita text-sm text-jobi-green-bright py-2 border-b-2 border-b-jobi-green-bright transition-all hover:text-jobi-green-dark hover:border-b-jobi-green-dark focus:text-jobi-green-dark focus:border-b-jobi-green-dark">Explore all fields &rsaquo;</NavLink>
            </div>
            <ul className="flex justify-center items-center gap-8 py-8 font-gordita">
                <li>
                    <Button style="btn-blue" corners="rounded-full">
                        <img src={penIcon} alt="Fountain pen icon" />
                        UI/UX Design
                    </Button>
                </li>
                <li>
                    <Button style="btn-cream" corners="rounded-full">
                        <img src={codeIcon} alt="Code icon" />
                        Development
                    </Button>
                </li>
                <li>
                    <Button style="btn-pink" corners="rounded-full">
                        <img src={bagIcon} alt="Bag icon" />
                        Marketing
                    </Button>
                </li>
                <li>
                    <Button style="btn-lightgreen" corners="rounded-full">
                        <img src={phoneIcon} alt="Phone Receiver icon" />
                        Telemarketing
                    </Button>
                </li>
                <li>
                    <Button style="btn-lavender" corners="rounded-full">
                        <img src={courtIcon} alt="Courthouse icon" />
                        Accounting
                    </Button>
                </li>
                <li>
                    <Button style="btn-orange" corners="rounded-full">
                        <img src={barsIcon} alt="Barsicon" />
                        Editing
                    </Button>
                </li>
            </ul>
        </section>
    )
}

export default Categories