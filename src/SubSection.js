import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const SubSection = ({ item }) => {
    const [isSubListOpen, setIsSubListOpen] = useState(false);
    return (
        <div className="list">
            <div
                className={
                    isSubListOpen && item?.sublist
                        ? "list-item-container open"
                        : "list-item-container"
                }
                onClick={() => {
                    setIsSubListOpen(!isSubListOpen);
                }}
            >
                <li className={isSubListOpen ? "list-item" : "list-item"}>
                    <item.Icon className="icon" />
                    {item.title}
                </li>
                {item?.sublist && (
                    <MdKeyboardArrowRight
                        className={
                            isSubListOpen ? "arrow arrow-active " : "arrow"
                        }
                    />
                )}
            </div>
            <div className="sub-items">
                {item?.sublist?.map((subitem) => (
                    <p
                        key={subitem}
                        className={isSubListOpen ? "sub-item" : "inactive"}
                    >
                        <div className="circle"></div> {subitem}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default SubSection;
