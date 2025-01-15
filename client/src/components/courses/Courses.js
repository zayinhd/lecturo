import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Courses = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                    <Button>Database</Button>
                </div>
                <div className="flex flex-row">
                    <div>
                        <Link to="">
                            <Button>Slides</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="">
                            <Button>Videos</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="">
                            <Button>Topics</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="grow">
                            <Button>Introduction to Computer Science</Button>
                        </div>
                        <div className="grow m-auto">
                            <Link>
                                <Button>View</Button>
                            </Link>
                        </div>
                        <div className="grow m-auto">
                            <Link>
                                <Button>Download</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
