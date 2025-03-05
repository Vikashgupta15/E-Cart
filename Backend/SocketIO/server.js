import {Server} from "socket.io";
import http from "http";
import express from "express";
import { Socket } from "dgram";

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3001",
        methods:["GET","POST"],
    }
})
//used to listen events on server side.
io.on("connction",(Socket)=>{
    console.log("a user connected",Socket.id);

    // Used to listen client side event on server side
    Socket.on("disconnect",()=>{
        console.log("a user disconnected",Socket.id);
    })
})

export {app, io, server}