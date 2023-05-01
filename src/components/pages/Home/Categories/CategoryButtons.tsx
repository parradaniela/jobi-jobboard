//Image imports
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
                <Button ariaLabel="View all UI/UX Design jobs" style="btn-blue" corners="rounded-full">
                    <img src={penIcon} role="presentation" />
                    UI/UX Design
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button ariaLabel="View all Development jobs" style="btn-cream" corners="rounded-full">
                    <img src={codeIcon} role="presentation" />
                    Development
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button ariaLabel="View all Marketing jobs" style="btn-pink" corners="rounded-full">
                    <img src={bagIcon} role="presentation" />
                    Marketing
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button ariaLabel="View all Telemarketing jobs" style="btn-lightgreen" corners="rounded-full">
                    <img src={phoneIcon} role="presentation" />
                    Telemarketing
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button ariaLabel="View all Accounting jobs" style="btn-lavender" corners="rounded-full">
                    <img src={courtIcon} role="presentation" />
                    Accounting
                </Button>
            </li>
            <li className="w-full sm:w-2/3 md:w-auto">
                <Button ariaLabel="View all Editing jobs" style="btn-orange" corners="rounded-full">
                    <img src={barsIcon} role="presentation" />
                    Editing
                </Button>
            </li>
        </ul>
    )
}

export default CategoryButtons