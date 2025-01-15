import React from "react";
import Button from "../../../components/button/Button";

const Lecturers = () => {
    return (
        <>
            <div>
                <div className="flex justify-start">
                    <Button>Lecturers</Button>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="grow">
                            <Button>Mr. Annan Maxwell</Button>
                        </div>
                        <div>
                            <Button> Computer Science</Button>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="grow">
                            <Button>Mr. Annan Maxwell</Button>
                        </div>
                        <div>
                            <Button> Computer Science</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lecturers;
