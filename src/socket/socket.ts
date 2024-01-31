import { useLocalStorage } from '@/helper/localstorage';
import { io } from 'socket.io-client';

export const socket = io('ws://localhost:9000/namespace',{autoConnect:true,auth:{token:useLocalStorage().get('token')} ,transports:['websocket']});