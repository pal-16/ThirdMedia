import React, { useState } from 'react'
import profilePic from '../assets/img/profile.jpg';
import "../styles/Profile.css";
import pawan from '../assets/pawan.jpeg'
import "./drop-file-input/drop-file-input.css";
import DropFileInput from './drop-file-input/DropFileInput';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
const Profile = () => {
    const onFileChange = (files) => {
        console.log(files);
    }

    const [address, setAddress] = useState("");
    const [title, setTitle] = useState("");
    const [openDonate, setOpenDonate] = useState(false);
    const [openUpload, setOpenUpload] = useState(false);

    const handleClickToOpenUpload = () => {
        setOpenUpload(true);
    };

    const handleToCloseUpload = () => {
        setOpenUpload(false);
    };

    const handleToSaveUpload = () => {
        setOpenUpload(false);
    };

    const handleClickToOpenDonate = () => {
        setOpenDonate(true);
    };

    const handleToCloseDonate = () => {
        setOpenDonate(false);
    };

    const handleToSaveDonate = () => {
        setOpenDonate(false);
    };

    return (
        <>
            <main className="profile-page">
                <section className="section1"></section>
                <section className="relative rounded-xl mx-4  shadow-purple-600 bg-inherit px-8">
                    <div className="px-8">
                        <div className="relative flex flex-col min-w-0 break-words bg-inherit w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center mx-auto">
                                        <div className="w-[75%] relative flex justify-center">
                                            <img
                                                alt="..."
                                                src={pawan}
                                                className=" rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center flex flex-row">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button
                                                className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}
                                                type="button"
                                                onClick={
                                                    handleClickToOpenDonate
                                                }
                                            >
                                                Donate
                                            </button>
                                        </div>
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button
                                                className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}
                                                type="button"
                                                onClick={
                                                    handleClickToOpenUpload
                                                }
                                            >
                                                Upload
                                            </button>
                                        </div>
                                    </div>
                                    <Dialog
                                        open={openUpload}
                                        onClose={handleToCloseUpload}
                                    >
                                        <DialogContent>
                                            <DialogContentText>
                                                <div className="box">
                                                    <h2 className="header">
                                                        Enter a title
                                                    </h2>
                                                    <div className="w-full px-2 text-lg font-bold  shadow-xl bg-purple-200 shadow-[#ccc] active:shadow-md my-2">
                                                        <input
                                                            className="w-full border-xl px-4 border-solid bg-purple-200 border-purple-800 text-black"
                                                            type="text"
                                                            placeholder='Title or Heading'
                                                            onChange={(e) =>
                                                                setAddress(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            required
                                                        ></input>
                                                    </div>
                                                    <DropFileInput
                                                        onFileChange={(files) =>
                                                            onFileChange(files)
                                                        }
                                                    />
                                                </div>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button
                                                onClick={handleToCloseUpload}
                                                color="primary"
                                                autoFocus
                                            >
                                                Close
                                            </Button>
                                            <Button
                                                onClick={handleToSaveUpload}
                                                color="primary"
                                                autoFocus
                                            >
                                                Confirm
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                    <Dialog
                                        open={openDonate}
                                        onClose={handleToCloseUpload}
                                    >
                                        <DialogContent>
                                            <DialogContentText>
                                                <div className="box">
                                                    <h2 className="header">
                                                        Receiver's Address
                                                    </h2>
                                                    <div className="w-full px-2 text-lg font-bold  shadow-md shadow-purple-300 active:shadow-md">
                                                        <input
                                                            className="w-full px-2 border-xl border-solid border-purple-800"
                                                            type="text"
                                                            onChange={(e) =>
                                                                setTitle(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            required
                                                        ></input>
                                                    </div>
                                                </div>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button
                                                onClick={handleToCloseDonate}
                                                color="primary"
                                                autoFocus
                                            >
                                                Close
                                            </Button>
                                            <Button
                                                onClick={handleToSaveDonate}
                                                color="primary"
                                                autoFocus
                                            >
                                                Confirm
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-white">
                                                    22
                                                </span>
                                                <span className="text-sm text-white">
                                                    Streak
                                                </span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-white">
                                                    100
                                                </span>
                                                <span className="text-sm text-white">
                                                    Users
                                                </span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-white">
                                                    89
                                                </span>
                                                <span className="text-sm text-white">
                                                    Impressions
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-8 ">
                                    <h3 className="text-4xl font-semibold leading-normal text-white mb-2 ">
                                        Jenna Stones
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i>{" "}
                                        Mumbai, India
                                    </div>
                                </div>
                                <div className="mt-6 py-4 border-t border-gray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-white">
                                                An artist of considerable range,
                                                Jenna the name taken by
                                                Melbourne-raised, Brooklyn-based
                                                Nick Murphy writes, performs and
                                                records all of his own music,
                                                giving it a warm, intimate feel
                                                with a solid groove structure.
                                                An artist of considerable range.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profile