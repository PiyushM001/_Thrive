import React, { useEffect, useState } from "react";
import NotifyComp from './notifycomp';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./footer";
import Header from "./header";

export default function Notificationpage() {
    const a = useContext(pContext);
    const { notificationarray, getnotification } = a;

    useEffect(() => {
        getnotification();

    }, []);

    return (
        <div className="bg-[#0e0e0e] h-[100vh] pt-[10vh]">
            <Header />
            <div className="bg-[#0e0e0e] w-[100%] h-[80vh] overflow-y-scroll ">
               <div className="z-[10000000000]"><ToastContainer /></div> 
                {notificationarray.length === 0 ? (
                    <div className="text-white text-center py-4">
                        No notifications
                    </div>
                ) : (
                    notificationarray.map((value) => (
                        <NotifyComp
                            key={value.id}
                            inviterteamname={value.teamname}
                            inviteid={value.id}
                            inviterRealName={value.followerRealName}
                            inviterIngameName={value.followerIngameName}
                        />
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
}
