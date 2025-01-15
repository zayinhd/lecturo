import React from "react";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";

const Timetable = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                    <Button>Timetable</Button>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="m-auto">
                            <Link>
                                <Button>Monday</Button>
                            </Link>
                        </div>
                        <div className="grow">
                            <Button>Introduction to Computer Science</Button>
                        </div>
                        <div className="m-auto">
                            <Link>
                                <Button>L100</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timetable;
