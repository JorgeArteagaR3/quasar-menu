import { useContext, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PreviewContext } from "./App";

const SubSection = ({ item }) => {
    const [isSubListOpen, setIsSubListOpen] = useState(false);
    const { setPreview } = useContext(PreviewContext);
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
                <p
                    onClick={() => {
                        if (item.url) {
                            setPreview(item.url);
                        }
                    }}
                >
                    <li className={isSubListOpen ? "list-item" : "list-item"}>
                        <item.Icon className="icon" />
                        {item.title}
                    </li>
                </p>
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
                        key={subitem.subtitle}
                        className={isSubListOpen ? "sub-item" : "inactive"}
                        onClick={() => {
                            subitem.url && setPreview(subitem.url);
                        }}
                    >
                        <div className="circle"></div> {subitem.subtitle}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default SubSection;
