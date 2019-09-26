// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/actionypes";

export default function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}