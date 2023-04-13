import Button from "../../../Global/Buttons/Button"
import penIcon from '../../../../assets/index/icons/icon-pen.svg';
import codeIcon from '../../../../assets/index/icons/icon-code.svg';
import bagIcon from '../../../../assets/index/icons/icon-bag.svg';
import phoneIcon from '../../../../assets/index/icons/icon-phone.svg';
import courtIcon from '../../../../assets/index/icons/icon-courthouse.svg';
import barsIcon from '../../../../assets/index/icons/icon-bars.svg';

const CategoryButtons = () => {
    return (
        <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 py-12 font-gordita">
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button style="btn-blue" corners="rounded-full">
                    <img src={penIcon} alt="Fountain pen icon" />
                    UI/UX Design
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button style="btn-cream" corners="rounded-full">
                    <img src={codeIcon} alt="Code icon" />
                    Development
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button style="btn-pink" corners="rounded-full">
                    <img src={bagIcon} alt="Bag icon" />
                    Marketing
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button style="btn-lightgreen" corners="rounded-full">
                    <img src={phoneIcon} alt="Phone Receiver icon" />
                    Telemarketing
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button style="btn-lavender" corners="rounded-full">
                    <img src={courtIcon} alt="Courthouse icon" />
                    Accounting
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button style="btn-orange" corners="rounded-full">
                    <img src={barsIcon} alt="Barsicon" />
                    Editing
                </Button>
            </li>
        </ul>
    )
}

export default CategoryButtons