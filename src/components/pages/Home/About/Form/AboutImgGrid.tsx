//Image imports
import headshot1x2 from "../../../../../assets/index/headshots/headshot-viktor-forgacs.jpg";
import headshot1x1 from "../../../../../assets/index/headshots/headshot-michael-dam.jpg";
import headshot2x2 from "../../../../../assets/index/headshots/headshot-jason-moyer.jpg";
import dotGrid from "../../../../../assets/index/about-grid/dot-grid.png"

const AboutImgGrid = () => {
  return (
    <div className="hidden lg:grid grid-cols-3 auto-rows-min gap-12 w-4/5 ">
      <img src={headshot1x2} alt="Headshot of a man with black hair, brown eyes, and a trimmed beard and moustache wearing business casual white shirt, looking towards the left" className="col-span-2 row-span-1 rounded-tl-[4rem] rounded-br-[4rem]" />
      <img src={dotGrid} alt="Decorative grid of a 3x3 grid of black dots" className="col-span-1 row-span-1 self-center" />
      <img src={headshot1x1} alt="Headshot of a woman facing the camera, smiling widely. She has long, brown, wavy hair and is wearing a red long-sleeved shirt and red lipstick." className="col-span-1 row-span-1 rounded-bl-[2rem] rounded-tr-[2rem]" />
      <img src={headshot2x2} alt="Headshot of woman with black hair tied in two buns, wearing brown glasses, medium-sized hoop earrings and a pink suit, looking towards the left and smiling." className="col-span-2 row-span-2 rounded-[4rem]" />
    </div>
  )
}

export default AboutImgGrid