import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
    GiFlowerTwirl,
    GiLipstick,
    GiMirrorMirror,
    GiSpray,
} from "react-icons/gi";
import { FaSpa, FaSmile } from "react-icons/fa";
import { MdFace, MdOutlineSelfImprovement } from "react-icons/md";

// Import local images
import LuxuryFacial from "../assets/LFT.jpg";
import HairStyling from "../assets/HSC.jpg";
import BodyMassage from "../assets/FBM.jpg";
import BridalMakeup from "../assets/BM.jpg";
import Manicure from "../assets/MP.jpg";
import LaserHairRemoval from "../assets/LHR.jpg";
import Microblading from "../assets/MB.jpg";
import BodyScrub from "../assets/BSW.jpg";


const Services = () => {

    const [showAll, setShowAll] = useState(false);

    const services = [
        {
            id: 1,
            title: "Luxury Facial Therapy",
            price: "$450",
            image: LuxuryFacial,
            tags: ["Skincare", "Relaxation"],
            description:
                "Premium facial treatment with organic products and hot stone therapy",
            icon: <MdFace className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 2,
            title: "Hair Styling & Coloring",
            price: "$150",
            image: HairStyling,
            tags: ["Haircare", "Styling"],
            description:
                "Expert color matching and precision cutting with top-tier products",
            icon: <GiMirrorMirror className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 3,
            title: "Full Body Massage",
            price: "$250",
            image: BodyMassage,
            tags: ["Spa", "Wellness"],
            description:
                "Aromatherapy massage combining Swedish and deep tissue techniques",
            icon: <FaSpa className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 4,
            title: "Bridal Makeup",
            price: "$300",
            image: BridalMakeup,
            tags: ["Makeup", "Special Events"],
            description:
                "Professional bridal makeup with long-lasting, photo-friendly products",
            icon: <GiLipstick className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 5,
            title: "Manicure & Pedicure",
            price: "$100",
            image: Manicure,
            tags: ["Nails", "Care"],
            description: "Luxurious nail treatment with paraffin wax and massage",
            icon: <GiFlowerTwirl className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 6,
            title: "Laser Hair Removal",
            price: "$200",
            image: LaserHairRemoval,
            tags: ["Permanent", "Treatment"],
            description: "Advanced laser technology for smooth, hair-free skin",
            icon: <GiSpray className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 7,
            title: "Microblading",
            price: "$400",
            image: Microblading,
            tags: ["Eyebrows", "Semi-Permanent"],
            description:
                "Natural-looking eyebrow enhancement with micro-pigmentation",
            icon: <MdOutlineSelfImprovement className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 8,
            title: "Body Scrub & Wrap",
            price: "$400",
            image: BodyScrub,
            tags: ["Detox", "Bodycare"],
            description: "Exfoliating treatment with herbal wraps for glowing skin",
            icon: <FaSmile className="w-8 h-8 text-amber-600" />,
        },
    ];
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#fceedd] to-[#f9eab8]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-[dancing-script] mb-4 bg-gradient-to-r from-[#f7e7ce] to-[#ffefb4] bg-clip-text">
                    Our Beauty Spa & Salon Services
                </h2>
                <p>
                    Indulge in our curated selection of premium spa and salon services designed to rejuvenate your body and mind.
                </p>
            </div>
        </div>

    </section>
  )
}

export default Services