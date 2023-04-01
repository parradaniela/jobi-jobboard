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
        <section className="wrapper">
            <h2>Most Demanding Categories</h2>
            <NavLink to="error">Explore all fields &rsaquo;</NavLink>
            <ul className="flex justify-between items-center">
                <li>
                    <Button style="btn-green" corners="rounded-full">
                        <img src={penIcon} alt="Fountain pen icon" />
                        UI/UX Design
                    </Button>
                </li>
                <li>
                    <Button style="btn-green" corners="rounded-full">
                        <img src={codeIcon} alt="Code icon" />
                        Development
                    </Button>
                </li>
                <li>
                    <Button style="btn-green" corners="rounded-full">
                        <img src={bagIcon} alt="Bag icon" />
                        Marketing
                    </Button>
                </li>
                <li>
                    <Button style="btn-green" corners="rounded-full">
                        <img src={phoneIcon} alt="Phone Receiver icon" />
                        Telemarketing
                    </Button>
                </li>
                <li>
                    <Button style="btn-green" corners="rounded-full">
                        <img src={courtIcon} alt="Courthouse icon" />
                        Accounting
                    </Button>
                </li>
                <li>
                    <Button style="btn-green" corners="rounded-full">
                        <img src={barsIcon} alt="Barsicon" />
                        Editing
                    </Button>
                </li>
            </ul>
        </section>
    )
}

export default Categories