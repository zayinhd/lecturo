import React from "react";
import Button from "../../../components/button/Button";

const LCourses = () => {
    return (
        <>
            <div>
                <div className="flex justify-start">
                    <Button>Courses</Button>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="grow">
                            <Button>Introduction to Computer Science</Button>
                        </div>
                        <div className="grow m-auto">
                            <Button>L100</Button>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="grow">
                            <Button>Introduction to Computer Science</Button>
                        </div>
                        <div className="grow m-auto">
                            <Button>L100</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LCourses;
