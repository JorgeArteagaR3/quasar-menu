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
                <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <li className={isSubListOpen ? "list-item" : "list-item"}>
                        <item.Icon className="icon" />
                        {item.title}
                    </li>
                </a>
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
                    <a
                        href={subitem?.url}
                        key={subitem.subtitle}
                        className={isSubListOpen ? "sub-item" : "inactive"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="circle"></div> {subitem.subtitle}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SubSection;
