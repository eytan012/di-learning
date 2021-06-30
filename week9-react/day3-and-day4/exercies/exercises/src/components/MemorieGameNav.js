import React from "react";


const MemorieGameNav = (props) => {
    const {score, topScore} = props;
    return (
        <div>
            <h2>
                Super heros memorie game
                Score: {score}
                Top score:{topScore}
            </h2>
        </div>

    )
}
export default MemorieGameNav;