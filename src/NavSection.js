import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import SubSection from "./SubSection";
const NavSection = ({ title, list }) => {
    const [isSectionOpen, setIsSectionOpen] = useState(false);

    return (
        <div className="nav-section">
            <p
                onClick={() => {
                    setIsSectionOpen(!isSectionOpen);
                }}
                className={isSectionOpen ? "section-active" : ""}
            >
                {title}
                <MdKeyboardArrowRight
                    className={isSectionOpen ? "arrow arrow-active" : "arrow"}
                />
            </p>
            {isSectionOpen && (
                <ul className={isSectionOpen && "active"}>
                    {list.map((item, index) => (
                        <SubSection item={item} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavSection;
