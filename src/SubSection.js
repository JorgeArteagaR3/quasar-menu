import { useState } from "react";

const SubSection = ({ item }) => {
    const [isSubListOpen, setIsSubListOpen] = useState(false);

    return (
        <div className="list">
            <li
                className="list-item"
                onClick={() => {
                    setIsSubListOpen(!isSubListOpen);
                }}
            >
                <item.Icon className="icon" />
                {item.title}
            </li>
            {item?.sublist?.map((subitem) => (
                <p className={isSubListOpen ? "" : "inactive"}>{subitem}</p>
            ))}
        </div>
    );
};

export default SubSection;
