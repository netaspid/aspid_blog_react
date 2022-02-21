import {config} from '../config';
import axios from 'axios';
export const contentApi = {
  getAllPosts() {
    const url = `${config.a_host}:${config.a_port}/posts`;
    return axios.get(url).then((response) => response.data);
  },
};
